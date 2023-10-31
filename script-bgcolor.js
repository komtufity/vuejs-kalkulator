export default {
    data() {
        return {
            active1: true,
            active2: true,
            active3: true,
            active4: true,
        };
    },
    methods: {
        handleClick1() {
            this.active1 = !this.active1;
        },
        handleClick2() {
            this.active2 = !this.active2;
        },
        handleClick3() {
            this.active3 = !this.active3;
        },
        handleClick4() {
            this.active4 = !this.active4;
        },
    },
};