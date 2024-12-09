/*
Ejercicio 4: Sistema de Vehículos
Crea un sistema que gestione vehículos con estas clases:

Vehiculo:
Propiedades: marca y modelo.
Método detalles() que imprime: "Marca: [marca], Modelo: [modelo]".
Auto (hereda de Vehiculo):
Propiedad adicional numPuertas.
Sobrescribe el método detalles() para incluir el número de puertas.
Moto (hereda de Vehiculo):
Propiedad adicional tipo, que puede ser "deportiva" o "urbana".
Sobrescribe el método detalles() para incluir el tipo de moto.
Instrucciones:

Crea un auto y una moto.
Imprime los detalles de ambos.
*/

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, numPuertas) {
        super(marca, modelo);
        this.numPuertas = numPuertas;
    }

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Número de puertas: ${this.numPuertas}`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo de moto: ${this.tipo}`);
    }
}

// Crear un auto y una moto
const auto1 = new Auto('Toyota', 'Corolla', 4);
const moto1 = new Moto('Yamaha', 'MT-07', 'deportiva');

// Imprimir los detalles de ambos
auto1.detalles(); // Marca: Toyota, Modelo: Corolla, Número de puertas: 4
moto1.detalles(); // Marca: Yamaha, Modelo: MT-07, Tipo de moto: deportiva

