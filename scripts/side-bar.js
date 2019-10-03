button = document.querySelector(".menu-button");
sideBar = document.querySelector(".side-bar");
brand = document.querySelector(".side-bar .marca");

console.log(sideBar.style.left);
var active = false;

function toggleSideBar() {
    if(!active) {
        active = true;
        sideBar.style.left = 0;
        brand.style.opacity = 1;
        button.classList.add("active");
    }
    else {
        active = false;
        sideBar.style.left = "-100%";
        brand.style.opacity = 0;
        button.classList.remove("active");
    }
}

button.addEventListener("click", toggleSideBar, false);