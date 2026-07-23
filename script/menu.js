const menu = document.getElementById("menu");
const abrirMenu = document.getElementById("abrirMenu");
const cerrarMenu = document.getElementById("cerrarMenu");
const overlay = document.getElementById("overlay");
const header = document.querySelector(".header");

const panelPrincipal = document.getElementById("menuPrincipal");

const categorias = document.querySelectorAll(".menu__categoria");

const botonesVolver = document.querySelectorAll(".menu__volver");

function abrirSidebar(){
    menu.classList.add("activo");
    overlay.classList.add("activo");
    header.classList.add("menu-open");
}

function cerrarSidebar(){
    menu.classList.remove("activo");
    overlay.classList.remove("activo");
    header.classList.remove("menu-open");
    // Regresa siempre al menú principal
    document.querySelectorAll(".menu__panel").forEach(panel=>{
        panel.classList.remove("activo");
    });
    panelPrincipal.classList.remove("oculto");
}

abrirMenu.addEventListener("click", abrirSidebar);
cerrarMenu.addEventListener("click", cerrarSidebar);
overlay.addEventListener("click", cerrarSidebar);

categorias.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        const idPanel = boton.dataset.panel;
        const panel = document.getElementById(idPanel);
        panelPrincipal.classList.add("oculto");
        panel.classList.add("activo");
    });
});

botonesVolver.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        document.querySelectorAll(".menu__panel").forEach(panel=>{
            panel.classList.remove("activo");
        });
        panelPrincipal.classList.remove("oculto");
    });
});

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        cerrarSidebar();
    }
});

window.addEventListener("resize",()=>{
    if(window.innerWidth>1024){
        cerrarSidebar();
    }
});