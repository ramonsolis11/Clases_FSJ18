let arreglo = [2,3,4,5,23,19,27];

//some() => true, false (||)

// every() => true, false (&&)

arreglo.every(numero => numero > 15); //false

arreglo.some(numero => numero > 15); //true