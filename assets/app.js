const app = new Vue({
    el: '#app',
    data: {
        hoverRepId: 0,
        topicCounter: {
            "All": 0,
            "Healthcare": 0,
            "Intelligence": 0,
            "Technology": 0,
        },
        selectedTopic: "All",
        // id -> object URL of a poster generated in the browser (assets/posterkit)
        generatedPosters: {},
    },
    created: function () {
        console.log("READY");
        this.countTopic(reports);
        this.countTopic(tests);
        if (reports.length) this.ensurePoster(reports[0]);
    },
    methods: {
        countTopic: function (allReports) {
            for (report of allReports) {
                if (!report.hasOwnProperty("topics")) {
                    report.topics = [];
                }
                report.topics.push("All");
                for (topic of report.topics) {
                    // if topicCounter does not have this topic, add a warning
                    if (!this.topicCounter.hasOwnProperty(topic)) {
                        console.log("WARNING: topicCounter does not have this topic: " + topic);
                    }
                    this.topicCounter[topic]++;
                }
            }
        },
        clickRepId: function (pid) {
            console.log("hoverRepId: " + pid);
            if (this.hoverRepId == pid) {
                this.hoverRepId = -1;
            }
            else {
                this.hoverRepId = pid;
                this.ensurePoster(reports[pid]);
            }
        },
        // Posters: an event with `photo` (assets/speaker/<photo>) gets a poster generated
        // in the browser; without a photo the uploaded `poster` image is shown; with
        // neither, a poster with a placeholder portrait is generated.
        canGenerate: function (item) {
            var info = item.info || {}, link = item.link || {};
            return !!(item.title && (item.speaker || item.speakerPaper) && item.host && item.date
                && info.abstract && info.bio && link.href && /\d{3}-\d{3}-\d{3,4}/.test(link.tag || ""));
        },
        generatesPoster: function (item) {
            return this.canGenerate(item) && !!(item.photo || !item.poster);
        },
        hasPoster: function (item) {
            return !!item.poster || this.generatesPoster(item);
        },
        posterSrc: function (item) {
            var url = this.generatedPosters[item.id];
            if (url) return url === "failed" ? (item.poster ? "assets/poster/" + item.poster : null) : url;
            return this.generatesPoster(item) ? null : (item.poster ? "assets/poster/" + item.poster : null);
        },
        ensurePoster: function (item) {
            if (!item || !this.generatesPoster(item) || this.generatedPosters[item.id] !== undefined) return;
            var self = this;
            this.$set(this.generatedPosters, item.id, null);
            // Function wrapper keeps older browsers from failing to parse app.js at all
            new Function("u", "return import(u)")(new URL("assets/posterkit/poster.js", location.href).href)
                .then(function (kit) { return kit.generate(item, "poster"); })
                .then(function (r) { self.$set(self.generatedPosters, item.id, r.url); })
                .catch(function (e) { console.error(e); self.$set(self.generatedPosters, item.id, "failed"); });
        },
        generateICS: function (event) {
            const dateParts = event.date.split('/');
            const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
            const daytime = event.daytime || "周五 20:00"; // default to Friday 20:00
            const startDateTime = new Date(`${formattedDate}T${daytime.split(' ')[1]}:00+08:00`); // +08:00 is China Standard Time
            const endDateTime = new Date(startDateTime.getTime() + 1.5 * 60 * 60 * 1000); // 1.5 hours

            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hit-webinar.com//HIT Webinar//ZH
BEGIN:VEVENT
UID:${event.id}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:[HIT Webinar] ${event.title}
DESCRIPTION:内容简介\\n${event.info.abstract}\\n\\n\\n嘉宾简介\\n${event.info.bio}\\n\\n\\n${event.link.tag}\\n或点击链接入会：${event.link.href}\\n\\n\\nHIT Webinar: https://hit-webinar.com/
LOCATION:${event.link.href}
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
URL:${event.link.href}
END:VEVENT
END:VCALENDAR`;

            const encodedUri = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
            const a = document.createElement('a');
            a.href = encodedUri;
            a.download = `hit-${event.id}.ics`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // const blob = new Blob([icsContent], { type: 'text/calendar' });
            // const url = URL.createObjectURL(blob);
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = `hit-${event.id}.ics`;
            // document.body.appendChild(a);
            // a.click();
            // document.body.removeChild(a);

        },
    }
});