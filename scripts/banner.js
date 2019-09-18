function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

var slides = document.querySelectorAll(".banner-img");
var texts = document.querySelectorAll(".banner-text")
var buttons = document.querySelectorAll(".banner-button");

var canChange = true;
var currentSlide = 0;
var autoChangeTime = 7000; //Tempo em ms para a troca de slides

resetSlide(1);

var slideTimer = new Timer(function() {
    if(!canChange) return;
    currentSlide++;
    if(currentSlide >= slides.length) {
        changeSlide(0);
    }
    else {
        changeSlide(currentSlide);
    }
}, autoChangeTime);

function resetSlide(resetIni) { //use 0 para resetar tudo, use 1 para ignorar o primeiro slide
    for (let i = resetIni; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        texts[i].style.opacity = 0;
        buttons[i].style.backgroundColor = "gray";
    }
}

function changeSlide(n) {
    canChange = false;
    currentSlide = n;
    resetSlide(0);
    slides[n].style.opacity = 1;
    texts[n].style.opacity = 1;
    buttons[n].style.backgroundColor = "#ff2020";
    changeDelay();
}

function changeDelay() { //Cooldown para trocar os slides
    window.setTimeout(function(){
        canChange = true;
        slideTimer.reset(autoChangeTime);
    }, 800);
}

for (let i = 0; i < buttons.length; i++) { //Adicionando os eventos
    const element = buttons[i];
    element.addEventListener("click", function() {
        if(!canChange) return;
        slideTimer.stop();
        changeSlide(i);
    }, false);
}