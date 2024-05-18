let curso1 = "ingles";
let curso2 = "matematicas";
let curso3 = "historia";
let curso4 = "arte";

let tarifaIngles = 38000;
let tarifaMatematicas = 25000;
let tarifaHistoria = 75000;
let tarifaArte = 150000;


let opcionUsuario;
let controlador = false;
let ofrecer;
let validez;

//for(contador; )
function ofrecerCursos() {
    opcionUsuario = prompt('¿Que curso queres aprender? \n Ingles \n Matematicas \n Historia \n Arte \n Presiona ESC para salir')
    console.log(opcionUsuario)
    return opcionUsuario
}

function validarEntrada(n) {
    if (n === "ingles" || n === "matematicas" || n === "historia" || n === "arte") {
        validez = true
    }
}

function ofrecerMasCursos() {
    ofrecer = confirm('Seleccionaste: ' + opcionUsuario + '. ¿Queres seleccionar otro curso mas?')
    if (ofrecer) {
        ofrecerCursos()
    }
}


do {
    ofrecerCursos();
    validarEntrada(opcionUsuario);
    if (validez) {
        ofrecerMasCursos()
        controlador = false
    }
    else if (opcionUsuario === "esc" || opcionUsuario === null) {
        controlador = false;
        alert("Usted ha salido del Sistema");
    }
    else {
        controlador = true;
    }
} while (controlador);