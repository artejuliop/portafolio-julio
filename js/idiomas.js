
/* ========================================
   SELECTOR DE IDIOMAS Y DESCARGA DE CV
======================================== */

const botonesIdioma = document.querySelectorAll(
    ".language-selector button"
);

const archivosCV = {
    es: "assets/cv/julio-cesar-cv-es.pdf",
    en: "assets/cv/julio-cesar-cv-en.pdf",
    de: "assets/cv/julio-cesar-cv-de.pdf"
};

function cambiarIdioma(idioma) {

    // Actualizar el idioma de la página
    document.documentElement.lang = idioma;

    // Traducir los textos de la web
    traducirPagina(idioma);
    // DIVIDIR EL TÍTULO DE PROFESIÓN EN DOS LÍNEAS
const tituloProfesion = document.querySelector(".inicio-profesion");

if (tituloProfesion) {
    const textos = {
        es: [
            "ESPECIALISTA EN PRODUCCIÓN GRÁFICA",
            "E IMPRESIÓN DIGITAL"
        ],
        en: [
            "GRAPHIC PRODUCTION",
            "AND DIGITAL PRINTING SPECIALIST"
        ],
        de: [
            "SPEZIALIST FÜR GRAFISCHE PRODUKTION",
            "UND DIGITALDRUCK"
        ]
    };

    tituloProfesion.replaceChildren();

    textos[idioma].forEach(linea => {
        const span = document.createElement("span");
        span.classList.add("profesion-linea");
        span.textContent = linea;
        tituloProfesion.appendChild(span);
    });
}

    // Actualizar todos los botones de descarga del CV
    document.querySelectorAll(".descargar-cv").forEach(boton => {

        boton.href = archivosCV[idioma];

        boton.setAttribute(
            "download",
            archivosCV[idioma].split("/").pop()
        );

    });

    // Marcar el idioma seleccionado
    botonesIdioma.forEach(boton => {
        boton.classList.toggle(
            "activo",
            boton.dataset.lang === idioma
        );
    });

}

// Detectar clic en ES, EN o DE
botonesIdioma.forEach(boton => {

    boton.addEventListener("click", () => {
        cambiarIdioma(boton.dataset.lang);
    });

});


/* ========================================
   TRADUCCIONES DE LA WEB
======================================== */


