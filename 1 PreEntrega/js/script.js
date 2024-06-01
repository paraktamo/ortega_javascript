let opcionUsuario;
let controlador = false;
let ofrecer;
let validez;


function ofrecerCursos() {
    opcionUsuario = prompt('¿Que curso queres aprender? \n Ingles \n Matematicas \n Historia \n Arte \n Presiona ESC para salir')
    console.log(opcionUsuario)
    validarEntrada(opcionUsuario);
    return opcionUsuario
}

function validarEntrada(n) {
    if (n === "ingles" || n === "matematicas" || n === "historia" || n === "arte") {
        validez = true;
        ofrecerMasCursos()
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
    if (validez) {
        controlador = false
    }
    else if (opcionUsuario === "esc") {
        controlador = false;
        alert("Usted ha salido del Sistema");
    }
    else {
        controlador = true;
    }
} while (controlador);

