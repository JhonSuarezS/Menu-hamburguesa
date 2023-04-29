import scrollTopBtn from "./boton-scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import webCam from "./deteccion_webcam.js";
import filtroImage from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import drow from "./sorteo_digital.js";
import { moveBall } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-boton", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#descativar-reloj");
    alarm("/assets/sounds/car-alarm.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jun 08, 2023 16:10:45", "Feliz cumpleaños Hija");
    scrollTopBtn(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/O5BOxn8Go8U" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/O5BOxn8Go8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/LoC17SsTHhGbYmX59" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.198038829354!2d-73.03655672610249!3d5.827678530860285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f0c9a7f9a89%3A0xc5d7dbd4ef8fe814!2sParque%20de%20Los%20Libertadores!5e0!3m2!1ses!2sco!4v1682027584083!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    webCam("webcam");
    getGeolocation("geolocalizacion");
    filtroImage(".card-filter",".card");
    drow("#winner-btn",".player","winner");
    slider();
});

d.addEventListener("keydown", (e) =>{
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
