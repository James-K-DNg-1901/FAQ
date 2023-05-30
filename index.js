const question = document.querySelectorAll("li");
let activedQuestion = null;

for (var i = 0; i <question.length; i++) {
    question[i].addEventListener("click", function () {
        if (activedQuestion) {
            this.querySelector(".q-text").classList.add("active");
            this.querySelector(".arrow").classList.add("arrow-up");
            this.querySelector(".answer").classList.remove("unactive-answer")
        }
        for (var j = 0; j < question.length; j++) {
            if (question[j] != activedQuestion) {
                question[j].querySelector(".q-text").classList.remove("active");
                question[j].querySelector(".arrow").classList.remove("arrow-up");
                question[j].querySelector(".answer").classList.add("unactive-answer")
            }
        }

        activedQuestion = this
    });
    
}