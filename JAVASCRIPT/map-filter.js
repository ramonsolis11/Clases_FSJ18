/**
 * MAP() => ITERAR ARREGLOS
 * - mapea de manera optimizada
 * - puedo retornar un nuevo arreglo
 * - puedo actualizar el arreglo
 * - visualizar indice y valor
 */

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
]

/**
 * indice => posicion de los elementos
 * valor => los elementos de cada posicion
 * callback => llamado de nuevo al arreglo
 */
estudiantes.map(estudiante => {
    document.write("Estudiante: " + estudiante.nombre + "<br>Bootcamp: " +
    estudiante.bootcamp + "<br>")

    estudiante.direccion = "Chalatenango";
    document.write("Direccion: " + estudiante.direccion + "<br>");
})
console.log(estudiantes); // se modifico el arreglo

document.write("<h3>Nuevo Arreglo</h3>");
let nuevo_arreglo = estudiantes.map(value => {
    value.bootcamp = "FSJ18";
    return value;
})

console.log(nuevo_arreglo);

nuevo_arreglo.map(item => {
    document.write("Estudiante: " + item.nombre + "<br>Bootcamp: " + item.bootcamp + "<br>Direccion: " + item.direccion + "<br>");
})
