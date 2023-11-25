const hamb = document.querySelector(".hamb");
const menu = document.querySelector(".nav-menu-group");
hamb.addEventListener("click", (showMenu) => {
    menu.classList.toggle("show");
    console.log("open");
});
menu.addEventListener("click", (e) => {
    menu.classList.remove("show");
    console.log("close");
});