// Shared script for /poster/ and /cover/: generate one event's image from data.js.
import { generate } from "./poster.js";

const kind = document.body.dataset.kind; // "poster" | "cover"
const other = kind === "poster" ? "cover" : "poster";
const label = { poster: "海报", cover: "直播封面" };
const $ = id => document.getElementById(id);
const id = new URLSearchParams(location.search).get("id")
  || (location.pathname.match(/\/(?:poster|cover)\/([A-Za-z0-9_-]+)\/?$/) || [])[1];
// data.js declares `const reports`: a global binding, but not a property of window
const all = typeof reports !== "undefined" ? reports : [];
const item = all.find(r => r.id === id) || (!id && all.length ? all[0] : null);

function note(text, cls = "") { $("note").textContent = text; $("note").className = "note " + cls; }

async function main() {
  if (!item) { note(`找不到活动 ${id || ""}`, "err"); return; }
  if (!id) history.replaceState(null, "", `?id=${item.id}`);
  document.title = `${label[kind]} · ${item.title.replace(/<[^>]+>/g, "")} · HIT Webinar`;
  $("title").innerHTML = item.title;
  $("meta").textContent = `${item.date}  ${item.speaker || item.speakerPaper || ""}`;
  $("switch").href = `/${other}/?id=${item.id}`;
  $("switch").textContent = `查看${label[other]}`;
  if (item.poster) { $("original").href = `/assets/poster/${item.poster}`; $("original").hidden = false; }
  note(`${label[kind]}生成中…`);
  try {
    const r = await generate(item, kind);
    // a data: URL keeps long-press "save image" working in WeChat and mobile browsers
    const dataUrl = await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(r.blob); });
    $("img").src = dataUrl; $("img").hidden = false;
    $("download").href = r.url; $("download").download = `${item.id}${kind === "cover" ? "_cover" : ""}.jpg`;
    $("download").hidden = false;
    note(`${r.width}×${r.height} · ${Math.round(r.blob.size / 1024)} KB${r.placeholder ? " · 嘉宾照片尚未提供，暂用占位图" : ""}`,
         r.placeholder ? "warn" : "");
  } catch (e) {
    console.error(e);
    note(`无法生成${label[kind]}：${e.message}`, "err");
  }
}
main();
