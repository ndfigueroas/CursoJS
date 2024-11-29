/*Ejercicio 7: Filtrar Elementos
Crea un array llamado palabras que contenga varias palabras.
Crea una función llamada filtrarPalabras que reciba un array y un número, y
devuelva un nuevo array con las palabras que tengan más letras que el número
especificado.
Prueba la función filtrarPalabras y muestra el resultado en la consola.*/

let palabras = ["manzana", "banana", "naranja", "pera", "uva", "kiwi", "sandía", "melón", "fresa", "cereza"];

function filtrarPalabras(array, numero) {
    let palabrasFiltradas = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > numero) {
            palabrasFiltradas.push(array[i]);
        }
    }
    return palabrasFiltradas;
}

let resultado = filtrarPalabras(palabras, 5);
console.log("Las palabras con más de 5 letras son: " + resultado);
