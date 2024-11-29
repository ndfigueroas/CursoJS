/*Ejercicio 8: Contar Caracteres
Crea una función llamada contarCaracteres que reciba una cadena de texto y
un carácter, y devuelva el número de veces que el carácter aparece en la
cadena.
Prueba la función contarCaracteres y muestra el resultado en la consola.*/

function contarCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

let texto = "JavaScript es divertido";
let caracter = "i";
let numeroDeVeces = contarCaracteres(texto, caracter);
console.log("El carácter '" + caracter + "' aparece " + numeroDeVeces + " veces en la cadena.");
