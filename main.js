let questions = document.querySelectorAll(".question-holder .question");
let minusIcon = `<img src="assets/images/icon-minus.svg" alt="Minus Icon" />`;
let plusIcon = `<img src="assets/images/icon-plus.svg" alt="Plus Icon" />`;

questions.forEach((q) => q.addEventListener("click", toggleQuestion));

function toggleQuestion() {
  let hidden = this.classList.contains("hidden");
  let iconHolder = this.children[1];

  console.log(iconHolder);

  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.add("hidden");
    questions[i].children[1].innerHTML = plusIcon;
  }

  if (hidden) {
    this.classList.remove("hidden");
  }

  if (this.classList.contains("hidden")) {
    iconHolder.innerHTML = plusIcon;
  } else {
    iconHolder.innerHTML = minusIcon;
  }
}
