class Animal{

    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log("Guau")
    }
}

const animal = new Animal("Animal Doméstico");
const perro = new Perro("Max")
animal.hacerSonido();
perro.hacerSonido();