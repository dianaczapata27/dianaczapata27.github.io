document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    let selectEstrellas = document.getElementById("estrellas");
    let titulo = document.getElementById("estrella-nombre");
    let descripcion = document.getElementById("estrella-info");
    let imagen = document.querySelector(".image"); // Seleccionar la imagen del diagrama

    // Definir información de las estrellas
    let datosEstrellas = {
        "K-rich 1": {
            titulo: "K-rich 1",
            descripcion: `Las estrellas enriquecidas en potasio (K-rich) presentan una abundancia anómala de este elemento ([K/Fe] > 0.6) 
            y muestran una anticorrelación con el magnesio ([Mg/Fe] < -0.5), en un rango de metalicidades de -1.5 < [Fe/H] < 0.3. 
            Su estudio es relevante en astrofísica, ya que revela procesos nucleosintéticos poco comunes. Posibles fuentes de enriquecimiento incluyen 
            estrellas de masa intermedia en la fase SAGB, donde la síntesis de potasio ocurre a altas temperaturas (~150 MK), y supernovas de inestabilidad de pares (PISN), 
            que liberan grandes cantidades de elementos procesados. 
            En el conjunto de datos de LAMOST, se han identificado 112 candidatas K-rich, incluyendo K-rich 1 (TYC22-591-1), con valores de [K/Fe] de 0.95 ± 0.21, <a href="https://doi.org/10.1093/mnras/sty1915">Kemp et al. (2018)</a>. 
            Aunque estas abundancias son superiores a los valores galácticos típicos (~0.3 ± 0.2), no alcanzan los niveles extremos observados en cúmulos globulares como NGC 2419 y NGC 2808 ([K/Fe] > 1.5). 
            Esto sugiere que el proceso de nucleosíntesis responsable del enriquecimiento en potasio podría darse en un rango más amplio de metalicidades y entornos químicos, no limitado a cúmulos globulares de baja metalicidad.`,
            imagen: "img/Diagrama_HR_Krich_1.png"
        },
        "K-rich 2": {
            titulo: "K-rich 2",
            descripcion: `Las estrellas enriquecidas en potasio (K-rich) presentan una abundancia anómala de este elemento ([K/Fe] > 0.6) 
            y muestran una anticorrelación con el magnesio ([Mg/Fe] < -0.5), en un rango de metalicidades de -1.5 < [Fe/H] < 0.3. 
            Su estudio es relevante en astrofísica, ya que revela procesos nucleosintéticos poco comunes. Posibles fuentes de enriquecimiento incluyen 
            estrellas de masa intermedia en la fase SAGB, donde la síntesis de potasio ocurre a altas temperaturas (~150 MK), y supernovas de inestabilidad de pares (PISN), 
            que liberan grandes cantidades de elementos procesados. 
            En el conjunto de datos de LAMOST, se han identificado 112 candidatas K-rich, incluyendo K-rich 2 (TYC26-777-1), con valores de [K/Fe] de 1.03 ± 0.20 <a href="https://doi.org/10.1093/mnras/sty1915">Kemp et al. (2018)</a>. 
            Aunque estas abundancias son superiores a los valores galácticos típicos (~0.3 ± 0.2), no alcanzan los niveles extremos observados en cúmulos globulares como NGC 2419 y NGC 2808 ([K/Fe] > 1.5). 
            Esto sugiere que el proceso de nucleosíntesis responsable del enriquecimiento en potasio podría darse en un rango más amplio de metalicidades y entornos químicos, no limitado a cúmulos globulares de baja metalicidad.`,
            imagen: "img/Diagrama_HR_Krich_2.png"
        },
        "Na-rich": {
            titulo: "Na-rich",
            descripcion: `Las estrellas ricas en sodio (Na-rich) se encuentran comúnmente en cúmulos globulares gigantes \
            (con masas entre 10^5 M☉ y 10^6 M☉). Sin embargo, también se han identificado algunas Na-rich en el campo galáctico, \
            caracterizadas por bajos contenidos de metales (-2.7 < [Fe/H] < -1.0). Una posible explicación es que fueron expulsadas de sus cúmulos de origen <a href="https://iopscience.iop.org/article/10.3847/1538-3881/aaf71e">Pereira et al. (2019)</a>.\n\n\
            La identificación de estas estrellas en el campo galáctico es clave para comprender el mecanismo de expulsión y sus características químicas. \
            En Pereira et al. (2019), se utilizó espectroscopía de alta resolución para analizar estrellas pobres en metales, \
            identificando a Na-rich (TYC6908-1643-1) como un caso destacado.\n\n\
            Se detectaron cuatro líneas de sodio en su espectro, obteniendo una abundancia de [Na/Fe] = +1.09, \
            lo que representa un valor 4σ por encima del promedio de su muestra ([Na/Fe] = +0.09 ± 0.21). \
            Esto la clasifica como una estrella Na-rich. Además, no es una estrella CEMP, \
            pues presenta baja abundancia de carbono ([C/Fe] = -0.86) y alta abundancia de nitrógeno ([N/Fe] = +1.43).`,
            imagen: "img/Diagrama_HR_Na_rich.png"
        },
        "N-rich 1": {
            titulo: "N-rich 1",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html"><a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a></a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad, como se discute en el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.\n\n \
            <h1></h1>
            <b>Usando datos en el infrarrojo cercano de APOGEE-2, \n\
            obtienen [Fe/H] = -0.79 ± 0.01; [N/Fe] = 0.54 ± 0.02 y [C/Fe] = -0.22 ± 0.02.</b>`,
            imagen: "img/Diagrama_HR_Nrich_1.png"
        },
        "N-rich 2": {
            titulo: "N-rich 2",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html"><a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a></a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad, como se discute en el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.
            <h1></h1>
            <b><a href="https://iopscience.iop.org/article/10.3847/1538-3881/ab9ab8">Steinmetz et al. (2020)</a> con <i>RAVE</i> y <a href="https://iopscience.iop.org/article/10.3847/1538-4365/ac4414">Abdurro'uf et al. (2022)</a> con APOGEE reportan medidas\
            similares de metalicidad con valores de [Fe/H] = -0.44 y [Fe/H] = -0.41 respectivamente.</b>
`,
            imagen: "img/Diagrama_HR_Nrich_2.png"
        },
        "N-rich 3": {
            titulo: "N-rich 3",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad.\
            <h1></h1>
            <b>Se ha determinado que tiene una metalicidad de [Fe/H]=-0.71 ± 0.01 por <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a></b>`,
            imagen: "img/Diagrama_HR_Nrich_3.png"
        },
        "N-rich 4": {
            titulo: "N-rich 4",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad \
            <h1></h1>
            <b>Tiene una metalicidad bastante baja ([Fe/H] =-1.64 ± 0.01) por <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.</b>`,
            imagen: "img/Diagrama_HR_Nrich_4.png"
        },
        "N-rich 5": {
            titulo: "N-rich 5",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad, como se discute en el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.`,
            imagen: "img/Diagrama_HR_Nrich_5.png"
        },
        "N-rich 6": {
            titulo: "N-rich 6",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad, como se discute en el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.`,
            imagen: "img/Diagrama_HR_Nrich_6.png"
        },
        "N-rich 7": {
            titulo: "N-rich 7",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad, como se discute en el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>.\
            <h1></h1>
            <b>La estrella tiene una metalicidad de aproximadamente [Fe/H] = -0.70 según <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>. Sin embargo, se encuentra que para <a href="https://academic.oup.com/mnras/article/506/1/150/6270919?login=false">Buder et al (2021)</a> la metalicidad tiene un valor de [Fe/H] =-0.403.</b> `,
            imagen: "img/Diagrama_HR_Nrich_7.png"
        },
        "N-rich 8": {
            titulo: "N-rich 8",
            descripcion: `Las estrellas enriquecidas en nitrógeno (N-rich) son un grupo particularmente interesante, \
            ya que aparecen en un amplio rango de metalicidades, lo que indica múltiples mecanismos responsables de su formación. \
            <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a> realizaron un censo de estrellas gigantes rojas con alto contenido de nitrógeno en la Vía Láctea, \
            utilizando la 17ª liberación de datos de APOGEE-2, identificando 149 gigantes de campo N-rich en el bulbo, \
            el disco pobre en metales y el halo galáctico.\n\n\
            Estas estrellas muestran abundancias elevadas de nitrógeno ([N/Fe] ≥ +0.5) y una deficiencia notable de carbono ([C/Fe] < +0.15), \
            distribuyéndose en un rango de metalicidades de -1.8 < [Fe/H] < -0.7. En APOGEE, se han identificado ∼412 estrellas N-rich, \
            algunas con patrones similares a los de los cúmulos globulares. Entre ellas, se encuentran las ocho estrellas N-rich estudiadas en este trabajo.\n\n\
            La presencia de estas estrellas en el campo galáctico sugiere que los procesos nucleosintéticos que generan anomalías en [N/Fe] \
            operan en diferentes entornos y metalicidades. Esto también plantea la posibilidad de que algunas de estas estrellas hayan pertenecido a sistemas binarios \
            o presenten variabilidad.\
            <h1></h1>
            <b>Las metalicidades reportadas de la estrella por <a href="https://iopscience.iop.org/article/10.3847/1538-4365/ac4414">Abdurro'uf et al. (2022)</a> y <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ab9ab8">Kunder et al. (2020)</a> son [Fe/H] =-0.4910 y [Fe/H] =-0.516 respectivamente. </b>`,
            imagen: "img/Diagrama_HR_Nrich_8.png"
        },
        "Si-rich": {
            titulo: "Si-rich",
            descripcion: `Las estrellas enriquecidas en silicio (Si-rich) fueron estudiadas por <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>, \
            revelando una subpoblación estelar única en el halo galáctico a partir de datos de APOGEE-2. \
            Estas estrellas, pobres en metales pero con [Si/Fe] ≥ +0.5, presentan una sobreabundancia notable de silicio en un rango de metalicidades \
            de -1.5 ≤ [Fe/H] ≤ -0.8.\n\n\
            Las Si-rich muestran fuertes características espectrales del isótopo 28 de Si, y muchas son estrellas de la rama gigante asintótica (AGB). \
            Se ha sugerido que estas estrellas de campo podrían tener origen en cúmulos globulares (GCs), pero la causa exacta de su enriquecimiento \
            aún es incierta. Se han propuesto varias hipótesis, como la contaminación por una supernova rica en silicio o la transferencia de masa \
            de un compañero estelar evolucionado. Sin embargo, estas teorías no explican completamente la diversidad de especies químicas observadas.\n\n\
            En el estudio de <a href="https://www.aanda.org/articles/aa/full_html/2022/07/aa43195-22/aa43195-22.html">Fernández-Trincado et al. (2022)</a>, se identificaron 55 nuevas estrellas Si-rich con bajo contenido metálico, \
            incluyendo <b>TYC5805-233-1, con [Si/Fe] = 0.80 y una metalicidad de [Fe/H] = -1.31, que es analizada en este trabajo.</b>`,
            imagen: "img/Diagrama_HR_Si_rich.png"
        },
        "s-rich": {
            titulo: "s-rich",
            descripcion: `Conocida principalmente como HD55496, esta estrella peculiar fue clasificada inicialmente como estrella de Bario (Ba) \
            por <a href="https://ui.adsabs.harvard.edu/abs/1972AJ.....77..384M/abstract">MacConnell et al. (1972)</a> y luego como una 'estrella de Bario pobre en metales' por <a href="https://ui.adsabs.harvard.edu/abs/1991ApJS...77..515L/abstract">Luck y Bond (1991)</a>. \
            Las estrellas de Bario son clave para entender los procesos de nucleosíntesis en la rama asintótica de gigantes (AGB).\n\n\
            Además de su enriquecimiento en elementos generados por procesos-s, HD55496 muestra altas abundancias de sodio y aluminio. \
            Su estatus como estrella de Bario sugiere que podría ser parte de un sistema binario, pero los análisis de velocidad radial (RV) \
            realizados durante 14 y posteriormente 16 años no han confirmado su binariedad. \
            A pesar de múltiples mediciones, no hay evidencia concluyente de la presencia de una compañera binaria que explique sus anomalías químicas.`,
            imagen: "img/Diagrama_HR_s-rich.png"
        },
    };

    // Escuchar cambios en el select
    selectEstrellas.addEventListener("change", function() {
        let estrellaSeleccionada = this.value;
        
        if (datosEstrellas.hasOwnProperty(estrellaSeleccionada)) {
            titulo.textContent = datosEstrellas[estrellaSeleccionada].titulo;
            descripcion.innerHTML = datosEstrellas[estrellaSeleccionada].descripcion;
            imagen.src = datosEstrellas[estrellaSeleccionada].imagen; // Cambiar la imagen
            
        } else {
            titulo.textContent = "Estrella no encontrada";
            descripcion.innerHTML = "No hay información disponible para esta selección.";
            imagen.src = "img/Diagrama_HR.png"; // Imagen por defecto si no se encuentra la estrella
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

