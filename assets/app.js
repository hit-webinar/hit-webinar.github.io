const app = new Vue({
    el: '#app',
    data: {
        hoverRepId: 0,
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
