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
    }
});