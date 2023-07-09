/**
 * asignacion de variables
 */

const btnGuardar = document.querySelector('#btnGuardar');
const txtCodigo = document.querySelector('#txtCodigo');
const txtTitulo = document.querySelector('#txtTitulo');
const txtGenero = document.querySelector('#txtGenero');
const txtAutor = document.querySelector('#txtAutor');
const txtFecha = document.getElementById('txtFecha');
const tbody = document.querySelector('tbody');
let arreglo_libro = [];
let nuevo_libro = true;

//metodo de escucha para guardar el libro
btnGuardar.addEventListener('click', () =>{
    // condicionamos cuando el modal este vacio para registrar un nuevo libro
    if(nuevo_libro == true){
        //registramos un nuevo libro, agregamos un objeto con la informacion que el usuario nos ingrese en el modal.
        objeto_libro = {
            codigo: txtCodigo.value,
            titulo: txtTitulo.value,
            genero: txtGenero.value,
            autor: txtAutor.value,
            fecha: txtFecha.value
        }

        //agregando libros al arreglo
        arreglo_libro.push(objeto_libro);
        console.table(arreglo_libro);
        listaLibros();

        //haciendo uso del Jquery
        $('#exampleModal').modal('hide');
        vaciarModal();


    }else{
        //actualizamos un libro que ya existe
    }
})

//metodo vaciar los campos del modal
function vaciarModal(){
    txtCodigo.value = "";
    txtTitulo.value = "";
    txtGenero.value = "";
    txtAutor.value = "";
    txtFecha.value = "";
    nuevo_libro = true;
}

//metodopara enlistar los libros registrados
function listaLibros(){
    //mapeando el arreglo
    arreglo_libro.map(item => {
        //crear un elemento tr
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.titulo}</td>
            <td>${item.genero}</td>
            <td>${item.autor}</td>
            <td>${item.fecha}</td>
        `;

        //agregando la fila al elemento tbody
        tbody.appendChild(fila);
    })
}