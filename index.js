const q = function(text, ans) {
    this.text = text;
    this.ans = ans;
    this.min = "";
    this.max = "";
}

const isValid = function(n) {
    if (isNaN(n) || n == "") {
        return false
    }
    return true
}
const q1 = "What is the value of copper in the world's oceans (in USD)?"
const q2 = "What is the average distance between Saturn and Uranus (in km)?"
const q3 = "As of 2019, how many people over the age of 100 are alive in Russia?"
const q4 = "Between 2000 and 2018, how many newborn males were named \"Owen\" in the U.S.?"
const q5 = "As of 2019, how many active cell phones are in the world?"

document.addEventListener("DOMContentLoaded", function() {
    app = new Vue({
        el: '#app',
        data: {
            state: "rules",
            active: 0,
            questions: [{
                text: "Loading...",
                ans: "",
                min: "",
                max: "",
            }],
        },
        methods: {
            submit() {
                if (this.active >= 4) {
                    this.state = "results"
                } else {
                    this.active += 1;
                }
            },

            isCorrect(qq) {
                if (isValid(qq.min) && isValid(qq.max)) {
                    if (qq.ans >= qq.min && qq.ans <= qq.max) {
                        return true
                    }
                }
                return false
            },
            percentCorrect() {
                var c = 0;
                for (qq of this.questions) {
                    if (this.isCorrect(qq)) {
                        c += 1;
                    }
                }
                return Math.round(100 * c / this.questions.length)
            },

            newGame() {
                this.active = 0;
                this.state = 'playing';

            },

            withCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },

    });

    app.questions[0] = new q(q1, 109900000000000);
    app.questions.push(new q(q2, 2872500000000));
    app.questions.push(new q(q3, 20582));
    app.questions.push(new q(q4, 81619));
    app.questions.push(new q(q5, 9327053800));



});