// -Crear mini-sistema que nos permita registrar los alumnos que estan prensentes (p) y ausentes(a) em clases
// -Pasados los 30 dias mostrar la situacion final de todos los alumnos
//numero total de ausentes y presentes.
// -se puede tener un maximo de 10% de ausencias por SVGFEComponentTransferElement,
// -si tienes mas clarar que esta reprobado

let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        ___________Prensentes: <br>${alumnosTotales[alumno][1]}</br> <br>
        ___________Ausencias: <br>${30 - alumnosTotales[alumno][1]} </br>`;
        if (30 - alumnosTotales[alumno][1] > 18 ) {
        resultado+= "<b> REPROBADO POR INASISTENCIAS</br><br><br>";
        } else {
        resultado+= "<br><br>"
        }

        document.write(resultado)
}