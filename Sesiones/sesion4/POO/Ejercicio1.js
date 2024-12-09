/*
Usuario:
Propiedades: nombre, email.
Métodos:
cambiarEmail(nuevoEmail): actualiza el email.
mostrarInfo(): imprime el nombre y email.
Administrador (hereda de Usuario):
Propiedad adicional: privilegios (un arreglo con permisos como "crear", "eliminar", etc.).
Método agregarPrivilegio(privilegio) para añadir un permiso al arreglo.
Instrucciones:

Crea un usuario normal y un administrador.
Muestra la información de ambos y realiza cambios a los privilegios del administrador.
*/

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    cambiarEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    }
}

class Administrador extends Usuario {
    constructor(nombre, email) {
        super(nombre, email);
        this.privilegios = [];
    }

    agregarPrivilegio(privilegio) {
        this.privilegios.push(privilegio);
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Privilegios: ${this.privilegios.join(', ')}`);
    }
}

// Crear un usuario normal
const usuario1 = new Usuario('Juan', 'juan@example.com');
usuario1.mostrarInfo(); // Nombre: Juan, Email: juan@example.com

// Crear un administrador
const admin1 = new Administrador('Ana', 'ana@example.com');
admin1.mostrarInfo(); // Nombre: Ana, Email: ana@example.com, Privilegios: 

// Agregar privilegios al administrador
admin1.agregarPrivilegio('crear');
admin1.agregarPrivilegio('eliminar');
admin1.mostrarInfo(); // Nombre: Ana, Email: ana@example.com, Privilegios: crear, eliminar
