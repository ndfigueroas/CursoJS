/*
3. Los tramos del IVA en un país son los siguientes:

Básico: 10%
Reducido: 5%
Superreducido: 2%

Escribe un programa que pregunte al usuario el importe de una compra y el tipo de IVA aplicado
(básico, reducido, superreducido) y muestre por pantalla el total con IVA incluido. (10p)
*/

let importe = parseFloat(prompt("Por favor ingrese el importe de la compra: "));

// Mostrar opciones del IVA
let option = parseInt(prompt(
    "\n--- Opciones de IVA ---\n" +
    "1. Básico 10%\n" +
    "2. Reducido 5%\n" +
    "3. Superreducido 2%\n" +
    "Selecciona un IVA: "
));

let total = 0;
let iva = "";
let montoIva = 0;
switch (option) {
    case 1:
        montoIva = importe * 0.10;
        total =  importe + montoIva;
        iva = "10%";
        break;
    case 2:
        montoIva = importe * 0.05;
        total = importe + montoIva;
        iva = "5%";
        break;
    case 3:
        montoIva = importe * 0.02;
        total = importe + montoIva
        iva = "2%";
        break;
    default:
        alert("Opción no válida");
        break;
}

let resultado = "";
resultado += "Importe de compra: " + importe.toFixed(2) + " $\n";
resultado += "IVA aplicado: " + iva + " = " + montoIva + "\n";
resultado += "Total con IVA incluido: " + total.toFixed(2) + " $\n";

alert(resultado);
