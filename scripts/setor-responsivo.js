document.ondragstart = function() {
  return false;
};
const img = document.querySelectorAll("img");
img.ondragstart = function() {
  return false;
};

if (typeof UserAgentInfo != "undefined" && !window.addEventListener) {
  UserAgentInfo.strBrowser = 1;
}

if(/MSIE \d | Trident.*rv:/.test(navigator.userAgent)) {
  var scrollEnd = 0.67;
}

else scrollEnd = 0.70;

const slider = document.querySelector(".setores");
const arrows = document.querySelectorAll(".setores-ui .arrow");
const arrowL = document.querySelector(".setores-ui .arrow:nth-child(1)");
const arrowR = document.querySelector(".setores-ui .arrow:nth-child(3)");
let isDown = false;
let startX;
let scrollLeft;

//Start
window.setTimeout(function(){
  slider.scrollLeft = 0;
}, 250);
changeArrowsDisplay();

slider.addEventListener("mousedown", function(e) {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  changeArrowsDisplay();
});
slider.addEventListener("mouseleave", function() {
  isDown = false;
  slider.classList.remove("active");
  changeArrowsDisplay();
});
slider.addEventListener("mouseup", function() {
  isDown = false;
  slider.classList.remove("active");
  changeArrowsDisplay();
});
slider.addEventListener("mousemove", function(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

//Mobile
slider.addEventListener("touchstart", function() {
  touchTeste.innerHTML = "Começou o touch";
  slider.classList.add("active");
  changeArrowsDisplay();
}), false;
slider.addEventListener("touchend", function() {
  touchTeste.innerHTML = "Terminou o touch";
  slider.classList.remove("active");
  changeArrowsDisplay();
}), false;

function changeArrowsDisplay() {
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.opacity = 0.7;
  }

  if (slider.scrollLeft >= slider.scrollWidth * scrollEnd) { //1070
    arrowR.style.opacity = 0;
  } else if (slider.scrollLeft <= slider.scrollWidth * 0.02) { //20
    arrowL.style.opacity = 0;
  }
}

scrollTeste = document.querySelector("#teste-scroll");
touchTeste = document.querySelector("#teste-touch");

window.setInterval(function() {
  scrollTeste.innerHTML = slider.scrollLeft;
}, 100);