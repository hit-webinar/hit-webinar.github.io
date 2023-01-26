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
        toolOpen: false,
    },
    created: function () {
        // make sure that "Featured" is always the first
        this.topics = ["Featured"];
        for (publication of publications) {
            // default ``selected``
            publication.selected = false;
            // count publication years
            if (!this.years.includes(publication.year)) {
                this.years.push(publication.year);
            }
            // default ``topics`` if there is no assigned
            if (!publication.hasOwnProperty("topics")) {
                publication.topics = [];
            }
            // count all topics
            for (topic of publication.topics) {
                if (!this.topics.includes(topic)) {
                    this.topics.push(topic);
                }
            }
            // count all venues
            if (!publication.hasOwnProperty("abbr")) {
                var venue = publication.venue;
            }
            else {
                var venue = publication.abbr;
            };
            if (this.venueCounter.hasOwnProperty(venue)) {
                this.venueCounter[venue]++;
            }
            else {
                this.venueCounter[venue] = 1;
            }
            // count the primary / contributing authorship
            // console.log(about.nameEN);
            // console.log(publication.authors);
            publication.primaryAuthorship = false;
            for (let [index, author] of publication.authors.entries()) {
                if (author.startsWith(about.nameEN)) {
                    // co-first or coresponding authorship
                    if (author.endsWith("*") || author.endsWith("#") ) {
                        publication.primaryAuthorship = true; 
                    }
                    // first or second authorship
                    else if (index<=1) {
                        publication.primaryAuthorship = true;
                    }
                }
            }
        }
        console.log("READY");
    },
    methods: {
        keyHandler: function (keycode) {
            console.log(keycode);
            // if "blank" key is pressed, then open tools
            if (keycode == 32) {
                this.toolOpen = !this.toolOpen;
                console.log(this.toolOpen);
                if (this.toolOpen) {
                    console.log("Open the tools...");
                    for (tool of site.tools) {
                        site.links.push(tool);
                    }
                }
                else {
                    console.log("Close the tools...");
                    for (tool of site.tools) {
                        site.links.pop();
                    }
                }
                this.$forceUpdate();
            }
        },
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

document.body.addEventListener('keydown', e => app.keyHandler(e.keyCode));