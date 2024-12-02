class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Carlos", 25);
persona1.saluda(); // Hola, mi nombre es Carlos y tengo 25 años
