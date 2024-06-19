// debugger

let bienvenida;

// DOM de inicio
document.addEventListener("DOMContentLoaded", function () {
    const contenedorB = document.getElementById('contenedorB'); // selecciono el contenedor

    const divB = document.createElement('div'); //creo una section que albergue el input
    divB.id = 'divB'; // le asigno una nueva id

    const mensajeB = document.createElement('h3'); // creo un h3 ára albergar el mensaje
    mensajeB.innerText = 'Te damos la bienvenida al portal de Casa del Sur, por favor ingresa tu n° de alumna/o'; // edito el contenido del h3

    const InputB = document.createElement('input'); // creo el inout de mi mensaje de bienvenida
    InputB.type = 'number'; // edito el tipo de input
    InputB.id = 'bienvenida-input'; // le otorgo una nueva id

    const botonB = document.createElement('button'); // creo el boton 
    botonB.innerText = 'Ingresar'; // edito el texto del boton
    botonB.addEventListener('click', function () { // funcion para tomar el valor cuando apreten el boton
        bienvenida = parseInt(document.getElementById('bienvenida-input').value); //selecciono el valor ingresado en el input por su id y lo guardo en bienvenida
        corroborarAlumno(bienvenida); // llamo a la funcion
    });

    // agrego todos los elementos segun su jeraquia
    divB.appendChild(mensajeB);
    divB.appendChild(InputB);
    divB.appendChild(botonB);
    contenedorB.appendChild(divB);
});

/* Cursos  -------------------------------------------------*/
class claseCursos {
    constructor(id, nombre, valor, cupo, virtual) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cupo = cupo;
        this.virtual = virtual;
    }
}
const curso1 = new claseCursos(1, "arte", 75000, 20, false);
const curso2 = new claseCursos(2, "historia", 65000, 10, false);
const curso3 = new claseCursos(3, "ingles", 15000, 8, true);
const curso4 = new claseCursos(4, "matematicas", 60000, 5, false);
const curso5 = new claseCursos(5, "ciencias", 65000, 10, true);

const arrayCursos = [curso1, curso2, curso3, curso4, curso5];

/* Alumnos -------------------------------------------------*/
class claseAlumnos {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = [];
    }
    agregarCursos(curso) {

        this.curso.push(curso);

    }
    quitarCursos(idCurso) { // debe recibir el id del curso
        const index = this.curso.findIndex(curso => curso.id === idCurso);
        if (index !== -1) {
            this.curso.splice(index, 1);
        } else {
            console.log(`Curso con ID ${idCurso} no encontrado.`);
        }
    }
}
const alumno1 = new claseAlumnos(1001, "marina", "caceres");
const alumno2 = new claseAlumnos(1002, "pedro", "perez");
const alumno3 = new claseAlumnos(1003, "maria", "lopez");
const alumno4 = new claseAlumnos(1004, "justina", "estrada");
const alumno5 = new claseAlumnos(1005, "gerarda", "levi");
const alumno6 = new claseAlumnos(1006, "sasha", "suarez");
const alumno7 = new claseAlumnos(1007, "nicolas", "moyano");
const alumno8 = new claseAlumnos(1008, "killa", "aracuyu");

const arrayAlumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8];

/* Menu -------------------------------------------------*/
const contenedorContenido = document.getElementById('contenido');
function mostrarAlumno(a) {
    contenedorContenido.innerHTML = '';

    const divMostrarAlum = document.createElement('div');
    divMostrarAlum.id = 'divMostrarAlum';

    const mostrarH4 = document.createElement('h4');
    mostrarH4.id = 'mostrarH4';
    mostrarH4.innerText = 'Mi Perfil';

    const mostrarP = document.createElement('p');
    mostrarP.id = 'mostrarP';
    mostrarP.innerText = `Código: ${a.id} \nNombre: ${a.nombre} \nApellido: ${a.apellido}`;


    contenedorContenido.appendChild(divMostrarAlum);
    divMostrarAlum.appendChild(mostrarH4);
    divMostrarAlum.appendChild(mostrarP);
}

function reducirCupo(e) {
    e.cupo = e.cupo - 1;
}
function aumentarCupo(e) {
    e.cupo = e.cupo + 1;
}

function mostrarCursos(a) {
    contenedorContenido.innerHTML = '';

    const divMostrarCursos = document.createElement('div');
    divMostrarCursos.id = 'divMostrarCursos';
    const mostrarH4 = document.createElement('h4');
    mostrarH4.id = 'mostrarH4';
    mostrarH4.innerText = 'Nuestros Cursos';
    const mostrarDiv = document.createElement('div');
    mostrarDiv.id = 'mostrardiv';

    arrayCursos.forEach(curso => {
        let cursoDiv = document.createElement('div');
        cursoDiv.innerHTML += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
        mostrarDiv.appendChild(cursoDiv);
        //cursosA += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
    });

    contenedorContenido.appendChild(divMostrarCursos);
    divMostrarCursos.appendChild(mostrarH4);
    divMostrarCursos.appendChild(mostrarDiv);
}

