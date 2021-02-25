class animal {
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

let perro = new animal("perro", 5, "cafe");
let gato = new animal("gato", 3, "blanco");
let pajaro = new animal("pajaro", 2, "verde");


//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>")
//document.write(pajaro.info + "<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();