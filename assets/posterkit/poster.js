// HIT Webinar poster + live-cover renderer, entirely in the browser.
//
// Input: one event object from assets/data.js (`reports`) and, if the event has a
// `photo` field, the speaker photo at assets/speaker/<photo>; without one a neutral
// placeholder portrait is drawn. Everything is drawn on a <canvas> in the designer
// PSD's pixel units (poster artboard 3545 px wide) and exported as a JPEG under 1 MB.
// Fonts, artwork and the QR library are all served from this site, so the page
// works where Google Fonts and public CDNs do not.
//
// Usage: const { url, blob } = await generate(item, "poster" | "cover");

const FONT = '"HIT Poster Sans"';
const KIT = new URL("./", import.meta.url);
const ART = new URL("art/", KIT).href.replace(/\/$/, "");
const SPEAKER = new URL("../speaker/", KIT).href;
const POSTER_W = 3545;
const POSTER_SCALE = 0.45; // -> 1595 px wide, like past posters
const COVER_SCALE = 0.5;
const MAX_BYTES = 1_000_000;
const WEEKDAYS = "日一二三四五六";

const VARIANTS = {
  talk: {
    dots: [18, 707], hand: [2194, 474], footerBg: [-309, -100],
    titleSize: 134, row: [["主持人/", "host"], ["特邀嘉宾/", "speaker"]],
    timeHeight: 860, qrCard: [2312, -91], qr: [152, 147, 549], timeRows: [299, 521],
    cover: { title: [222, 1119, 2303, 1468, 130], nameX: 1114, nameY: 1681, date: [752, 2069],
             portrait: [868, 2275, 825], full: true },
  },
  routine: {
    dots: [0, 309], hand: [2315, 876], footerBg: [-222, -1107],
    titleSize: 124, row: [["论文分享主讲/", "speaker"], ["主持人/", "host"]],
    timeHeight: 678, qrCard: [2532, 9], qr: [86, 95, 487], timeRows: [282, 461],
    number: [2208, 742], coverNumber: [1632, 672],
    cover: { title: [232, 1136, 2373, 1459, 120], nameX: 1530, nameY: 1735, date: [855, 2006],
             portrait: [858, 2169, 904], full: false },
  },
};

// ------------------------------------------------------------------ data
function cleanText(s) {
  // data.js keeps template literals with indentation and occasional HTML.
  s = (s || "").replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
  const el = document.createElement("textarea");
  el.innerHTML = s;
  s = el.value;
  return s.split(/\n\s*\n/).map(p => p.replace(/\s*\n\s*/g, "").trim()).filter(Boolean).join("\n");
}

export function eventFields(ev) {
  const variant = ev.id.startsWith("routine") ? "routine" : "talk";
  const [y, m, d] = ev.date.split("/").map(Number);
  const weekday = "周" + WEEKDAYS[new Date(y, m - 1, d).getDay()];
  // 论文精读 entries carry no daytime; their posters have always said 20:00-22:00
  const daytime = ev.daytime || `${weekday} ${variant === "routine" ? "20:00-22:00" : "20:00-21:30"}`;
  const start = (daytime.match(/\d{1,2}:\d{2}/) || ["20:00"])[0];
  const meeting = ((ev.link && ev.link.tag) || "").match(/\d{3}-\d{3}-\d{3,4}/);
  const speakerFull = ev.speaker || ev.speakerPaper || "";
  return {
    id: ev.id, variant,
    number: variant === "routine" ? ev.id.replace(/\D/g, "") : "",
    title: ev.title, // past posters keep a leading [Venue] tag
    speaker: speakerFull.split(/\s+/)[0] || "",
    speakerFull,
    host: (ev.host || "").split(/\s+/)[0] || "",
    dateLine: `${ev.date}  ${daytime}`,
    coverDate: `${ev.date} ${daytime.split(/\s+/)[0]} ${start}`,
    meeting: meeting ? meeting[0] : "",
    meetingUrl: (ev.link && ev.link.href) || "",
    abstract: cleanText(ev.info && ev.info.abstract),
    bio: cleanText(ev.info && ev.info.bio),
  };
}

export function missingFields(f) {
  return ["title", "speaker", "host", "abstract", "bio", "meeting", "meetingUrl"].filter(k => !f[k]);
}

// ------------------------------------------------------------------ assets
const cache = new Map();
export function loadImage(src, crossOrigin = false) {
  if (cache.has(src)) return cache.get(src);
  const p = new Promise((resolve, reject) => {
    const img = new Image();
    if (crossOrigin) img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`cannot load ${src}`));
    img.src = src;
  });
  cache.set(src, p);
  return p;
}

