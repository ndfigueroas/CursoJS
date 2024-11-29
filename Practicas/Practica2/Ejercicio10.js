/*Ejercicio 10: Revertir una Cadena
Crea una función llamada revertirCadena que reciba una cadena de texto y
devuelva la cadena invertida.
Prueba la función revertirCadena y muestra el resultado en la consola.*/

function revertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

let texto = "JavaScript es divertido";
let textoInvertido = revertirCadena(texto);
console.log("La cadena invertida es: " + textoInvertido);
