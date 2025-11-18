document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    let selectEstrellas = document.getElementById("estrellas");
    let titulo = document.getElementById("estrella-nombre");
    let imagen = document.getElementById("estrellaImagen");
    let imagencentro = document.getElementById("Imagencentro")
    let tablaFilas = document.querySelectorAll(".star-clasification tbody tr"); // Todas las filas de la tabla

    // Definir información de las estrellas
    let datosEstrellas = {
        "Todas": { titulo: "Todas", imagen: "img/Imagen10_2.png" , imagencentro: "img/Imagen10_1.png"},
        "K-rich 1": { titulo: "K-rich 1", imagen: "img/VR_Krich_1.png" , imagencentro: "img/Imagen10_1_Krich_1.png"},
        "K-rich 2": { titulo: "K-rich 2", imagen: "img/VR_Krich_2.png" , imagencentro: "img/Imagen10_1_Krich_2.png"},
        "Na-rich": { titulo: "Na-rich", imagen: "img/VR_Na_rich.png" , imagencentro: "img/Imagen10_1_Na_rich.png"},
        "N-rich 1": { titulo: "N-rich 1", imagen: "img/VR_Nrich_1.png" , imagencentro: "img/Imagen10_1_Nrich_1.png"},
        "N-rich 2": { titulo: "N-rich 2", imagen: "img/VR_Nrich_2.png" , imagencentro: "img/Imagen10_1_Nrich_2.png"},
        "N-rich 3": { titulo: "N-rich 3", imagen: "img/VR_Nrich_3.png" , imagencentro: "img/Imagen10_1_Nrich_3.png"},
        "N-rich 4": { titulo: "N-rich 4", imagen: "img/VR_Nrich_4.png" , imagencentro: "img/Imagen10_1_Nrich_4.png"},
        "N-rich 5": { titulo: "N-rich 5", imagen: "img/VR_Nrich_5.png" , imagencentro: "img/Imagen10_1_Nrich_5.png"},
        "N-rich 6": { titulo: "N-rich 6", imagen: "img/VR_Nrich_6.png" , imagencentro: "img/Imagen10_1_Nrich_6.png"},
        "N-rich 7": { titulo: "N-rich 7", imagen: "img/VR_Nrich_7.png" , imagencentro: "img/Imagen10_1_Nrich_7.png"},
        "N-rich 8": { titulo: "N-rich 8", imagen: "img/VR_Nrich_8.png" , imagencentro: "img/Imagen10_1_Nrich_8.png"},
        "Si-rich": { titulo: "Si-rich", imagen: "img/VR_Si_rich.png" , imagencentro: "img/Imagen10_1_Si_rich.png"},
        "s-rich": { titulo: "s-rich", imagen: "img/VR_s-rich.png" , imagencentro: "img/Imagen10_1_s-rich.png"},
    };

    // Colores extraídos de Python (plasma colormap)
    let coloresEstrellas = {
        "K-rich 1": "rgba(12, 7, 134, 0.5)",    // #0c0786
        "K-rich 2": "rgba(47, 5, 150, 0.5)",    // #2f0596
        "Na-rich": "rgba(83, 2, 163, 0.5)",    // #5302a3
        "N-rich 1": "rgba(117, 1, 168, 0.5)",   // #7501a8
        "N-rich 2": "rgba(150, 5, 169, 0.5)",   // #9605a9
        "N-rich 3": "rgba(178, 24, 165, 0.5)",  // #b218a5
        "N-rich 4": "rgba(203, 53, 151, 0.5)",  // #cb3597
        "N-rich 5": "rgba(222, 93, 134, 0.5)",  // #de5d86
        "N-rich 6": "rgba(236, 132, 113, 0.5)", // #ec8471
        "N-rich 7": "rgba(247, 173, 90, 0.5)",  // #f7ad5a
        "N-rich 8": "rgba(253, 206, 68, 0.5)",  // #fdce44
        "Si-rich": "rgba(245, 230, 53, 0.5)",  // #f5e635
        "s-rich": "rgba(240, 249, 33, 0.5)"    // #f0f921
    };
    
    // Función para quitar el resaltado previo
    function limpiarResaltado() {
        tablaFilas.forEach(fila => {
            fila.style.backgroundColor = ""; // Resetear el fondo
        });
    }

    // Escuchar cambios en el select
    selectEstrellas.addEventListener("change", function() {
        let estrellaSeleccionada = this.value;
        
        if (datosEstrellas.hasOwnProperty(estrellaSeleccionada)) {
            titulo.textContent = datosEstrellas[estrellaSeleccionada].titulo;
            imagen.src = datosEstrellas[estrellaSeleccionada].imagen; // Cambiar la imagen
            imagencentro.src = datosEstrellas[estrellaSeleccionada].imagencentro; // Cambiar la imagen
            // Limpiar resaltados previos
            limpiarResaltado();

            // Resaltar la fila correspondiente
            tablaFilas.forEach(fila => {
                let nombreEstrella = fila.querySelector("td").textContent.trim();
            if (nombreEstrella === estrellaSeleccionada) {
                fila.style.backgroundColor = coloresEstrellas[estrellaSeleccionada] || "yellow";
            }
            });
        } else {
            titulo.textContent = "Estrella no encontrada";
            imagen.src = "img/VR_Krich_1.png"; // Imagen por defecto si no se encuentra la estrella
            imagencentro.src = "img/Imagen10_1_Krich_1.png"; // Imagen por defecto si no se encuentra la estrella
            limpiarResaltado();
        }
    });
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