function tomarCursos(a) {
    contenedorContenido.innerHTML = '';

    const tomarH4 = document.createElement('h4');
    tomarH4.id = 'tomarH4';
    tomarH4.innerText = 'Cursos Disponibles';

    const divTomarCursos = document.createElement('div');
    divTomarCursos.id = 'divTomarCursos';

    const arrayCursosAlumno = a.curso.map(c => c.id)
    const arrayCursosDisponibles = arrayCursos.filter(curso => !arrayCursosAlumno.includes(curso.id));

    arrayCursosDisponibles.forEach(curso=>{
        let cursoDiv = document.createElement('div');
        cursoDiv.innerHTML += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
        divTomarCursos.appendChild(cursoDiv);
    })

    contenedorContenido.appendChild(tomarH4);
    contenedorContenido.appendChild(divTomarCursos);
    
    
    // let cursosB = "Los cursos disponibles son:\n"
    // arrayCursosDisponibles.forEach(curso => {
    //     cursosB += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
    // });
    // cursosB += "\nIngresa el codigo del curso que quieras tomar.\nIngresa 0 para volver al menú anterior.";
    // let cursoPrompt = parseInt(prompt(cursosB));
    // const cursoDisponible = arrayCursosDisponibles.find((d) => d.id === cursoPrompt)
    // if (cursoPrompt === 0) {
    //     mostrarMenu(a)
    // } else if (cursoDisponible) {
    //     a.agregarCursos(cursoDisponible);
    //     reducirCupo(cursoDisponible)
    //     alert("Curso de " + cursoDisponible.nombre + " agregado con exito");
    //     mostrarMenu(a)
    // } else {
    //     alert("Tu entrada no es válida");
    //     tomarCursos(a);
    // }
}

function sacarCursos(a) {
    contenedorContenido.innerHTML = '';

    const arrayCursosAlumno = a.curso.map(c => c.id)
    if (arrayCursosAlumno.length !== 0) {
        const arrayCursosDisponibles = arrayCursos.filter(curso => arrayCursosAlumno.includes(curso.id));
        let cursosC = "Tus cursos son:\n"
        arrayCursosDisponibles.forEach(curso => {
            cursosC += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
        });
        cursosC += "\nIngresa el codigo del curso que quieras sacar de tu carrito.\nIngresa 0 para volver al menú anterior.";
        let cursoPrompt = parseInt(prompt(cursosC));
        if (cursoPrompt === 0) {
            mostrarMenu(a)
        } else if (arrayCursosDisponibles.find((e) => e.id === cursoPrompt)) {
            let confirmar = confirm("¿Estas segura/o de eliminar el curso de " + arrayCursosDisponibles.find((e) => e.id === cursoPrompt).nombre + " de tu carrito?")
            if (confirmar) {
                a.quitarCursos(cursoPrompt);
                aumentarCupo(arrayCursosDisponibles.find((e) => e.id === cursoPrompt));
                alert("Curso de " + arrayCursosDisponibles.find((e) => e.id === cursoPrompt).nombre + " quitado con exito");
                // console.log(a.curso)
                mostrarMenu(a)
            } else {
                sacarCursos(a);
            }
        } else {
            alert("Tu entrada no es válida");
            sacarCursos(a);
        }
    } else {
        alert("No tenes cursos en tu carrito");
        mostrarMenu(a);
    }
}

