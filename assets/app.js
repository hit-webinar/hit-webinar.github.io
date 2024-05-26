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
    },
    created: function () {
        console.log("READY");
        this.countTopic(reports);
        this.countTopic(tests);
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
            }
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