//GESTIÓN DE UN CARRITO DE COMPRAS

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    detalles() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}`);
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total =0;
        for (const producto of this.productos) {
            total += producto.precio;
            
        }
        return total;
    }
}

// Ejemplo de uso
const producto1 = new Producto('Televisor', 1200);
const producto2 = new Producto('Laptop', 1500);

const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

carrito.productos.forEach(producto => producto.detalles())
console.log(`Total : ${carrito.calcularTotal()}`)


