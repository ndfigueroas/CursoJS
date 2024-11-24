/*
4 Escribe un programa que pregunte al usuario el total de su compra y si tiene un código de descuento. 
Si el código es "DESCUENTO10", se aplicará un 10% de descuento. Si el código es "DESCUENTO20", 
se aplicará un 20% de descuento. Muestra el total después de aplicar el descuento, si corresponde,
 y un mensaje si el código no es válido. (10p)
*/

let totalCompra = parseFloat(prompt("Por favor ingrese el total de su compra: "));

// Mostrar opciones del descuento
let option = parseInt(prompt(
    "\n--- Códigos de descuento ---\n" +
    "1. DESCUENTO10\n" +
    "2. DESCUENTO20\n" +
    "Selecciona un código de descuento: "
));

let descuento = 0;
let siDescuento = true;
let codigoDescuento = "";

switch (option) {
    case 1:
        descuento = totalCompra * 0.10;
        codigoDescuento = "DESCUENTO10";
        break;
    case 2:
        descuento = totalCompra * 0.20;
        codigoDescuento = "DESCUENTO20";
        break;
    default:
        siDescuento = false;
        break;
}

let totalConDescuento = totalCompra - descuento;
let resultado = "";

resultado += "Total de compra: " + totalCompra.toFixed(2) + " $\n";
resultado += "Código de descuento aplicado: " + codigoDescuento + "\n";
resultado += "Descuento aplicado: " + descuento.toFixed(2) + " $\n";
resultado += "Total con descuento: " + totalConDescuento.toFixed(2) + " $\n";

if (siDescuento) {
    alert(resultado);
} else {
    alert("Código de descuento no válido. No se aplicará descuento \n" + resultado);
}


