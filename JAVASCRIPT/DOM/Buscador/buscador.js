let estudiantes = [
    {
        nombre: "Carlos Solis",
        direccion: "San Salvador",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Katerin Angel",
        direccion: "San Miguel",
        bootcamp: "FSJ15"
    },
    {
        nombre: "Abraham Bamaca",
        direccion: "San Vicente",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Roberto Salinas",
        direccion: "San Salvador",
        bootcamp: "FSJ12"
    },
    {
        nombre: "Carolina Huezo",
        direccion: "San Miguel",
        bootcamp: "FSJ15"
    },
];

// Asignación de variables

// Llamando a la etiqueta tbody
let tabla = document.querySelector(".cuerpo-tabla");
//llamando la funcion para que se ejecute
dibujarTabla("");

// Método para capturar el nombre de un estudiante
function buscarEstudiante() {
    let nombre = document.querySelector('#buscador');
    console.log(nombre.value);
    // Llamando la función dibujarTabla para capturar lo que la persona ingrese en el input
    dibujarTabla(nombre.value);
}

// Método para mapear el arreglo y retornar la información en la tabla
function dibujarTabla(nombre_estudiante) {

    //llamamos a la funcion para limpiar la tabla
    tabla.innerHTML = '';

    // Filtrando los datos según el nombre del estudiante
    //toLowerCase() = el texto se convierten en minusculas
    estudiantes.filter(estudiante => estudiante.toLowerCase().includes(nombre_estudiante)).map(item => {
        // Creando el elemento <tr> para las filas de cada objeto del arreglo
        const fila = document.createElement('tr');

        // Creamos las celdas que irán dentro de cada fila con los valores de cada estudiante del arreglo
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.direccion}</td>
            <td>${item.bootcamp}</td>
        `;

        // Insertando la fila en el HTML (dentro del tbody)
        tabla.appendChild(fila);
    });
}

//Metodo para eliminar hijos repetidos (anteriores) del tbody
function limpiarTabla(){
    //removeChild =. se utiliza para remover hijos de un elemento
    while(tabla.firstChild){
        //removiendo el primer hijo de cada iteracion
        tabla.removeChild(tabla.firstChild);
    }
}

