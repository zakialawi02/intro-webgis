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

$("#layer-toggle").click(function (e) {
    $(".layer-panel").toggleClass('layer-panel-show');
});

// Menampilkan dan menyembunyikan modal
$("#info-toggle").click(function () {
    $("#modal1").toggleClass("show-modal");
});

$("#closeModalBtn, .modal").click(function () {
    $("#modal1").removeClass("show-modal");
});