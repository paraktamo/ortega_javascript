let curso1;
let curso2;
let curso3;
let curso4;

let tarifaIngles = 38000;
let tarifaMatematicas = 25000;
let tarifaHistoria = 75000;
let tarifaArte = 150000;


let opcionUsuario;
let controlador = false;
let ofrecer;
let validez;
let contador;


function ofrecerCursos() {
    opcionUsuario = prompt('¿Que curso queres aprender? \n Ingles \n Matematicas \n Historia \n Arte \n Presiona ESC para salir')
    console.log(opcionUsuario)
    return opcionUsuario
}

function validarEntrada(n) {
    if (n === "ingles" || n === "matematicas" || n === "historia" || n === "arte") {
        validez = true;
        hacerLaCuenta(n);
    }
}

function ofrecerMasCursos() {
    ofrecer = confirm('Seleccionaste: ' + opcionUsuario + '. ¿Queres seleccionar otro curso mas?')
    if (ofrecer) {
        // aca hay que ver como sumar el curso al primero y volver a llamarse cuando se seleccione
    }
    else {
        //hacer la cuenta
    }
}

function hacerLaCuenta(m) {
    switch (m) {
        case "ingles":
contador + tarifaIngles
            return tarifaIngles;
        case "matematicas":
            return tarifaMatematicas;
        case "historia":
            return tarifaHistoria;
        case "arte":
            return tarifaArte;
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

