/*
2. Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales deben 
estar entre 500€ y 2000€. Escribe un programa que pregunte al usuario su edad y sus ingresos 
mensuales y muestre por pantalla si el usuario es elegible para el subsidio o no. (10p)

*/

let edad = parseInt(prompt("Por favor ingrese sus edad: "));
let ingresos = parseFloat(prompt("Por favor registre su ingreso mensual: "));
let resultado = "";

if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
    resultado = "Eres elegible para el subsidio.";
} else {
    resultado = "No eres elegible para el subsidio.";
}

prompt(resultado);