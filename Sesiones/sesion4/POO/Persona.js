class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Carlos", 25);
const persona2 = new Persona("NOé",41);
persona1.saludar(); // Hola, mi nombre es Carlos y tengo 25 años
persona2.saludar();
