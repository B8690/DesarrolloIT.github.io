//MENU LATERAL//
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
    menu.style.display = "block";
    menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for (var x =0; x <links.length;x++){
    links [x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;

    }
}
//creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra ){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className= "e";
        id_barra.appendChild(div);
    }
}
 //HABILIDADES
 function efectoHabilidades() {
var habilidades = document.getElementById("habilidades");
var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
if(distancia_skills>=300 && entro==false){
    entro= true;
    const intervalHtml = setInterval (function (){
        pintarBarra(javascript, 16, 0, intervalHtml);
    }, 100 );
}
 }


