const app = new Vue({
    el: '#app',
    data: {
        hoverPubId: -1,
        hoverPreId: -1,
        hoverConfId: -1,
        hoverMemId: -1,
        activityHover: false,
        talkHover: false,
        miscHover: false,
        years: [],
        selectedBiography: 'en',
        selectedYear: 'All',
        selectedTopic: "All",
        tags: ["site", "about", "biography", "news", "publications", "preprints", "honors", "competitions", "activities", "talks", "misc", "opening", "mentees"],
        selectedTag: 'site',
        selectedList: "ul",
        showSelected: false,
        numberOfSelected: 0,
        venueCounter: {},
    },
    created: function () {
        console.log("READY");
    },
    methods: {
        updateSelected() {
            var num = 0;
            for (publication of publications) {
                if (publication.selected) {
                    num++;
                }
            }
            this.numberOfSelected = num;
            this.$forceUpdate();
        },
        selectPublication(pid) {
            publications[pid].selected = !publications[pid].selected;
            this.updateSelected();
        },
    }
});
