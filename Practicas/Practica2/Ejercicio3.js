/*Ejercicio 3: Bucle y Condicionales
Crea una función llamada contarVocales que reciba una cadena de texto y
devuelva el número de vocales que contiene.
Utiliza un bucle for para iterar sobre cada carácter de la cadena y un
condicional para verificar si el carácter es una vocal (a, e, i, o, u).
Prueba la función contarVocales con la cadena "JavaScript es divertido" y
muestra el resultado en la consola.*/

function contarVocales(cadena) {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}


let texto = "JavaScript es divertido";
let numeroDeVocales = contarVocales(texto);
console.log("El número de vocales en la cadena es: " + numeroDeVocales);