async function assets(variant, base) {
  const names = ["header", "footer", "bar", "bullet", "namebar", "qrcard"];
  const out = {};
  await Promise.all([
    ...names.map(async n => { out[n] = await loadImage(`${base}/${variant}_${n}.webp`); }),
    (async () => { out.dots = await loadImage(`${base}/bg_dots.webp`); })(),
    (async () => { out.hand = await loadImage(`${base}/bg_hand.webp`); })(),
    (async () => { out.icon = await loadImage(`${base}/tencent_meeting_icon.webp`); })(),
    (async () => { out.rowBullet = await loadImage(`${base}/talk_rowbullets.webp`); })(),
    (async () => { out.cover = await loadImage(`${base}/cover_${variant}_base.webp`); })(),
  ]);
  return out;
}

let kitReady = null;
function ensureKit() {
  kitReady ??= Promise.all([
    new Promise((resolve, reject) => {
      if (document.querySelector("link[data-hit-poster-fonts]")) return resolve();
      const l = Object.assign(document.createElement("link"), { rel: "stylesheet", href: new URL("fonts/fonts.css", KIT).href });
      l.dataset.hitPosterFonts = "1"; l.onload = resolve; l.onerror = () => reject(new Error("fonts.css"));
      document.head.appendChild(l);
    }),
    new Promise((resolve, reject) => {
      if (window.qrcode) return resolve();
      const sc = Object.assign(document.createElement("script"), { src: new URL("../../vender/qrcode.min.js", KIT).href });
      sc.onload = resolve; sc.onerror = () => reject(new Error("qrcode.min.js"));
      document.head.appendChild(sc);
    }),
  ]);
  return kitReady;
}

