class Animal {
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("El anima hace un sonido");
    }
}

class Gato extends Animal {
    constructor(nombre,raza){
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(){
        super.hacerSonido();
        console.log("Miau");
    }

    detalles(){
        console.log(`Este es un gato llamdo: ${this.nombre} de raza: ${this.raza}`);
    }
}

const animal =  new Animal("Animal");
const gato = new Gato("Michi","Persa");

animal.hacerSonido();
gato.hacerSonido();
gato.detalles();
