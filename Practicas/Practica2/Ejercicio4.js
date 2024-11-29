/*Ejercicio 4: Concatenación de Arrays
Crea dos arrays, array1 y array2, cada uno con 5 números diferentes.
Crea una función llamada concatenarArrays que reciba dos arrays como
argumentos y devuelva un nuevo array que sea la concatenación de los dos.
Llama a la función concatenarArrays con array1 y array2 y muestra el resultado
en la consola.*/


let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

function concatenarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let arrayConcatenado = concatenarArrays(array1, array2);
console.log("El array concatenado es: " + arrayConcatenado);
