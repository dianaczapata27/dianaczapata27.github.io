document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    let selectEstrellas = document.getElementsByClassName("estrellas");
    let titulo = document.getElementById("estrella-nombre");
    let imagen = document.getElementById("estrellaImagen");
    let imagencentro = document.getElementById("Imagencentro");
    let imagenorbita = document.getElementById("ImagenOrbita");
    let imagenpar = document.getElementById("ImagenParametros");
    let imagenfase = document.getElementById("ImagenFase");
    let acompañante = document.getElementById("Acompañante");
    let descripcion = document.getElementById("Descripcion");

    let parametros = document.getElementById("parametros");
    
    // Definir información de las estrellas
    let datosEstrellas = {
        "Na-rich": { titulo: "Na-rich", imagen: "img/Corr_Narich.png" , imagencentro: "img/Mass_Narich.png", imagenorbita: "img/Filtrado_Narich.png", imagenpar: "img/Parametros_Narich.png", imagenfase: "img/Phase_Narich.png"},
        "N-rich 1": { titulo: "N-rich 1", imagen: "img/Corr_Nrich1.png" , imagencentro: "img/Mass_Nrich1.png",  imagenorbita: "img/Filtrado_Nrich1.png", imagenpar: "img/Parametros_Nrich1.png", imagenfase: "img/Phase_Nrich1.png"},
        "N-rich 2": { titulo: "N-rich 2", imagen: "img/Corr_Nrich2.png" , imagencentro: "img/Mass_Nrich2.png", imagenorbita: "img/Filtrado_Nrich2.png", imagenpar: "img/Parametros_Nrich2.png", imagenfase: "img/Phase_Nrich2.png"},
        "N-rich 3": { titulo: "N-rich 3", imagen: "img/Corr_Nrich3.png" , imagencentro: "img/Mass_Nrich3.png",  imagenorbita: "img/Filtrado_Nrich3.png", imagenpar: "img/Parametros_Nrich3.png", imagenfase: "img/Phase_Nrich3.png"},
        "N-rich 4": { titulo: "N-rich 4", imagen: "img/Corr_Nrich4.png" , imagencentro: "img/Mass_Nrich4.png", imagenorbita: "img/Filtrado_Nrich4.png", imagenpar: "img/Parametros_Nrich4.png", imagenfase: "img/Phase_Nrich4.png"},
        "N-rich 7": { titulo: "N-rich 7", imagen: "img/Corr_Nrich7.png" , imagencentro: "img/Mass_Nrich7.png",imagenorbita: "img/Filtrado_Nrich7.png", imagenpar: "img/Parametros_Nrich7.png", imagenfase: "img/Phase_Nrich7.png"},
        "N-rich 8": { titulo: "N-rich 8", imagen: "img/Corr_Nrich8.png" , imagencentro: "img/Mass_Nrich8.png",imagenorbita: "img/Filtrado_Nrich8.png", imagenpar: "img/Parametros_Nrich8.png", imagenfase: "img/Phase_Nrich8.png"},
        "Si-rich": { titulo: "Si-rich", imagen: "img/Corr_Sirich.png" , imagencentro: "img/Mass_Sirich.png", imagenorbita: "img/Filtrado_Sirich.png", imagenpar: "img/Parametros_Sirich.png", imagenfase: "img/Phase_Sirich.png"},
    };

    let acompañanteEstrellas = {
        "Na-rich": { titulo: "Na-rich", acompañante:"Posible compañera subestelar" , descripcion: "Las enanas marrones, tienen masas que oscilan entre 0.013 y 0.073 [M☉]"},
        "N-rich 1": { titulo: "N-rich 1", acompañante:"Posible compañera estelar compacta", descripcion: "Las enanas blancas, tienen masas que oscilan entre 0.17 y 1.33 [M☉]"},
        "N-rich 2": { titulo: "N-rich 2", acompañante:"Posible compañero planetario", descripcion: "Podemos estar hablando de objetos jovianos entre 2 a 8 [MJ]"},
        "N-rich 3": { titulo: "N-rich 3", acompañante:"Posible compañera subestelar", descripcion: "Las enanas marrones, tienen masas que oscilan entre 0.013 y 0.073 [M☉]"},
        "N-rich 4": { titulo: "N-rich 4", acompañante:"Posible compañera estelar", descripcion: "Las enanas rojas tienen masas en un rango que va desde 0.08 hasta 0.5 [M☉]"},
        "N-rich 7": { titulo: "N-rich 7", acompañante:"Posible compañera planetario", descripcion: "Podemos estar hablando de objetos jovianos entre 2 a 8 [MJ]"},
        "N-rich 8": { titulo: "N-rich 8", acompañante:"Posible compañera subestelar", descripcion: "Las enanas marrones, tienen masas que oscilan entre 0.013 y 0.073 [M☉]"},
        "Si-rich": { titulo: "Si-rich", acompañante:"Posible compañera estelar", descripcion: "Las enanas rojas tienen masas en un rango que va desde 0.08 hasta 0.5 [M☉]" }
    };

    // Definir información de las estrellas
    let parametrosEstrellas = {
        "Na-rich": {
            titulo: "Na-rich",
            parametros: {
                "ID": "TYC6908-1643-1",
                APOGEE: "...",
                FIDEOS: "-80.62 ± 0.62~ [km ~s^{-1}]",
                T_m: "44.26~[min]",
                N: "4",
                M: "894909",
                P: "5.02_{-0.01}^{+0.12} ~ [day]",
                e: "0.02_{-0.02}^{+0.36}",
                ω: "1.57_{-1.86}^{+2.18} ~ [deg]",
                Φ_0: "2.02_{-4.07}^{+0.19} ~ [deg]",
                K: "0.85_{-0.20}^{+4.73} ~ [km ~ s^{-1}]",
                V_0: "-80.6_{-2.2}^{+1.5} ~ [km ~ s^{-1}]",
                Mass: "0.073_{-0.048}^{+0.352} ~ [M_{sun}]"
            }
        },
        "N-rich 1": {
            titulo: "N-rich 1",
            parametros: {
                "ID": "TYC4686-2039-1",
                APOGEE: "156.34 ± 0.03~ [km ~s^{-1}]",
                FIDEOS: "148.28 ± 0.79~ [km ~s^{-1}]",
                T_m: "42.24~[min]",
                N: "8",
                M: "1",
                P: "283.216_{-0.023}^{+0.003} ~[day]",
                e: "0.8138_{-0.0008}^{+0.0014}",
                ω: "-2.812_{-0.001}^{+0.005} ~[deg]",
                Φ_0: "-1.2461_{-0.0022}^{+0.0018} ~[deg]",
                K: "24.04_{-0.03}^{+0.04} ~[km ~s^{-1}]",
                V_0: "150.840_{-0.002}^{+0.010} ~[km ~s^{-1}]",
                Mass: "0.5174_{-0.0021}^{+0.0024} ~[M_{sun}]"            }
        },
        "N-rich 2": {
            titulo: "N-rich 2",
            parametros: {
                "ID": "TYC8517-1671-1",
                APOGEE: "49.36 ± 0.02 ~ [km ~s^{-1}]",
                FIDEOS: "48.71 ± 0.20~ [km ~s^{-1}]",
                T_m: "42.13~[min]",
                N: "6",
                M: "554",
                P: "42.77_{-0.42}^{+0.02} ~[day]",
                e: "0.022_{-0.002}^{+0.184}",
                ω: "2.58_{-3.61}^{+2.13} ~[deg]",
                Φ_0: "1.39_{-3.32}^{+0.65} ~[deg]",
                K: "0.65_{-0.15}^{+0.16} ~[km ~s^{-1}]",
                V_0: "48.904_{-0.015}^{+0.121} ~[km~ s^{-1}]",
                Mass: "0.0078_{-0.0009}^{+0.0034} ~[M_{sun}]"
            }
        },
        "N-rich 3": {
            titulo: "N-rich 3",
            parametros: {
                "ID": "TYC244-273-1",
                APOGEE: "96.30 ± 0.03~ [km ~s^{-1}]",
                FIDEOS: "97.53 ± 0.24 ~ [km ~s^{-1}]",
                T_m: "42.18~[min]",
                N: "8",
                M: "10691",
                P: "638.82_{-83.45}^{+5.44} ~[day]",
                e: "0.019_{-0.014}^{+0.298}",
                ω: "0.86_{-0.62}^{+1.95} ~[deg]",
                Φ_0: "-1.93_{-0.56}^{+3.66} ~[deg]",
                K: "0.86_{-0.03}^{+0.41} ~[km~ s^{-1}]",
                V_0: "97.10_{-0.34}^{+0.16} ~[km ~s^{-1}]",
                Mass: "0.030_{-0.002}^{+0.013} ~[M_{sun}]"
            }
        },
        "N-rich 4": {
            titulo: "N-rich 4",
            parametros: {
                "ID": "TYC250-1352-1",
                APOGEE: "−16.27 ± 0.04~ [km ~s^{-1}]",
                FIDEOS: "−17.51 ± 0.98 ~ [km ~s^{-1}]",
                T_m: "41.39~[min]",
                N: "6",
                M: "504",
                P: "349.70_{-4.53}^{+0.69} ~[day]",
                e: "0.39_{-0.24}^{+0.22}",
                ω: "2.93_{-0.86}^{+0.14} ~[deg]",
                Φ_0: "1.98_{-0.99}^{+0.61} ~[deg]",
                K: "4.17_{-1.51}^{+6.16} ~[km~ s^{-1}]",
                V_0: "-20.43_{-1.52}^{+2.86} ~[km ~s^{-1}]",
                Mass: "0.082_{-0.036}^{+0.317} ~[M_{sun}]"
            }
        },
        "N-rich 7": {
            titulo: "N-rich 7",
            parametros: {
                "ID": "TYC5256-183-1",
                APOGEE: "-70.42 ± 0.01",
                FIDEOS: "−70.51 ± 0.15 ~ [km ~s^{-1}]",
                T_m: "42.84~[min]",
                N: "9",
                M: "159",
                P: "12.21_{-0.11}^{+0.11} ~[day]",
                e: "0.12_{-0.02}^{+0.11}",
                ω: "2.87_{-5.53}^{+0.41} ~[deg]",
                Φ_0: "2.856_{-5.582}^{+0.007} ~[deg]",
                K: "0.216_{-0.008}^{+0.015} ~[km ~s^{-1}]",
                V_0: "-70.415_{-0.025}^{+0.000} ~[km ~s^{-1}]",
                Mass: "0.002_{-0.0001}^{+0.0001}~ [M_{sun}]"
            }
        },
        "N-rich 8": {
            titulo: "N-rich 8",
            parametros: {
                "ID": "TYC8525-512-1",
                APOGEE: "-70.42 ± 0.01",
                FIDEOS: "−70.51 ± 0.15 ~ [km ~s^{-1}]",
                T_m: "42.74~[min]",
                N: "4",
                M: "2386",
                P: "15.65_{-0.08}^{+2.64} ~[day]",
                e: "0.057_{-0.015}^{+0.238}",
                ω: "-2.24_{-0.36}^{+6.52} ~[deg]",
                Φ_0: "0.19_{-2.39}^{+1.85} ~[deg]",
                K: "1.43_{-0.20}^{+0.63} ~[km~ s^{-1}]",
                V_0: "97.31_{-0.61}^{+0.40} ~[km ~s^{-1}]",
                Mass: "0.016_{-0.003}^{+0.005} ~[M_{sun}]",
                
            }
        },
        "Si-rich": {
            titulo: "Si-rich",
            parametros: {
                "ID": "TYC5805-233-1",
                APOGEE: "−172.24 ± 0.04~ [km ~s^{-1}]",
                FIDEOS: "−166.50 ± 0.22~ [km ~s^{-1}]",
                T_m: "48.17~[min]",
                N: "20",
                M: "431",
                P: "544.24_{-142.17}^{+11.79} ~[day]",
                e: "0.02_{-0.01}^{+0.18}",
                ω: "2.68_{-3.71}^{+0.96} ~[deg]",
                Φ_0: "-1.23_{-0.98}^{+3.07} ~[deg]",
                K: "3.17_{-0.09}^{+3.14} ~[km ~s^{-1}]",
                V_0: "-169.38_{-2.54}^{+0.03}~ [km ~s^{-1}]",
                Mass: "0.12_{-0.02}^{+0.13}~ [M_{sun}]"
            }
        }
    };
    
    
    // Función para quitar el resaltado previo
    function limpiarResaltado() {
        tablaFilas.forEach(fila => {
            fila.style.backgroundColor = ""; // Resetear el fondo
        });
    }

    // Escuchar cambios en el select
    console.log(selectEstrellas);

    function selectStar(estrellaSeleccionada){
        if (datosEstrellas.hasOwnProperty(estrellaSeleccionada)) {
            titulo.textContent = datosEstrellas[estrellaSeleccionada].titulo;
            imagen.src = datosEstrellas[estrellaSeleccionada].imagen; // Cambiar la imagen
            imagencentro.src = datosEstrellas[estrellaSeleccionada].imagencentro; // Cambiar la imagen
            imagenorbita.src = datosEstrellas[estrellaSeleccionada].imagenorbita; // Cambiar la imagen
            imagenpar.src = datosEstrellas[estrellaSeleccionada].imagenpar;
            imagenfase.src = datosEstrellas[estrellaSeleccionada].imagenfase;
            acompañante.textContent = acompañanteEstrellas[estrellaSeleccionada].acompañante;
            descripcion.textContent = acompañanteEstrellas[estrellaSeleccionada].descripcion;

            let parametrosHTML = "\\[ \\begin{aligned}";
            let parametrosObjeto = parametrosEstrellas[estrellaSeleccionada].parametros;
            
            for (let key in parametrosObjeto) {
                parametrosHTML += `${key} &= ${parametrosObjeto[key]} \\\\`;
            }

            parametrosHTML += "\\end{aligned} \\]";
            parametros.innerHTML = parametrosHTML;

            // Renderizar KaTeX en los nuevos elementos
            renderMathInElement(parametros, {
                delimiters: [
                    {left: "\\(", right: "\\)", display: false},
                    {left: "\\[", right: "\\]", display: true}
                ]
            });
        } else {
            titulo.textContent = "Estrella no encontrada";
            imagen.src = "img/VR_Krich_1.png"; // Imagen por defecto si no se encuentra la estrella
            imagencentro.src = "img/Imagen10_1_Krich_1.png"; // Imagen por defecto si no se encuentra la estrella
            limpiarResaltado();
        }
    }
    
    Array.from(selectEstrellas).forEach(select => {
        select.addEventListener("change", function() {
            selectStar(this.value);
        });
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