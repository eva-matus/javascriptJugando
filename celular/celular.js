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
            alert("el celular ya esta encendido");
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciar celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabandoVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br></br>
        Peso: <b>${this.peso}</b><br></br>
        Resolucion de Pantalla: <b>${this.resolucionDePantalla}</b><br></br>
        Resolucion de Camara:<b>${this.resolucionDeCamara}</b><br></br>
        Memoria Ram: <b>${this.memoriaRam}</b><br></br>
        `;
    }
}

class celularAltaGama {
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color,peso,resolucionDePantalla, rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");

    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
}

celular1 = new celulares("rojo", "150gr", "5'", "full HD", "2GB");
celular2 = new celulares("negro", "200gr", "6", "full Hd", "4GB");
celular3 = new celulares("blanco", "100gr", "6", "full Hd", "6GB");
//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabandoVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);

// -Implementar: ademas el cliente necesita 2 celulares de alta gama
// que pueda hacer lo que los dems celulares anteriores pero con mejor caracteristicas,
//grabar en camara lenta, reconocimiento facial, y una camara extra
// Implementar: todas estas cualidades en los celulares de gama alta

