/* 1. Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros. 
Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura) 
y muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad). 
(10 p)
*/

let peso = parseFloat(prompt("Ingrese su peso en Kilos: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = peso / (altura * altura);
let categoria;

if (imc < 18.5) {
    categoria = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}

prompt(categoria)

  