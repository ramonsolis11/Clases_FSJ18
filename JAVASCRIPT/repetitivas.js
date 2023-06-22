/*
* bucles: contador, limitante, incremento/descremento
*
*for, foreach, while, do while, for in, for of
*/ 

// let texto = prompt("Ingresa un texto");

// //i++
// //i = i + i
// for(let i = 0; i < texto.length; i++) {
//     console.log("h")
// }

/* while
El bucle while verifica la condición antes de ejecutar el bloque de código, lo que significa que el bloque puede no ejecutarse en absoluto si la condición es falsa desde el principio. */

//recorrer una cadena
// function iterarCadena(cadena){
//     contador = 0;
//     while(contador < cadena.length){
//         /**
//          * cadena[0] = H
//          * cadena[1] = o
//          * cadena[2] = l
//          * cadena[3] = a
//          */
//         document.write(cadena[contador] + "<br>");
//         contador++;
//     }
// }

// iterarCadena("Hola");

// function contarVocales(arreglo) {
//     let contador2 = 0;

//     let contar_vocales = 0;
//     while(contador2 < arreglo.length) {
//         if(arreglo[contador2] == "a" || arreglo[contador2] == "e" || arreglo
//         [contador2] == "i" || arreglo[contador2] == "o" || arreglo[contador2] == "u") {

//             contar_vocales++; //contar_vocales = contar_vocales + 1
//         }
//         contador2++;
//     }
//     document.write("<br>Tu arreglo tiene " + contar_vocales + "vocales");
// }

// contarVocales(["a", "d", "i", "o", "s"]);



/* do while
El bucle do-while verifica la condición después de ejecutar el bloque de código, lo que garantiza que el bloque se ejecute al menos una vez, incluso si la condición es falsa. */

// function contador(numero){
//     do{
//         document.write("numero: " + numero + "<br>");
//         numero++;
//     }while(numero <= 20)
// }
// contador(5);

// function decremento(mensaje){
//     let contador3 = mensaje.length - 1; //10

//     do{
//         document.write(mensaje[contador3]);
//         contador3--;
//     }while(contador3 >= 0);
// }
// decremento("Hola Mundo");


// FOR OF (JAVASCRIPT) => EVALUA ARREGLOS Y CADENAS DONDE SE SACA SU VALOR








