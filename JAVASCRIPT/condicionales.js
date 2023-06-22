// // estructuras condicionales
// let cadena = prompt("Ingresa un texto");

// //lenght: saber el tamano de una cadena o arreglo
// if (cadena.length > 5) {
//     document.write("Tu mensaje tiene mas de 5 caracteres :)");

// }else{
//     document.write("Tu mensaje no tiene mas de 5 caracteres :(");
// }


// // operador ternario

// // rango de numeros, 50 y 150

// let numero = prompt("Ingresa un numero");
// numero >= 50 && numero <= 150 ? document.write("estas en el rango") :
// document.write("no estas en el rango");

//switch
// forma de pago 
let forma_pago = prompt("Ingresa una forma de pago");
switch (forma_pago.toLocaleLowerCase()) {
    case "bitcoin":
    document.write("vas a pagar por medio de bitcoin")
        
        break;
        case "tarjeta":
            document.write("Pagaras con tarjeta de credito")
        break
        case "efectivo":
            document.write("Vas a pagar en efectivo");
        break;
    default:
        document.write("Ingresa la forma correcta de pago");
        break;
}