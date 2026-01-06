//TYPING DE TITULO
const text = document.querySelector(".dinamica");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Desarrolladora Front-End.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Estudiante de Ing. en Informática.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Diseñadora UX/UI.";
    }, 8000);
}
textLoad();
setInterval(textLoad , 12000);

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
