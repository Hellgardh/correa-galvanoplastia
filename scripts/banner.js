var images = new Array();
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element = new Image();
    element.src = "('resources/images/banner/banner-example-" + (i + 1) + ".jpg')";
}

var banner = document.querySelector(".banner");
var bannerTexts = document.querySelectorAll(".banner-text");
var buttons = document.querySelectorAll(".banner-button");

var currentSlide;
var canChange = true;
var interval;

changeSlide(1);

// function changeTimer(time) {
//     window.clearTimeout();
//     window.setTimeout(function() {
//         if(!canChange) return;
//         currentSlide++;
//         if(currentSlide > 3) currentSlide = 1;
//         changeSlide(currentSlide);
//     }, time);    
// }

function changeSlide(s) {
    if(!canChange) return;
    canChange = false;
    
    currentSlide = s;
    n = (parseInt(s) - 1);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "gray";
        bannerTexts[i].style.display = "none";
        bannerTexts[i].style.opacity = 0;
    }
    banner.style.backgroundImage = "url('resources/images/banner/banner-example-" + s + ".jpg')";
    bannerTexts[n].style.display = "inherit";
    bannerTexts[n].style.opacity = 1;

    buttons[n].style.backgroundColor = "#ff2020";
    changeDelay();
}

function changeDelay() {
    // slideTimer(7000);
    window.setTimeout(function(){
        canChange = true;

    }, 1000);
}

//<body onload= "função()"> no html pode ser útil