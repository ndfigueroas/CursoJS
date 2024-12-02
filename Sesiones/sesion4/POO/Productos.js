class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDatos() {
        console.log(`Producto: ${this.nombre} y el precio es: ${this.precio}`);
    }
}

// Ejemplo de uso
const producto1 = new Producto('Laptop', 1500);
producto1.mostrarDatos(); // Producto: Laptop y el precio es: 1500
