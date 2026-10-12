const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("activo");

    if (navMenu.classList.contains("activo")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("activo");
        menuToggle.textContent = "☰";

    });

});

/* ========================================
   GALERÍA - ROTULACIÓN DE FACHADAS
======================================== */


/* ELEMENTOS */

const tarjetasProyectos = document.querySelectorAll(
    '.proyecto-card[data-proyecto]'
);

const galeriaModal = document.getElementById('galeriaModal');

const galeriaImagen = document.getElementById('galeriaImagen');

const galeriaImagenAnterior = document.getElementById('galeriaImagenAnterior');
const galeriaImagenSiguiente = document.getElementById('galeriaImagenSiguiente');

const slideAnterior = document.querySelector('.galeria-slide-anterior');
const slideSiguiente = document.querySelector('.galeria-slide-siguiente');

const cerrarGaleria = document.getElementById('galeriaCerrar');

const botonAnterior = document.querySelector('.galeria-anterior');

const botonSiguiente = document.querySelector('.galeria-siguiente');

const imagenActualTexto = document.getElementById('imagenActual');

const totalImagenesTexto = document.getElementById('totalImagenes');

const galeriaNumero = document.getElementById('galeriaNumero');
const galeriaTitulo = document.getElementById('galeriaTitulo');


/*IMÁGENES*/
/* ========================================
   DATOS DE LOS PROYECTOS
======================================== */

const proyectos = {

    fachadas: {
        numero: '01',
        titulo: 'Rotulación de fachadas',
        carpeta: 'assets/proyectos/fachadas/',
        imagenes: [
            'fachada-01.jpg',
            'fachada-02.jpg',
            'fachada-03.jpg'
        ]
    },

    letras: {
        numero: '02',
        titulo: 'Letras corpóreas y señalética',
        carpeta: 'assets/proyectos/letras-senaleticas/',
        imagenes: [
            'letras-01.jpg',
            'letras-02.jpg',
            'letras-03.jpg',
            'letras-04.jpg',
            'letras-05.jpg',
            'letras-06.jpg',

        ]
    },

    'gran-formato': {
        numero: '03',
        titulo: 'Impresión gran formato',
        carpeta: 'assets/proyectos/gran-formato/',
        imagenes: [
            'impresion-01.jpg',
            'impresion-02.jpg',
            'impresion-03.jpg',
            'impresion-04.jpg',
            'impresion-05.jpg',
            'impresion-06.jpg',
        ]
    },

    vinilos: {
        numero: '04',
        titulo: 'Vinilos y decoración',
        carpeta: 'assets/proyectos/vinilos-decoracion/',
        imagenes: [
            'decoracion-01.jpg',
            'decoracion-02.jpg',
            'decoracion-03.jpg',
            'decoracion-04.jpg',
        ]
    },

    acabados: {
        numero: '05',
        titulo: 'Acabados y manipulados',
        carpeta: 'assets/proyectos/acabados/',
        imagenes: [
            'acabados-01.jpg',
            'acabados-02.jpg',
            'acabados-03.jpg',
            'acabados-04.jpg',
            'acabados-05.jpg',
            'acabados-06.jpg',
        ]
    },

    montaje: {
        numero: '06',
        titulo: 'Montaje e instalación',
        carpeta: 'assets/proyectos/montaje/',
        imagenes: [
            'montaje-01.jpg',
            'montaje-02.jpg',
            'montaje-03.jpg',
            'montaje-04.jpg',
            'montaje-05.jpg',
            'montaje-06.jpg',
        ]
    }
};

let imagenActual = 0;

/*CONTROL DE ZOOM*/
let nivelZoom = 1;
const zoomMinimo = 1;
const zoomMaximo = 3;
const pasoZoom = 0.2;
let posicionX = 0;
let posicionY = 0;

let arrastrando = false;

let inicioX = 0;
let inicioY = 0;

