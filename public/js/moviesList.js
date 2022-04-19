let body = document.querySelector('body');
let h1 = document.querySelector('h1');

let pregunta = prompt("¿Desea modo oscuro?");

if(pregunta === "si"){

    body.style.backgroundColor = '#7f7f7f';
    body.classList.add("fondoMoviesList");

}

h1.innerText += "LISTADO DE PELÍCULAS";

h1.style = 'color: white; background-color: teal; padding: 20px;';

/* EJEMPLO ALEX
moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
moviesListTitulo.style.color ='white';
moviesListTitulo.style.backgroundColor = 'teal';
moviesListTitulo.style.padding = '20px';*/
