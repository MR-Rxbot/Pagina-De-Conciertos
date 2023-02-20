document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento se ha cargado");
})


// Definimos nuestra funcion de lo que queremos que haga

function clickTitulo(){
    console.log("Haz clickeado sobre eñ titulo")
}


// creamos una variable la cual sera el valor de nuestro html
// tomado a traves del id en este caso nuestro h1 con id tituloP


const titulo1 = document.getElementById('tituloP');


// invocamos la funcion con un listener
// cuando ocurra el evento este lo detectara y permitira realizarlo 

// titulo1.onclick = clickTitulo;


titulo1.addEventListener("click", clickTitulo);


// de esta forma removemos un evento que no deseemos utilizar mas
// titulo1.removeEventListener("click", clickTitulo);

