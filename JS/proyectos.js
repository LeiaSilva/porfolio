
//Elementos dinamicos 
const container = document.getElementById("container-cards");
const btn1 = document.getElementById("ultimos");
const btn2 = document.getElementById("todos");

//Base de datos de proyectos
const misProyectos = [
    {
        id: 1,
        titulo: "Aplicación web ventas de muebles",
        categoria: "Últimos",
        estado: "Finalizado",
        descripción: "",
        imagen: "./assets/bulkPage.png",
        link: "https://leiasilva.github.io/bulk/",
        tecnologias: ["HTML", "CSS","SASS", "Responsive", "JS"]
    },
    {
        id: 2,
        titulo: "Porfolio",
        categoria: "Últimos",
        estado: "Finalizado",
        descripción: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi vel consectetur interdum, lacus nisl aliquam nunc.",
        imagen: "./assets/porfolioPage.png",
        link: "https://leiasilva.github.io/porfolio/",
        tecnologias: ["HTML", "CSS", "SASS","Responsive", "JS"]
    },
    {
        id: 3,
        titulo: "",
        categoria: "Todos",
        estado: "EnCurso",
        descripción: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi vel consectetur interdum, lacus nisl aliquam nunc.",
        imagen: "https://via.placeholder.com/400x300?text=Coming+Soon",
        link: "",
        tecnologias: ["", ""]
    },
    {
        id: 4,
        titulo: "",
        categoria: "Todos",
        estado: "EnCurso",
        descripción: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi vel consectetur interdum, lacus nisl aliquam nunc.",
        imagen: "https://via.placeholder.com/400x300?text=Coming+Soon",
        link: "",
        tecnologias: ["", ""]
    },


];

//Funcionamiento
function generarProyectos(proyectos) {
    container.innerHTML = '';
    proyectos.forEach(cards => {
        const card = document.createElement('div');
        let tuerca = '';
        card.classList.add('proyectos-container-cards-box');
        if (cards.estado == "EnCurso") {
            tuerca = `
                <div class="overlay-construccion">
                    <ion-icon name="cog-outline"></ion-icon>
                </div>
            `
        }
        card.innerHTML = `
            <div class="card-img">
                ${tuerca}
                <img src="${cards.imagen}"></img>
            </div>
            <p>${cards.titulo}</p>
        `;
        card.addEventListener('click', () => {
            abrirModal(cards);
        })
        container.appendChild(card);

    });
}
generarProyectos(misProyectos);
//Modal
function abrirModal(proyecto) {
    const modal = document.getElementById("modal");

    modal.innerHTML = `
        <ion-icon name="close-outline" id="cerrar-modal"></ion-icon>
        <div class="proyecto-info">
            <p class="proyecto-info-titulo">${proyecto.titulo}</p>
            <div class="proyecto-info-descrip">
                <p>${proyecto.descripción}</p>
            </div>
            <div class="proyecto-info-tec">
                ${proyecto.tecnologias.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
            <button>
            <a href="${proyecto.link}" class="modal-info-link">Visitar Web <ion-icon name="link-outline" class="links"></ion-icon></a>
            </button>
        </div>

    `
    modal.style.display = "flex";
    const close = document.getElementById("cerrar-modal");

    close.addEventListener("click", () => {
        modal.style.display = "none";
    })
}
//Filtro "ultimos"
btn1.addEventListener("click", () => {
    const filtrados = misProyectos.filter(p => p.categoria === "Últimos");
    generarProyectos(filtrados);

    btn1.classList.add("active");
    btn2.classList.remove("active");
});

// Filtro para "Todos"
btn2.addEventListener("click", () => {
    generarProyectos(misProyectos);

    btn2.classList.add("active");
    btn1.classList.remove("active");
});
