// var slides = document.querySelectorAll(".slide");
// var buttons = document.querySelectorAll(".banner-button");
// var banner = document.querySelector(".banner");

// function loadSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         const e = slides[i];
//         s = i + 1;
//         e.style.backgroundImage = "url('../images/banner-example-" + s + ".jpg')";
//     }
// }
// loadSlides();

// currentSlide(1);

// function currentSlide(s) {
//     n = (parseInt(s) - 1);
//     for (let i = 0; i < buttons.length; i++) {
//         slides[i].style.display = "none";
//         buttons[i].style.backgroundColor = "gray";
//     }
//     slides[n].style.display = "inherit";
//     buttons[n].style.backgroundColor = "#ff2020";
// }

var banner = document.querySelector(".banner");
var bannerTexts = document.querySelectorAll(".banner-text");
var buttons = document.querySelectorAll(".banner-button");

var canChange = true;;

currentSlide(1);

function currentSlide(s) {
    if(!canChange) return;
    canChange = false;
    
    n = (parseInt(s) - 1);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "gray";
        bannerTexts[i].style.display = "none";
        bannerTexts[i].style.opacity = 0;
    }
    banner.style.backgroundImage = "url('resources/images/banner-example-" + s + ".jpg')";
    bannerTexts[n].style.display = "inherit";
    bannerTexts[n].style.opacity = 1;

    buttons[n].style.backgroundColor = "#ff2020";

    window.setTimeout(function(){
        canChange = true;   
    }, 1000);

}