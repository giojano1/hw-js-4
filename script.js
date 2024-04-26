let question = document.querySelectorAll(".question-box");
question.forEach(function (question) {
  question.addEventListener("click", function () {
    this.querySelector(".arrow").classList.toggle("rotate");
    let answer = this.nextElementSibling;
    answer.classList.toggle("show");
  });
});
