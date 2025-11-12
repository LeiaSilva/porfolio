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