function verCarrito(a) {
    contenedorContenido.innerHTML = '';

    const arrayCursosAlumno = a.curso.map(c => c.valor);
    if (arrayCursosAlumno.length !== 0) {
        const arrayCursosDisponibles = arrayCursos.filter(curso => arrayCursosAlumno.includes(curso.valor));
        const total = arrayCursosAlumno.reduce((acumulador, elemento) => acumulador + elemento, 0);
        let mostrarCarro = "Tu carrito: \n"
        arrayCursosDisponibles.forEach(curso => {
            mostrarCarro += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} \n`;
        });
        mostrarCarro += `Total: $${total}\nIngresa 0 para volver al menú anterior.\n`
        let mostrarCarroPrompt = parseInt(prompt(mostrarCarro));
        if (mostrarCarroPrompt === 0) {
            mostrarMenu(a)
        } else {
            alert("Tu entrada no es válida");
            verCarrito(a);
        }
    } else {
        alert("No tenes cursos en tu carrito");
        mostrarMenu(a);
    }
}

function inicializarBotones(a) {
    let contenedorMenu = document.getElementById("contenedorMenu");
    let menu = document.createElement("h5");
    menu.innerHTML = "Menu";

    if (!contenedorMenu || contenedorMenu.children.length > 0) return;

    let verPerfilBoton = document.createElement("button");
    verPerfilBoton.innerText = "Ver perfil";
    verPerfilBoton.id = "verPerfilBoton";
    verPerfilBoton.addEventListener("click", respuestaClick1)
    function respuestaClick1() {
        mostrarAlumno(a)
    }

    let verOfertaBoton = document.createElement("button");
    verOfertaBoton.innerText = "Ver oferta de cursos";
    verOfertaBoton.id = "verOfertaBoton";
    verOfertaBoton.addEventListener("click", respuestaClick2)
    function respuestaClick2() {
        mostrarCursos(a)
    }

    let agregarCursoBoton = document.createElement("button");
    agregarCursoBoton.innerText = "Agregar curso a mi carrito";
    agregarCursoBoton.id = "agregarCursoBoton";
    agregarCursoBoton.addEventListener("click", respuestaClick3)
    function respuestaClick3() {
        tomarCursos(a)
    }

    let sacarCursoBoton = document.createElement("button");
    sacarCursoBoton.innerText = "Sacar curso de mi carrito";
    sacarCursoBoton.id = "sacarCursoBoton";
    sacarCursoBoton.addEventListener("click", respuestaClick4)
    function respuestaClick4() {
        sacarCursos(a)
    }

    let verCarritoBoton = document.createElement("button");
    verCarritoBoton.innerText = "Ver carrito";
    verCarritoBoton.id = "verCarritoBoton";
    verCarritoBoton.addEventListener("click", respuestaClick5)
    function respuestaClick5() {
        verCarrito(a)
    }

    contenedorMenu.appendChild(menu);
    contenedorMenu.appendChild(verPerfilBoton);
    contenedorMenu.appendChild(verOfertaBoton);
    contenedorMenu.appendChild(agregarCursoBoton);
    contenedorMenu.appendChild(sacarCursoBoton);
    contenedorMenu.appendChild(verCarritoBoton);
    

    // Agregar listeners a los botones si es necesario
}


function mostrarMenu(a) {

    inicializarBotones(a); // podria puentear esta funcion pero la voy a dejar para seguir probando la app
}

function corroborarAlumno(m) {
    const alumnoExiste = arrayAlumnos.some(alumno => alumno.id === m);
    if (alumnoExiste) {
        const alumno = arrayAlumnos.find(alumno => alumno.id === m);

        const divB = document.getElementById('divB');
        if (divB) {
            divB.remove();
        }

        const contenedorB = document.getElementById('contenedorB');
        const saludoAlumno = document.createElement('h3');
        saludoAlumno.id = 'saludoAlumno';
        saludoAlumno.innerText = `Hola, ${alumno.nombre}! Bienvenido/a al portal de Casa del Sur`;
        contenedorB.appendChild(saludoAlumno);

        mostrarMenu(alumno);
    } else {
        let pErrorYaExiste = document.getElementById("perrorBienvenida");
        if (pErrorYaExiste) {
            pErrorYaExiste.remove();
        }
        let contenedorError = document.getElementById("error");
        let pError = document.createElement("p");
        pError.id = "perrorBienvenida";
        pError.innerText = "No ingresaste un id válido, vuelve a intentarlo";
        contenedorError.appendChild(pError);
    }
}

/* eliminar un curso ------------------------------------------------- */

function buscarCursoPorID(alumno, cursoID) { // recibo el objeto del alumno y el id del curso
    const cursoExiste = alumno.curso.some(curso => curso.id === cursoID);
    if (cursoExiste) {
        alumno.quitarCursos(cursoID);
        console.log("Curso con ID " + cursoID + " eliminado de los cursos del alumno " + alumno.nombre);
    } else {
        console.log("El curso no se encuentra dentro de los cursos del alumno.");
    }
}

function buscarAlumnoPorId(alumnoID, cursoID) {
    const alumnoExiste = arrayAlumnos.some(alumno => alumno.id === alumnoID);
    if (alumnoExiste) {
        const alumnoObjLocalizado = arrayAlumnos.find(alumno => alumno.id === alumnoID);
        buscarCursoPorID(alumnoObjLocalizado, cursoID);
    } else {
        console.log("El alumno con ID " + alumnoID + " no existe.");
    }
}