const traducciones = {

    es: {
        // MENÚ
        "nav.inicio": "Inicio",
        "nav.sobreMi": "Sobre mí",
        "nav.proyectos": "Proyectos",
        "nav.procesos": "Procesos",
        "nav.contactame": "Contáctame",

        // INICIO
        "inicio.saludo": "Hola, soy",
        "inicio.profesion": "ESPECIALISTA EN PRODUCCIÓN GRÁFICA E IMPRESIÓN DIGITAL",
        "inicio.descripcion": "Especializado en diseño, impresión, rotulación, acabados e instalación gráfica.",
        "inicio.verProyectos": "Ver proyectos",
        "inicio.verCV": "Descargar CV",

        // ESPECIALIDADES
        "especialidad.diseno": "Diseño gráfico",
        "especialidad.impresion": "Impresión digital y gran formato",
        "especialidad.rotulacion": "Rotulación interior y exterior",
        "especialidad.acabados": "Acabados y manipulados",
        "especialidad.montaje": "Montaje e instalación",

        // CONTACTO
        "contacto.descargarCV": "Descargar CV",
 
        // SOBRE MÍ
        "sobreMi.etiqueta": "SOBRE MÍ",
        "sobreMi.titulo": "Experiencia detrás del trabajo",
        "sobreMi.destacado": "Producción gráfica, impresión y rotulación con experiencia práctica en cada etapa del proceso.",
        "sobreMi.descripcion": "Cuento con más de 8 años de experiencia en el sector gráfico, trabajando en impresión digital, gran formato, rotulación, acabados e instalación. Mi experiencia abarca desde la preparación y producción hasta el montaje final de cada proyecto.",
        "sobreMi.experiencia": "Años de experiencia",
        "sobreMi.produccion": "Producción integral",
        "sobreMi.formato": "Gran formato",
        
        // PROYECTOS
        "proyectos.etiqueta": "PROYECTOS",
        "proyectos.titulo": "Trabajos que hablan por sí solos",
        "proyectos.intro": "Una selección de proyectos realizados en producción gráfica, impresión, rotulación, acabados y montaje.",

        "proyectos.fachadas.titulo": "Rotulación de fachadas",
        "proyectos.fachadas.descripcion": "Interior y exterior",

        "proyectos.letras.titulo": "Letras corpóreas y señalética",
        "proyectos.letras.descripcion": "Fabricación e instalación",

        "proyectos.granFormato.titulo": "Impresión gran formato",
        "proyectos.granFormato.descripcion": "Lonas, vinilos y soportes rígidos",

        "proyectos.vinilos.titulo": "Vinilos y decoración",
        "proyectos.vinilos.descripcion": "Espacios comerciales e interiores",

        "proyectos.acabados.titulo": "Acabados y manipulados",
        "proyectos.acabados.descripcion": "Producción y terminaciones",

        "proyectos.montaje.titulo": "Montaje e instalación",
        "proyectos.montaje.descripcion": "Instalación gráfica profesional",
        
        // PROCESOS
        "procesos.etiqueta": "PROCESOS",
        "procesos.titulo": "Del diseño a la instalación",
        "procesos.descripcion": "Participo en distintas etapas del proceso gráfico, desde el diseño y preparación de archivos hasta la producción, acabados e instalación.",

        "procesos.diseno.titulo": "Diseño",
        "procesos.diseno.descripcion": "Desarrollo y adaptación de propuestas visuales preparadas para su producción.",
        "procesos.diseno.detalles": "Concepto · Composición · Artes finales",

        "procesos.preparacion.titulo": "Preparación",
        "procesos.preparacion.descripcion": "Revisión y preparación técnica de archivos antes de entrar a producción.",
        "procesos.preparacion.detalles": "Preimpresión · Medidas · Sangrados",

        "procesos.produccion.titulo": "Producción",
        "procesos.produccion.descripcion": "Manejo y supervisión de procesos de impresión y producción gráfica.",
        "procesos.produccion.detalles": "Impresión digital · Gran formato · Materiales",

        "procesos.acabados.titulo": "Acabados",
        "procesos.acabados.descripcion": "Preparación final de las piezas para garantizar una presentación limpia y profesional.",
        "procesos.acabados.detalles": "Laminado · Corte · Manipulados",

        "procesos.instalacion.titulo": "Instalación",
        "procesos.instalacion.descripcion": "Montaje y aplicación final del proyecto directamente en el espacio del cliente.",
        "procesos.instalacion.detalles": "Vinilos · Rotulación · Montaje",
        
        // CONTACTO
        "contacto.etiqueta": "CONTÁCTAME",
        "contacto.titulo": "¿Hablamos de una oportunidad laboral?",
        "contacto.descripcion1": "Cuento con más de 8 años de experiencia en producción gráfica, impresión digital, rotulación, acabados e instalación.",
        "contacto.descripcion2": "Estoy interesado en nuevas oportunidades laborales en España y Europa, donde pueda aportar mis conocimientos y seguir desarrollándome profesionalmente.",
        "contacto.especialidad1": "Producción gráfica",
        "contacto.especialidad2": "Gran formato",
        "contacto.especialidad3": "Rotulación",
        "contacto.profesion": "Profesional de producción gráfica",
        "contacto.telefono": "TELÉFONO / WHATSAPP",
        "contacto.correo": "CORREO ELECTRÓNICO",
        "contacto.ubicacion": "UBICACIÓN ACTUAL",
        "contacto.ciudad": "Sevilla, España",

        // FOOTER
        "footer.derechos": "© 2026 Julio Cesar. Todos los derechos reservados.",

    },

    en: {
        // NAVIGATION
        "nav.inicio": "Home",
        "nav.sobreMi": "About Me",
        "nav.proyectos": "Projects",
        "nav.procesos": "Work Process",
        "nav.contactame": "Contact Me",

        // HOME
        "inicio.saludo": "Hi, I'm",
        "inicio.profesion": "GRAPHIC PRODUCTION AND DIGITAL PRINTING SPECIALIST",
        "inicio.descripcion": "Specialized in graphic design, printing, signage, finishing and installation.",
        "inicio.verProyectos": "View Projects",
        "inicio.verCV": "Download CV",

        // SPECIALTIES
        "especialidad.diseno": "Graphic Design",
        "especialidad.impresion": "Digital & Large-Format Printing",
        "especialidad.rotulacion": "Indoor & Outdoor Signage",
        "especialidad.acabados": "Print Finishing & Processing",
        "especialidad.montaje": "Assembly & Installation",

        // CONTACT
        "contacto.descargarCV": "Download CV",
        
        // ABOUT ME
        "sobreMi.etiqueta": "ABOUT ME",
        "sobreMi.titulo": "Experience Behind the Work",
        "sobreMi.destacado": "Graphic production, digital printing and signage, with hands-on experience at every stage of the process.",
        "sobreMi.descripcion": "I have over 8 years of experience in the printing and graphics industry, working in digital printing, large-format production, signage, print finishing and installation. My experience covers everything from prepress preparation and production to the final installation of each project.",
        "sobreMi.experiencia": "Years of Experience",
        "sobreMi.produccion": "End-to-End Production",
        "sobreMi.formato": "Large Format",
        
        // PROJECTS
        "proyectos.etiqueta": "PROJECTS",
        "proyectos.titulo": "Work That Speaks for Itself",
        "proyectos.intro": "A selection of projects in graphic production, printing, signage, finishing and installation.",

        "proyectos.fachadas.titulo": "Building Signage",
        "proyectos.fachadas.descripcion": "Indoor and outdoor applications",

        "proyectos.letras.titulo": "3D Letters & Signage",
        "proyectos.letras.descripcion": "Fabrication and installation",

        "proyectos.granFormato.titulo": "Large-Format Printing",
        "proyectos.granFormato.descripcion": "Banners, vinyl graphics and rigid substrates",

        "proyectos.vinilos.titulo": "Vinyl Graphics & Decoration",
        "proyectos.vinilos.descripcion": "Commercial and interior spaces",

        "proyectos.acabados.titulo": "Print Finishing",
        "proyectos.acabados.descripcion": "Production and finishing processes",

        "proyectos.montaje.titulo": "Assembly & Installation",
        "proyectos.montaje.descripcion": "Professional graphics installation",
        
        // WORK PROCESS
        "procesos.etiqueta": "WORK PROCESS",
        "procesos.titulo": "From Design to Installation",
        "procesos.descripcion": "I work across multiple stages of the graphics production process, from design and file preparation to printing, finishing and installation.",

        "procesos.diseno.titulo": "Design",
        "procesos.diseno.descripcion": "Development and adaptation of visual concepts, prepared for production.",
        "procesos.diseno.detalles": "Concept · Layout · Print-Ready Artwork",

        "procesos.preparacion.titulo": "Prepress",
        "procesos.preparacion.descripcion": "Technical review and preparation of files before production.",
        "procesos.preparacion.detalles": "Prepress · Dimensions · Bleed",

        "procesos.produccion.titulo": "Production",
        "procesos.produccion.descripcion": "Operation and supervision of digital printing and graphics production processes.",
        "procesos.produccion.detalles": "Digital Printing · Large Format · Materials",

        "procesos.acabados.titulo": "Finishing",
        "procesos.acabados.descripcion": "Final preparation of printed materials to ensure a clean, professional finish.",
        "procesos.acabados.detalles": "Lamination · Cutting · Finishing",

        "procesos.instalacion.titulo": "Installation",
        "procesos.instalacion.descripcion": "Final assembly and application of graphics directly at the client's premises.",
        "procesos.instalacion.detalles": "Vinyl Graphics · Signage · Installation",
        
        // CONTACT
        "contacto.etiqueta": "CONTACT ME",
        "contacto.titulo": "Let's Talk About Job Opportunities",
        "contacto.descripcion1": "I have over 8 years of experience in graphic production, digital printing, signage, print finishing and installation.",
        "contacto.descripcion2": "I am interested in new job opportunities in Spain and across Europe, where I can contribute my skills and continue developing professionally.",
        "contacto.especialidad1": "Graphic Production",
        "contacto.especialidad2": "Large Format",
        "contacto.especialidad3": "Signage",
        "contacto.profesion": "Graphic Production Professional",
        "contacto.telefono": "PHONE / WHATSAPP",
        "contacto.correo": "EMAIL",
        "contacto.ubicacion": "CURRENT LOCATION",
        "contacto.ciudad": "Seville, Spain",

        // FOOTER
        "footer.derechos": "© 2026 Julio Cesar. All rights reserved.",

    },

    de: {
        // NAVIGATION
        "nav.inicio": "Startseite",
        "nav.sobreMi": "Über mich",
        "nav.proyectos": "Projekte",
        "nav.procesos": "Arbeitsabläufe",
        "nav.contactame": "Kontakt",

        // STARTSEITE
        "inicio.saludo": "Hallo, ich bin",
        "inicio.profesion": "SPEZIALIST FÜR GRAFISCHE PRODUKTION UND DIGITALDRUCK",
        "inicio.descripcion": "Spezialisiert auf Grafikdesign, Druck, Werbetechnik, Weiterverarbeitung und Montage.",
        "inicio.verProyectos": "Projekte ansehen",
        "inicio.verCV": "Lebenslauf herunterladen",

        // FACHGEBIETE
        "especialidad.diseno": "Grafikdesign",
        "especialidad.impresion": "Digital- und Großformatdruck",
        "especialidad.rotulacion": "Innen- und Außenbeschriftung",
        "especialidad.acabados": "Druckweiterverarbeitung",
        "especialidad.montaje": "Montage & Installation",

        // KONTAKT
        "contacto.descargarCV": "Lebenslauf herunterladen",
        
        // ÜBER MICH
        "sobreMi.etiqueta": "ÜBER MICH",
        "sobreMi.titulo": "Erfahrung hinter jeder Arbeit",
        "sobreMi.destacado": "Grafische Produktion, Digitaldruck und Werbetechnik mit praktischer Erfahrung in allen Produktionsphasen.",
        "sobreMi.descripcion": "Ich verfüge über mehr als 8 Jahre Erfahrung in der Druck- und Werbetechnikbranche. Meine Tätigkeiten umfassen Digitaldruck, Großformatdruck, Beschriftung, Druckweiterverarbeitung und Montage. Meine Erfahrung reicht von der Druckvorstufe und Produktion bis zur abschließenden Montage jedes Projekts.",
        "sobreMi.experiencia": "Jahre Erfahrung",
        "sobreMi.produccion": "Komplettproduktion",
        "sobreMi.formato": "Großformatdruck",
        
        // PROJEKTE
        "proyectos.etiqueta": "PROJEKTE",
        "proyectos.titulo": "Arbeiten, die für sich sprechen",
        "proyectos.intro": "Eine Auswahl von Projekten aus den Bereichen grafische Produktion, Druck, Werbetechnik, Weiterverarbeitung und Montage.",

        "proyectos.fachadas.titulo": "Fassadenbeschriftung",
        "proyectos.fachadas.descripcion": "Innen- und Außenbereich",

        "proyectos.letras.titulo": "Profilbuchstaben & Beschilderung",
        "proyectos.letras.descripcion": "Herstellung und Montage",

        "proyectos.granFormato.titulo": "Großformatdruck",
        "proyectos.granFormato.descripcion": "Banner, Folien und starre Materialien",

        "proyectos.vinilos.titulo": "Folienbeschriftung & Dekoration",
        "proyectos.vinilos.descripcion": "Geschäftsräume und Innenbereiche",

        "proyectos.acabados.titulo": "Druckweiterverarbeitung",
        "proyectos.acabados.descripcion": "Produktion und Endverarbeitung",

        "proyectos.montaje.titulo": "Montage & Installation",
        "proyectos.montaje.descripcion": "Professionelle Werbetechnik-Montage",
        
        // ARBEITSABLÄUFE
        "procesos.etiqueta": "ARBEITSABLÄUFE",
        "procesos.titulo": "Vom Design bis zur Montage",
        "procesos.descripcion": "Ich bin an verschiedenen Phasen der grafischen Produktion beteiligt – von der Gestaltung und Druckdatenaufbereitung bis zur Produktion, Weiterverarbeitung und Montage.",

        "procesos.diseno.titulo": "Gestaltung",
        "procesos.diseno.descripcion": "Entwicklung und Anpassung visueller Gestaltungskonzepte für die Produktion.",
        "procesos.diseno.detalles": "Konzept · Layout · Druckfertige Daten",

        "procesos.preparacion.titulo": "Druckvorstufe",
        "procesos.preparacion.descripcion": "Technische Prüfung und Aufbereitung der Druckdaten vor Produktionsbeginn.",
        "procesos.preparacion.detalles": "Druckvorstufe · Maße · Beschnitt",

        "procesos.produccion.titulo": "Produktion",
        "procesos.produccion.descripcion": "Bedienung und Überwachung von Digitaldruck- und grafischen Produktionsprozessen.",
        "procesos.produccion.detalles": "Digitaldruck · Großformatdruck · Materialien",

        "procesos.acabados.titulo": "Weiterverarbeitung",
        "procesos.acabados.descripcion": "Abschließende Bearbeitung der Druckprodukte für ein sauberes und professionelles Ergebnis.",
        "procesos.acabados.detalles": "Laminieren · Schneiden · Konfektionierung",

        "procesos.instalacion.titulo": "Montage",
        "procesos.instalacion.descripcion": "Endmontage und Anbringung der Grafiken direkt vor Ort beim Kunden.",
        "procesos.instalacion.detalles": "Folienbeschriftung · Werbetechnik · Montage",
        
        // KONTAKT
        "contacto.etiqueta": "KONTAKT",
        "contacto.titulo": "Sprechen wir über berufliche Möglichkeiten",
        "contacto.descripcion1": "Ich verfüge über mehr als 8 Jahre Erfahrung in der grafischen Produktion, im Digitaldruck, in der Werbetechnik, Druckweiterverarbeitung und Montage.",
        "contacto.descripcion2": "Ich interessiere mich für neue berufliche Möglichkeiten in Spanien und Europa, bei denen ich meine Kenntnisse einbringen und mich beruflich weiterentwickeln kann.",
        "contacto.especialidad1": "Grafische Produktion",
        "contacto.especialidad2": "Großformatdruck",
        "contacto.especialidad3": "Werbetechnik",
        "contacto.profesion": "Fachkraft für grafische Produktion",
        "contacto.telefono": "TELEFON / WHATSAPP",
        "contacto.correo": "E-MAIL",
        "contacto.ubicacion": "AKTUELLER STANDORT",
        "contacto.ciudad": "Sevilla, Spanien",

        // FOOTER
        "footer.derechos": "© 2026 Julio Cesar. Alle Rechte vorbehalten.",

    }

};


function traducirPagina(idioma) {

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.dataset.i18n;
        const traduccion = traducciones[idioma]?.[clave];

        if (!traduccion) return;

        // Conservar imágenes e iconos dentro de los botones
        const nodoTexto = [...elemento.childNodes].find(
            nodo => nodo.nodeType === Node.TEXT_NODE &&
                    nodo.textContent.trim()
        );

        if (elemento.querySelector("img, svg") && nodoTexto) {
            nodoTexto.textContent = " " + traduccion + " ";
        } else {
            elemento.textContent = traduccion;
        }

    });

}

// INICIAR EL IDIOMA DESPUÉS DE CARGAR LAS TRADUCCIONES
cambiarIdioma("es");
