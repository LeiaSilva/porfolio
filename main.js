//TYPING DE TITULO
const textElement = document.querySelector(".dinamica");
const frases = [
    "Desarrolladora Front-End.", 
    "Estudiante de Ing. en Informática.", 
    "Diseñadora UX/UI."
];

let fraseIndex = 0;
let charIndex = 0;
let estaBorrando = false;

function Typing() {
    const fraseActual = frases[fraseIndex];
    let tiempoDeEspera = 100; 

    if (estaBorrando == true) {
        textElement.textContent = fraseActual.substring(0, charIndex - 1);
        charIndex = charIndex - 1;
        tiempoDeEspera = 50;
    } else {
        textElement.textContent = fraseActual.substring(0, charIndex + 1);
        charIndex = charIndex + 1;
        tiempoDeEspera = 150; // Al escribir es un poco más lento, más natural
    }

    // CONTROL DE ESTADOS 
    if (estaBorrando == false && charIndex == fraseActual.length) {
        estaBorrando = true;
        tiempoDeEspera = 2000; 
    } 
    else if (estaBorrando == true && charIndex == 0) {
        estaBorrando = false;
        fraseIndex = fraseIndex + 1; 

        if (fraseIndex == frases.length) {
            fraseIndex = 0;
        }
        tiempoDeEspera = 500; // Pausa pequeña antes de empezar la nueva frase
    }

    setTimeout(Typing, tiempoDeEspera);
}

// Iniciamos la función
Typing();
//PROGRESO DE BARRA Y TITULOS EN MOVIMIENTOS
document.addEventListener("DOMContentLoaded" , () =>{
    const observar = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            const el = entry.target
            if(entry.isIntersecting)
            {
                const valorFinal = el.getAttribute('data-progreso');
                el.style.setProperty('width', valorFinal, 'important');

                observar.unobserve(el);
            }
        });
    } , {threshold:0.5});

    const elementos =document.querySelectorAll('.animar-ancho');
    elementos.forEach(el => observar.observe(el));
})
