// Juana necesita comprar un celular, pero no sabe por cual de tres
// modelos escoger.
// - Crear un sistema para mostrarle a Juana las particularidades de los 3 celulares. 
// - Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria
// - Cada Celular debe poder prender, reiniciar, apagar, tomar fotos y grabar

class celulares {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular apagado");
            this.encendido = true;
        } else {
            alert("el celular ya esta encendido")
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciar celular");
        } else {
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabandoVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
}

celular1 = new celulares("rojo", "150gr", "5'", "full HD", "2GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabandoVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();