function aplicarZoom() {

    /* Calculamos los límites permitidos
       según el nivel de zoom actual */
    const limiteX =
        (galeriaImagen.clientWidth * (nivelZoom - 1)) / 2;

    const limiteY =
        (galeriaImagen.clientHeight * (nivelZoom - 1)) / 2;


    /* Si al reducir el zoom la posición anterior
       queda fuera del nuevo límite, la corregimos */
    posicionX = Math.max(
        -limiteX,
        Math.min(limiteX, posicionX)
    );

    posicionY = Math.max(
        -limiteY,
        Math.min(limiteY, posicionY)
    );


    /* Al llegar al zoom normal,
       obligatoriamente volvemos al centro */
    if (nivelZoom <= 1) {

        nivelZoom = 1;
        posicionX = 0;
        posicionY = 0;

        galeriaImagen.classList.remove('con-zoom');

    } else {

        galeriaImagen.classList.add('con-zoom');

    }


    /* Aplicamos posición + zoom */
    galeriaImagen.style.transform =
        `translate(${posicionX}px, ${posicionY}px) scale(${nivelZoom})`;
}

function reiniciarZoom() {

    nivelZoom = 1;

    posicionX = 0;
    posicionY = 0;

    arrastrando = false;

    aplicarZoom();
}

/* ========================================
   ZOOM CON RUEDA DEL MOUSE
======================================== */

galeriaImagen.addEventListener('wheel', (event) => {

    event.preventDefault();

    if (event.deltaY < 0) {

        // RUEDA ARRIBA → ACERCAR
        nivelZoom += pasoZoom;

    } else {

        // RUEDA ABAJO → ALEJAR
        nivelZoom -= pasoZoom;

    }

    // LIMITAR ENTRE 1X Y 3X
    nivelZoom = Math.min(
        zoomMaximo,
        Math.max(zoomMinimo, nivelZoom)
    );

    aplicarZoom();

}, { passive: false });
/* ========================================
   ARRASTRAR IMAGEN CON ZOOM
======================================== */

galeriaImagen.addEventListener('mousedown', (event) => {

    // Solo permitimos arrastrar si hay zoom
    if (nivelZoom <= 1) {
        return;
    }

    arrastrando = true;

    inicioX = event.clientX - posicionX;
    inicioY = event.clientY - posicionY;

    // Quitamos temporalmente la transición
    // para que siga el movimiento del mouse
    galeriaImagen.style.transition = 'none';

    event.preventDefault();
});

document.addEventListener('mousemove', (event) => {

    if (!arrastrando) {
        return;
    }

    let nuevaX = event.clientX - inicioX;
    let nuevaY = event.clientY - inicioY;

    /* LÍMITE HORIZONTAL */
    const limiteX =
        (galeriaImagen.clientWidth * (nivelZoom - 1)) / 2;

    /* LÍMITE VERTICAL */
    const limiteY =
        (galeriaImagen.clientHeight * (nivelZoom - 1)) / 2;

    /* LIMITAMOS EL MOVIMIENTO */
    posicionX = Math.max(
        -limiteX,
        Math.min(limiteX, nuevaX)
    );

    posicionY = Math.max(
        -limiteY,
        Math.min(limiteY, nuevaY)
    );

    aplicarZoom();
});


document.addEventListener('mouseup', () => {

    if (!arrastrando) {
        return;
    }

    arrastrando = false;

    // Recuperamos la transición suave
    galeriaImagen.style.transition = 'transform 0.2s ease';

});

let proyectoActual = 'fachadas';
let imagenesActuales = [];


/* ========================================
   ACTUALIZAR IMAGEN
======================================== */

function actualizarImagen() {

    reiniciarZoom();

    const total = imagenesActuales.length;

    const anterior = (imagenActual - 1 + total) % total;
    const siguiente = (imagenActual + 1) % total;

    galeriaImagenAnterior.src = imagenesActuales[anterior];
    galeriaImagen.src = imagenesActuales[imagenActual];
    galeriaImagenSiguiente.src = imagenesActuales[siguiente];

    imagenActualTexto.textContent = imagenActual + 1;
    totalImagenesTexto.textContent = total;
}

/* ========================================
   ABRIR GALERÍA
======================================== */

