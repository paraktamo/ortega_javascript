// let opcionUsuario;
// let controlador = false;
// let ofrecer;
// let validez;


// function ofrecerCursos() {
//     opcionUsuario = prompt('¿Que curso queres aprender? \n Ingles \n Matematicas \n Historia \n Arte \n Presiona ESC para salir')
//     console.log(opcionUsuario)
//     validarEntrada(opcionUsuario);
//     return opcionUsuario
// }

// function validarEntrada(n) {
//     if (n === "ingles" || n === "matematicas" || n === "historia" || n === "arte") {
//         validez = true;
//         ofrecerMasCursos()
//     }
// }

// function ofrecerMasCursos() {
//     ofrecer = confirm('Seleccionaste: ' + opcionUsuario + '. ¿Queres seleccionar otro curso mas?')
//     if (ofrecer) {
//         ofrecerCursos()
//     }
// }


// do {
//     ofrecerCursos();
//     if (validez) {
//         controlador = false
//     }
//     else if (opcionUsuario === "esc") {
//         controlador = false;
//         alert("Usted ha salido del Sistema");
//     }
//     else {
//         controlador = true;
//     }
// } while (controlador);

class claseCursos{
    constructor(nombre, valor, cupo, virtual) {
        this.nombre = nombre;
        this.valor   = valor;
        this.cupo  = cupo;
        this.virtual = virtual;
    }
}
const curso1 = new claseCursos("arte", 75000, 20, false);
const curso2 = new claseCursos("historia", 65000, 10, false);
const curso3 = new claseCursos("ingles", 15000, 8, true);
const curso4 = new claseCursos("matematicas", 60000, 5, false);
const curso5 = new claseCursos("ciencias", 65000, 10, true);

const arrayCursos = [curso1, curso2, curso3, curso4, curso5];

