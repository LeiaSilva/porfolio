/*--NAVBAR--*/
const menu = document.getElementById("menu");
const navbar = document.querySelector(".menu-atajos");
const contenido = document.getElementById("navbar-contenido");

menu.addEventListener("click" , () => {

navbar.classList.toggle('active');
menu.classList.toggle('girar');


});
/*--DARK-LIGHT MODE--*/
const mode = document.getElementById('mode');
const change_icon = document.getElementById('modes');
const body = document.getElementById('body');

mode.addEventListener("click" , ()=>{

    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        change_icon.setAttribute('name' , 'sunny-outline');
    }else{
        change_icon.setAttribute('name' , 'moon-outline');
    }

})
