/** asignacion de variables */

// Variable que hace referencia al elemento del carrito de compras
const carrito = document.getElementById('carrito');

// Variable que hace referencia al cuerpo de la tabla del carrito
const bodycarrito = document.querySelector('tbody');

// Variable que hace referencia al pie de la tabla del carrito
const footerCarrito = document.querySelector('tfoot');

// Variable que hace referencia al botón de "Vaciar Carrito"
const vaciarCarrito = document.querySelector('#vaciar-carrito');

// Variable que hace referencia a la lista de cursos disponibles
const listaCursos = document.querySelector('.lista-cursos');

// Arreglo para almacenar los cursos seleccionados por el usuario
let arregloCarrito = [];

cargarEventos();


//metodo para llamar a las demas funciones que se efectuaran en el carrito
function cargarEventos(){
    //addEvenlistener
    //asignamos la atencion al contenedor main para seleccionar un curso
    listaCursos.addEventListener('click', seleccionarCurso);
}
//metodo para saber que curso selecciono el usuario
function seleccionarCurso(e){
    //validar que el hipervinculo no genere la redireccion
    //preventDefault = es un metodo que cancela la accion por default de un elemento html
    e.preventDefault();

    //classList.contains => metodo para verificar si existe una clase en HTML devuelve true si la clase existe y false si no existe
    if(e.target.classList.contains('agregar-carrito')) {
        
        //parentElement => sacamos el elemento padre de la etiqueta
        console.log(e.target.parentElement.parentElement);
    }

}


function guardarPedido() {

}