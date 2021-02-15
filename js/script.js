
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("show-menu");
document.getElementById("close-menu").addEventListener("click", ocultar_close);
bars = document.getElementById("icon-menu");
close_menu = document.getElementById("close-menu")
function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    bars.style.display ="none";
    close_menu.style.display ="flex";
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

function ocultar_close(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    bars.style.display ="flex";
    close_menu.style.display ="none";
    document.getElementById("show-menu").classList.toggle('show-lateral');
}
