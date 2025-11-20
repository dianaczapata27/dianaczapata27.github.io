document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    let selectEstrellas = document.getElementById("estrellas");
    let titulo = document.getElementById("estrella-nombre");
    let descripcion = document.getElementById("estrella-info");
    let imagen = document.querySelector(".image"); // Seleccionar la imagen del diagrama

});

document.addEventListener("DOMContentLoaded", function() {
    let botones = document.querySelectorAll(".boton");
    let currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual

    botones.forEach(boton => {
        if (boton.getAttribute("href") === currentPage) {
            boton.classList.add("activo");
        }
    });
});

