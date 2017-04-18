
var origen = document.getElementById("boton-origen");
var extincion = document.getElementById("boton-extincion");
var restaurar = document.getElementById("boton-restaurar");

var parrafos = document.getElementsByTagName("p");

function ocultarP1(){
    console.log(event);
    parrafos[0].style.visibility = "hidden";
    botones[0].removeEventListener("click",ocultarP1);
    botones[0].addEventListener("click",mostrarP1);    
}

function mostrarP1(){
    parrafos[0].style.visibility = "visible";
    botones[0].removeEventListener("click",mostrarP1);
    botones[0].addEventListener("click",ocultarP1);
}

function ocultarP2(){
    console.log(event);
    parrafos[1].style.visibility = "hidden";
    botones[1].removeEventListener("click",ocultarP2);
    botones[1].addEventListener("click",mostrarP2);    
}

function mostrarP2(){
    parrafos[1].style.visibility = "visible";
    botones[1].removeEventListener("click",mostrarP2);
    botones[1].addEventListener("click",ocultarP2);
}

function mostrarFotos(){
    
}


botones[0].addEventListener("click",ocultarP1);
botones[1].addEventListener("click",ocultarP2);