function placeholderPhoto() {
  // neutral head-and-shoulders silhouette for events without a speaker photo
  const c = document.createElement("canvas"); c.width = c.height = 1000;
  const x = c.getContext("2d");
  x.fillStyle = "#e8ecf1"; x.fillRect(0, 0, 1000, 1000);
  x.fillStyle = "#bcc5cf";
  x.beginPath(); x.arc(500, 400, 185, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.ellipse(500, 1010, 360, 380, 0, Math.PI, 0); x.fill();
  return c;
}

async function ensureFonts(texts) {
  const all = texts.join("");
  await Promise.all([300, 400, 700].map(w => document.fonts.load(`${w} 100px ${FONT}`, all)));
  await Promise.all([300, 400, 700].map(w => document.fonts.load(`italic ${w} 100px ${FONT}`, all)));
}

// ------------------------------------------------------------------ text layout
const font = (size, weight = 400, italic = false) => `${italic ? "italic " : ""}${weight} ${size}px ${FONT}`;
const NO_LINE_START = "，。、：；！？）》」』”’,.;:!?)%";

function tokenize(text) {
  // Latin words / numbers stay together; every CJK character is its own token.
  return text.match(/[A-Za-z0-9][A-Za-z0-9.\-_/:@'’&+%#]*|\s+|./gsu) || [];
}

function wrap(ctx, text, width) {
  const lines = [];
  for (const para of text.split("\n")) {
    let line = [], w = 0;
    const push = last => {
      while (line.length && /^\s+$/.test(line[line.length - 1].t)) w -= line.pop().w;
      lines.push({ tokens: line, width: w, last });
      line = []; w = 0;
    };
    for (const t of tokenize(para)) {
      const tw = ctx.measureText(t).width;
      if (!line.length && /^\s+$/.test(t)) continue;
      // closing punctuation may hang past the edge rather than open a new line
      if (w + tw > width && line.length && !NO_LINE_START.includes(t)) push(false);
      if (!line.length && /^\s+$/.test(t)) continue;
      line.push({ t, w: tw }); w += tw;
    }
    if (line.length) push(true);
  }
  return lines;
}

function baseline(ctx, top, lineHeight) {
  const m = ctx.measureText("国Hg");
  const a = m.fontBoundingBoxAscent, d = m.fontBoundingBoxDescent;
  return top + (lineHeight - (a + d)) / 2 + a;
}

function drawLines(ctx, lines, x, top, width, lineHeight, { align = "left", justify = false } = {}) {
  lines.forEach((ln, i) => {
    const y = baseline(ctx, top + i * lineHeight, lineHeight);
    let cx = align === "center" ? x + (width - ln.width) / 2 : x;
    const gaps = ln.tokens.length - 1;
    const extra = justify && !ln.last && gaps > 0 && ln.width < width ? (width - ln.width) / gaps : 0;
    ln.x0 = cx;
    for (const tk of ln.tokens) { ctx.fillText(tk.t, cx, y); cx += tk.w + extra; }
    ln.x1 = cx - extra; ln.baseline = y;
  });
  return lines.length * lineHeight;
}

export function balancedLines(ctx, text, maxWidth) {
  // Title line breaking the way a hand-setter would: the fewest lines (one more
  // only when that avoids a bad break), even line lengths, and breaks after
  // punctuation, spaces or joining words rather than inside a word.
  // A literal "\n" in the title always wins.
  if (text.includes("\n")) return wrap(ctx, text, 1e9);
  const n = wrap(ctx, text, maxWidth).length;
  if (n === 1) return wrap(ctx, text, maxWidth);
  const toks = tokenize(text), m = toks.length;
  const widths = new Map();
  const seg = (i, j) => {
    const k = i + "," + j;
    if (!widths.has(k)) widths.set(k, ctx.measureText(toks.slice(i, j).join("").trim()).width);
    return widths.get(k);
  };
  const breakCost = i => { // cost of starting a new line at token i
    const prev = toks[i - 1], next = toks[i];
    if (NO_LINE_START.includes(next)) return Infinity;
    if (/[：:，,；;]$/.test(prev)) return -0.1;
    if (/[、]$/.test(prev) || /\s/.test(prev + next) || "的与和及之".includes(prev)) return 0;
    if ("在从到对于为".includes(next)) return 0.05;
    if (/^[A-Za-z0-9]/.test(next) || /[A-Za-z0-9]$/.test(prev)) return 0.05;
    return 0.5; // inside a CJK word
  };
  let best = null;
  for (const k of [n, n + 1]) {
    const target = seg(0, m) / k;
    // dp[j][i]: best cost covering tokens [0, i) with j lines
    const dp = Array.from({ length: k + 1 }, () => new Array(m + 1).fill(Infinity));
    const back = Array.from({ length: k + 1 }, () => new Array(m + 1).fill(-1));
    dp[0][0] = 0;
    for (let j = 1; j <= k; j++)
      for (let i = 1; i <= m; i++)
        for (let s = j - 1; s < i; s++) {
          if (dp[j - 1][s] === Infinity) continue;
          const w = seg(s, i);
          if (w > maxWidth || !toks.slice(s, i).join("").trim()) continue;
          const c = dp[j - 1][s] + (s ? breakCost(s) : 0) + 2 * ((w - target) / maxWidth) ** 2;
          if (c < dp[j][i]) { dp[j][i] = c; back[j][i] = s; }
        }
    const cost = dp[k][m] + (k - n) * 0.3;
    if (cost < Infinity && (!best || cost < best.cost)) {
      const cuts = [];
      for (let j = k, i = m; j > 0; i = back[j][i], j--) cuts.unshift(back[j][i]);
      const parts = cuts.map((s, idx) => toks.slice(s, cuts[idx + 1] ?? m).join("").trim());
      best = { cost, parts };
    }
  }
  return best ? wrap(ctx, best.parts.join("\n"), 1e9) : wrap(ctx, text, maxWidth);
}

// ------------------------------------------------------------------ QR
function drawQr(ctx, url, x, y, size, icon) {
  const qr = window.qrcode(0, "H");
  qr.addData(url);
  qr.make();
  const n = qr.getModuleCount(), cell = size / n;
  ctx.fillStyle = "#fff";
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "#000";
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++)
      if (qr.isDark(r, c)) ctx.fillRect(x + c * cell, y + r * cell, Math.ceil(cell), Math.ceil(cell));
  const side = size * 0.22, pad = size * 0.02, o = (size - side) / 2;
  ctx.fillStyle = "#fff";
  roundRect(ctx, x + o - pad, y + o - pad, side + 2 * pad, side + 2 * pad, side / 4); ctx.fill();
  ctx.save(); roundRect(ctx, x + o, y + o, side, side, side / 5); ctx.clip();
  ctx.drawImage(icon, x + o, y + o, side, side); ctx.restore();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function drawPhoto(ctx, img, x, y, size, circle = false) {
  // square crop from the top third, so faces stay in frame
  const s = Math.min(img.width, img.height);
  const sx = (img.width - s) / 2, sy = Math.max(0, Math.min(img.height - s, (img.height - s) * 0.3));
  ctx.save();
  if (circle) { ctx.beginPath(); ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2); ctx.clip(); }
  ctx.drawImage(img, sx, sy, s, s, x, y, size, size);
  ctx.restore();
}

// ------------------------------------------------------------------ poster
function posterLayout(ctx, f, A) {
  // Returns draw operations plus total height; positions follow the PSD flow.
  const V = VARIANTS[f.variant], ops = [];
  let y = 0;
  ops.push(c => c.drawImage(A.header, 0, 0));
  if (V.number) ops.push(c => {
    c.font = font(132, 700); c.fillStyle = "#ff2a00"; c.textAlign = "center";
    c.fillText(f.number, V.number[0], baseline(c, V.number[1], 132)); c.textAlign = "left";
  });
  y = 1000;
  const section = label => {
    const top = y;
    ops.push(c => {
      c.drawImage(A.bar, 187, top + 84);
      c.font = font(110, 700); c.fillStyle = "#111";
      c.fillText(label, 278, baseline(c, top + 6, 132));
    });
    y += 200;
  };

  section("分享主题");
  ctx.font = font(V.titleSize, 700, true);
  const titleLines = balancedLines(ctx, f.title, POSTER_W - 600);
  const tTop = y + 40;
  ops.push(c => {
    c.font = font(V.titleSize, 700, true); c.fillStyle = "#111";
    drawLines(c, titleLines, 300, tTop, POSTER_W - 600, 190, { align: "center" });
    for (const ln of titleLines) c.fillRect(ln.x0, ln.baseline + 22, ln.x1 - ln.x0, 7);
  });
  y = tTop + titleLines.length * 190 + 70;

  section("内容简介");
  ctx.font = font(70);
  const absLines = wrap(ctx, f.abstract, POSTER_W - 330 - 230);
  const aTop = y + 40;
  ops.push(c => {
    c.drawImage(A.bullet, 222, aTop + 22);
    c.font = font(70); c.fillStyle = "#111";
    drawLines(c, absLines, 330, aTop, POSTER_W - 560, 114, { justify: true });
  });
  y = aTop + Math.max(500, absLines.length * 114);

  const rTop = y + 90;
  ops.push(c => {
    V.row.forEach(([label, key], i) => {
      const x0 = 560 + i * 1470;
      if (f.variant === "talk") c.drawImage(A.rowBullet, 0, 0, 84, 85, x0, rTop + 22, 84, 85);
      else c.drawImage(A.bullet, x0, rTop + 22);
      const by = baseline((c.font = font(100, 300), c), rTop, 130);
      c.fillStyle = "#333"; c.fillText(label, x0 + 124, by);
      const lw = c.measureText(label).width;
      c.font = font(100, 700); c.fillStyle = "#111";
      c.fillText(key === "host" ? f.host : f.speaker, x0 + 124 + lw + 24, by);
    });
  });
  y = rTop + 130 + 150;

  section("主讲嘉宾");
  const sTop = y - 30;
  // shrink a long bio until it sits beside the portrait (never below 50 px)
  let bioSize = 72, bioLines;
  for (;;) {
    ctx.font = font(bioSize);
    bioLines = wrap(ctx, f.bio, 2082);
    if (bioLines.length * bioSize * 1.75 <= 760 || bioSize <= 50) break;
    bioSize -= 2;
  }
  const bioLh = bioSize * 1.75;
  ops.push(c => {
    drawPhoto(c, A.photo, 212, sTop, 977);
    c.drawImage(A.namebar, 1189, sTop);
    c.font = font(144, 700); c.fillStyle = "#111";
    c.fillText(f.speaker, 1237, baseline(c, sTop, 144));
    c.font = font(bioSize); c.fillStyle = "#111";
    drawLines(c, bioLines, 1213, sTop + 184, 2082, bioLh);
  });
  y = sTop + Math.max(1150, 184 + bioLines.length * bioLh);

  const tmTop = y + 20; // the QR card overlaps this section's heading, so it is drawn inline
  ops.push(c => {
    c.drawImage(A.bar, 187, tmTop + 84);
    c.font = font(110, 700); c.fillStyle = "#111";
    c.fillText("分享时间", 278, baseline(c, tmTop + 6, 132));
    const [cx, cy] = V.qrCard;
    c.drawImage(A.qrcard, cx, tmTop + cy);
    drawQr(c, f.meetingUrl, cx + V.qr[0], tmTop + cy + V.qr[1], V.qr[2], A.icon);
    const [r1, r2] = V.timeRows;
    c.drawImage(A.bullet, 416, tmTop + r1 + 22);
    c.drawImage(A.bullet, 416, tmTop + r2 + 22);
    c.font = font(97); c.fillStyle = "#111";
    c.fillText(f.dateLine, 612, baseline(c, tmTop + r1, 128));
    const by = baseline(c, tmTop + r2, 128);
    c.font = font(97, 700); c.fillStyle = "#0282fc"; c.fillText(f.meeting, 612, by);
    const mw = c.measureText(f.meeting).width;
    c.font = font(97); c.fillStyle = "#111"; c.fillText("（腾讯会议）", 612 + mw + 6, by);
  });
  y = tmTop + V.timeHeight;

  const fTop = y;
  const height = fTop + A.footer.height;
  // backgrounds go underneath everything
  ops.unshift(c => {
    c.drawImage(A.dots, V.dots[0], V.dots[1]);
    c.drawImage(A.hand, V.hand[0], V.hand[1]);
    c.drawImage(A.dots, V.footerBg[0], fTop + V.footerBg[1]);
  });
  ops.push(c => c.drawImage(A.footer, 0, fTop));
  return { ops, height };
}

function makeCanvas(w, h, scale) {
  const cv = document.createElement("canvas");
  cv.width = Math.round(w * scale); cv.height = Math.round(h * scale);
  const ctx = cv.getContext("2d");
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.scale(scale, scale);
  ctx.textBaseline = "alphabetic";
  return [cv, ctx];
}

export async function renderPoster(f, photo, base = ART) {
  const A = { ...(await assets(f.variant, base)), photo };
  await ensureFonts([f.title, f.abstract, f.bio, f.speaker, f.speakerFull, f.host, f.dateLine, f.coverDate,
    f.meeting, "分享主题内容简介主讲嘉宾分享时间主持人特邀嘉宾论文分享主讲/（腾讯会议）国Hg0123456789"]);
  const probe = document.createElement("canvas").getContext("2d");
  const { ops, height } = posterLayout(probe, f, A);
  const [cv, ctx] = makeCanvas(POSTER_W, height, POSTER_SCALE);
  for (const op of ops) { ctx.save(); op(ctx); ctx.restore(); }
  return cv;
}

export async function renderCover(f, photo, base = ART) {
  const A = { ...(await assets(f.variant, base)), photo };
  const V = VARIANTS[f.variant], C = V.cover;
  await ensureFonts([f.title, f.speaker, f.speakerFull, f.coverDate, f.number, "国Hg0123456789"]);
  const [cv, ctx] = makeCanvas(A.cover.width, A.cover.height, COVER_SCALE);
  ctx.drawImage(A.cover, 0, 0);
  if (V.coverNumber) {
    ctx.font = font(132, 700); ctx.fillStyle = "#ff2a00"; ctx.textAlign = "center";
    ctx.fillText(f.number, V.coverNumber[0], baseline(ctx, V.coverNumber[1], 132)); ctx.textAlign = "left";
  }
  const [x0, y0, x1, y1, size] = C.title;
  ctx.font = font(size); ctx.fillStyle = "#171111";
  const lines = balancedLines(ctx, f.title, x1 - x0);
  const lh = size * 1.35, boxTop = y0 - 40, boxH = y1 - y0 + 80;
  drawLines(ctx, lines, x0, boxTop + (boxH - lines.length * lh) / 2, x1 - x0, lh, { align: "center" });
  ctx.font = font(107, 700);
  ctx.fillText(C.full ? f.speakerFull : f.speaker, C.nameX, baseline(ctx, C.nameY - 18, 139));
  ctx.font = font(97, 700);
  ctx.fillText(f.coverDate, C.date[0], baseline(ctx, C.date[1] - 22, 126));
  const [px, py, pd] = C.portrait;
  drawPhoto(ctx, photo, px, py, pd, true);
  return cv;
}

export async function toJpeg(canvas) {
  for (const q of [0.92, 0.88, 0.84, 0.8, 0.76, 0.72, 0.68, 0.64]) {
    const blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", q));
    if (blob.size < MAX_BYTES) return { blob, quality: q };
  }
  throw new Error("JPEG stays above 1 MB even at quality 0.64");
}

export function canGenerate(item) {
  return !missingFields(eventFields(item)).length;
}

const generated = new Map();
export function generate(item, kind = "poster") {
  const key = `${item.id}|${kind}|${item.photo || ""}`;
  if (!generated.has(key)) generated.set(key, (async () => {
    const f = eventFields(item), missing = missingFields(f);
    if (missing.length) throw new Error(`${item.id} 缺少 ${missing.join("、")}`);
    await ensureKit();
    const photo = item.photo ? await loadImage(SPEAKER + item.photo) : placeholderPhoto();
    const canvas = await (kind === "cover" ? renderCover : renderPoster)(f, photo);
    const { blob, quality } = await toJpeg(canvas);
    return { blob, url: URL.createObjectURL(blob), width: canvas.width, height: canvas.height, quality,
             placeholder: !item.photo };
  })());
  const p = generated.get(key);
  p.catch(() => generated.delete(key));
  return p;
}
