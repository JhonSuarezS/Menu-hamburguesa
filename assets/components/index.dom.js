import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-boton", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#descativar-reloj");
    alarm("/assets/sounds/car-alarm.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jun 08, 2023 16:10:45", "Feliz cumpleaños Hija");
});

d.addEventListener("keydown", (e) =>{
    moveBall(e, ".ball", ".stage");
});
