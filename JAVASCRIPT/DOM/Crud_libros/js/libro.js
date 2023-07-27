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

        //Actualizando el libro en el arreglo
        objeto_libro.titulo = txtTitulo.value;
        objeto_libro.genero = txtGenero.value;
        objeto_libro.autor = txtAutor.value;
        objeto_libro.fecha = txtFecha.value;
        listaLibros();
        vaciarModal();
        $('#exampleModal').modal('hide');
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
        <td>
        <button class="btn btn-info" onclick="editarLibro('${item.codigo}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
        <button class="btn btn-danger" onclick="eliminarLibro('${item.codigo}')">Eliminar</button>
    </td>
`;

        //agregando la fila al elemento tbody
        tbody.appendChild(fila);
    })
}

//metodo para eliminar un libro
    function limpiarTabla(){
        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }
    }



// Método para editar un libro
function editarLibro(codigo_libro) {
    console.log(codigo_libro);
    // Recorremos el arreglo
    nuevo_libro = false;

    // Encontrar el libro en base a su codigo
    let libro_encontrado = arreglo_libro.find(item => item.codigo === codigo_libro);
    console.log(libro_encontrado);
    txtCodigo.value = libro_encontrado.codigo;
    txtTitulo.value = libro_encontrado.titulo;
    txtGenero.value = libro_encontrado.genero;
    txtAutor.value = libro_encontrado.autor;
    txtFecha.value = libro_encontrado.fecha;
}


// Método para eliminar un libro
function eliminarLibro(codigo_libro) {
    // Encontrar el índice del libro en base a su código
    const index = arreglo_libro.findIndex(item => item.codigo === codigo_libro);

    // Si el libro se encuentra en el arreglo, procedemos a eliminarlo
    if (index !== -1) {
        arreglo_libro.splice(index, 1);
        limpiarTabla(); // Limpiamos la tabla antes de volver a listar los libros
        listaLibros(); // Volvemos a listar los libros actualizados
    }
}


