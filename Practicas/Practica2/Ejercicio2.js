/*Ejercicio 2: Métodos y Condicionales
Crea una función llamada esPar que reciba un número como argumento y
devuelva true si el número es par, y false si es impar.
Crea una función llamada filtrarPares que reciba un array de números y
devuelva un nuevo array solo con los números pares.
Usa la función filtrarPares para filtrar los números pares del array numeros y
muestra el nuevo array en la consola.*/


function esPar(numero) {
    return numero % 2 === 0;
}

function filtrarPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            pares.push(array[i]);
        }
    }
    return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarPares(numeros);
console.log("Los números pares del array son: " + numerosPares);
