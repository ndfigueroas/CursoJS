/*Ejercicio 5: Promedio de Números
Crea un array llamado numeros que contenga al menos 10 números.
Crea una función llamada calcularPromedio que reciba un array de números y
devuelva el promedio de esos números.
Llama a la función calcularPromedio con el array numeros y muestra el
resultado en la consola.*/

let numeros = [5, 8, 12, 20, 7, 15, 3, 10, 25, 18];

function calcularPromedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

let promedio = calcularPromedio(numeros);
console.log("El promedio de los números en el array es: " + promedio);
