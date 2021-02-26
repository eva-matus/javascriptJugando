class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info =  `Soy un ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
}

let perro = new Perro("perro", 5, "cafe", "pitbull");
let gato = new Animal("gato", 3, "blanco");
let pajaro = new Animal("pajaro", 2, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();