tarjetasProyectos.forEach((tarjeta) => {

    tarjeta.addEventListener('click', () => {

        proyectoActual = tarjeta.dataset.proyecto;

        const proyecto = proyectos[proyectoActual];

        /* Si todavía no hay fotos, no abrimos la galería */
        if (!proyecto || proyecto.imagenes.length === 0) {
            return;
        }

        /* Construimos las rutas de las imágenes */
        imagenesActuales = proyecto.imagenes.map(
            imagen => proyecto.carpeta + imagen
        );

        galeriaNumero.textContent = proyecto.numero;
        galeriaTitulo.dataset.i18n = `proyectos.${proyectoActual === "gran-formato" ? "granFormato" : proyectoActual}.titulo`;

galeriaTitulo.textContent =
    traducciones[document.documentElement.lang]?.[
        galeriaTitulo.dataset.i18n
    ] || proyecto.titulo;

        imagenActual = 0;

        actualizarImagen();

        galeriaModal.classList.add('activa');
        document.body.style.overflow = 'hidden';
        history.pushState({ galeriaAbierta: true }, '');


    });

});

/* ========================================
   CERRAR GALERÍA
======================================== */


cerrarGaleria.addEventListener('click', () => {
    if (history.state?.galeriaAbierta) {
        history.back();
    } else {
        cerrarGaleriaModal();
    }
});


function cerrarGaleriaModal() {
    galeriaModal.classList.remove('activa');
    document.body.style.overflow = '';
    reiniciarZoom();
}


/* ========================================
   SIGUIENTE FOTO
======================================== */

botonSiguiente.addEventListener('click', () => {

    imagenActual++;

    if (imagenActual >= imagenesActuales.length) {
        imagenActual = 0;
    }

    actualizarImagen();

});

/* ========================================
   FOTO ANTERIOR
======================================== */

botonAnterior.addEventListener('click', () => {

    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = imagenesActuales.length - 1;
    }

    actualizarImagen();

});

/* ========================================
   CLIC EN LAS IMÁGENES LATERALES
======================================== */

// TARJETA IZQUIERDA → FOTO ANTERIOR
slideAnterior.addEventListener('click', () => {

    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = imagenesActuales.length - 1;
    }

    actualizarImagen();
});


// TARJETA DERECHA → FOTO SIGUIENTE
slideSiguiente.addEventListener('click', () => {

    imagenActual++;

    if (imagenActual >= imagenesActuales.length) {
        imagenActual = 0;
    }

    actualizarImagen();
});
/* ========================================
   CERRAR CON ESC
======================================== */


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' &&
        galeriaModal.classList.contains('activa')) {

        if (history.state?.galeriaAbierta) {
            history.back();
        } else {
            cerrarGaleriaModal();
        }
    }
});



/* ========================================
   DESLIZAMIENTO TÁCTIL DE LA GALERÍA
======================================== */

let touchInicioX = 0;
let touchInicioY = 0;

galeriaModal.addEventListener('touchstart', (event) => {
    if (!galeriaModal.classList.contains('activa')) return;

    // No interferir con el zoom
    if (nivelZoom > 1) return;

    if (event.touches.length !== 1) return;

    touchInicioX = event.touches[0].clientX;
    touchInicioY = event.touches[0].clientY;
}, { passive: true });

galeriaModal.addEventListener('touchend', (event) => {
    if (!galeriaModal.classList.contains('activa')) return;
    if (nivelZoom > 1) return;
    if (event.changedTouches.length !== 1) return;

    const diferenciaX = event.changedTouches[0].clientX - touchInicioX;
    const diferenciaY = event.changedTouches[0].clientY - touchInicioY;

    // Evitar que un movimiento vertical cambie de foto
    if (Math.abs(diferenciaX) < 50 ||
        Math.abs(diferenciaX) <= Math.abs(diferenciaY)) {
        return;
    }

    if (diferenciaX < 0) {
        // Deslizar a la izquierda: siguiente foto
        botonSiguiente.click();
    } else {
        // Deslizar a la derecha: foto anterior
        botonAnterior.click();
    }
}, { passive: true });


/* ========================================
   BOTÓN ATRÁS DEL MÓVIL
======================================== */

window.addEventListener('popstate', () => {
    if (galeriaModal.classList.contains('activa')) {
        cerrarGaleriaModal();
    }
});
