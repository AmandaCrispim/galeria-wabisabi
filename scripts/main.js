const menuBtn = document.getElementById("menu-btn")
const navbarLinks = document.getElementById("navbar-links")
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("open");

    const isOpen = navbarLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navbarLinks.addEventListener("click", (e) => {
    navbarLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});