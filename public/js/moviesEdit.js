let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let label = document.querySelector('.formulario');


let pregunta = prompt("¿Desea modo oscuro?");

if(pregunta === "si"){
body.style.backgroundColor = '#7f7f7f'; 
}

h1.style = "color: white; background-color:red; padding: 30px;";
label.style = "color: white; margin-top: 30px";
body.classList.add("fondoEdit")
