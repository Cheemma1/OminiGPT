// hambuger menu
let menuLink = document.querySelector(".menu");

let closeMenu = document.getElementById("close-menu");
let openMenu = document.getElementById("open-menu");

closeMenu.addEventListener("click",()=>{
menuLink.style.left="-300px"
});

openMenu.addEventListener("click", () => {
menuLink.style.left = "0";
});


// toggle questions
let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  let answer = question.querySelector(".answer");

  question.addEventListener("click", function () {
    question.classList.toggle("show");

    // Hide other open questions
 questions.forEach(function (otherQuestion) {
 if (otherQuestion !== question) {
 otherQuestion.classList.remove("show");
}
    });
  });
});

// swiper js
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
  // Responsive breakpoints
  breakpoints: {
    769: {
      slidesPerView: 2,
    },

  },
});
