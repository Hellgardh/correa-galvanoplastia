// document.ondragstart = function () { return false; };
// const img = document.querySelector("img");
// img.ondragstart = function () { return false; }

/* IE11 Fix for SP2010 */

if (typeof UserAgentInfo != "undefined" && !window.addEventListener) {
  UserAgentInfo.strBrowser = 1;
}

const slider = document.querySelector(".setores");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', function(e) {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", function() {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", function() {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", function(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});