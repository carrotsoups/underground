document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            const isVisible = answer.style.display === "block";
            
            // Close all other answers
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            
            // Toggle the clicked answer
            answer.style.display = isVisible ? "none" : "block";
        });
    });
});



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}