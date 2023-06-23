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

estudiantes.map(persona =>{
    if(persona.direccion == "San Salvador"){
        document.write("Estudiante: " + persona.nombre + "<br>");
    }
})

// Metodo Filter => sirve para filtrar datos de un arreglo (condicion)
// Filter siempre pide un nuevo arreglo

document.write("<h3>Utilizando Filter</h3>");
let arreglo_filtrado = estudiantes.filter(item => item.direccion == "San Salvador");

arreglo_filtrado.map(student => {
    document.write("Estudiante Filtrado: " + student.nombre + "<br>");
})

document.write("<h3>Filtrando y mapeando</h3>");
estudiantes.filter(item => item.bootcamp == "FSJ18").map(estudiante => {
    document.write("Persona: " + estudiante.nombre + "<br>");
})

/**
 * inlcudes = es un metodo que devuele true
*/

