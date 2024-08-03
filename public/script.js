// Back to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopButton = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}