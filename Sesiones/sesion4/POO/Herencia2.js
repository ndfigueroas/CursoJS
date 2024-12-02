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
        console.log
    }
}