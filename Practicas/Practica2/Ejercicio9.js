/*Ejercicio 9: Multiplicar Elementos de un Array
Crea una función llamada multiplicarArray que reciba un array de números y un
número, y devuelva un nuevo array con cada elemento multiplicado por el
número.
Prueba la función multiplicarArray y muestra el resultado en la consola.*/

function multiplicarArray(array, numero) {
    let arrayMultiplicado = [];
    for (let i = 0; i < array.length; i++) {
        arrayMultiplicado.push(array[i] * numero);
    }
    return arrayMultiplicado;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = multiplicarArray(numeros, 2);
console.log("El array multiplicado es: " + resultado);
