import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-boton", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#descativar-reloj");
    alarm("/assets/sounds/car-alarm.mp3","#activar-alarma","#desactivar-alarma")
})
