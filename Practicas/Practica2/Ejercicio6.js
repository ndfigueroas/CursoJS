/*Ejercicio 6: Buscar Elemento en Array
Crea un array llamado frutas que contenga varias frutas como cadenas de
texto.
Crea una función llamada buscarFruta que reciba una fruta y un array, y
devuelva true si la fruta está en el array, y false en caso contrario.
Prueba la función buscarFruta con diferentes frutas y muestra los resultados en
la consola.*/

let frutas = ["manzana", "banana", "naranja", "pera", "uva"];

function buscarFruta(fruta, array) {
    return array.includes(fruta);
}

console.log(buscarFruta("manzana", frutas)); // true
console.log(buscarFruta("kiwi", frutas));    // false
console.log(buscarFruta("pera", frutas));    // true
console.log(buscarFruta("mango", frutas));   // false
