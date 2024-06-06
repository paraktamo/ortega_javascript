// debugger
// /* DOM  -------------------------------------------------*/
// const Cuerpo = document.body;

// const SectionListaPrecios = document.createElement('section');
// cuerpo.appendChild(sectionListaPrecios);
// for (const curso of arrayCursos) {
//     let listaHtml = `ID: ${curso.id} - Nombre: ${curso.nombre} | Precio: $${curso.valor}.-`;
//     const textoH3 = document.createElement('h3');
//     textoH2.innerHTML = listaHtml;
//     sectionListaPrecios.appendChild(textoH3);
// }

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

/* DOM  -------------------------------------------------*/
const cuerpo = document.body;
const sectionBienvenida = document.createElement('section');
const h3Bienvenida = document.createElement('h3');
sectionBienvenida.appendChild(h3Bienvenida);
const sectionListaPrecios = document.createElement('section');
cuerpo.appendChild(sectionListaPrecios);

for (const curso of arrayCursos) {
    let listaCursos = `ID: ${curso.id} - Nombre: ${curso.nombre} | Valor: $${curso.valor}.-`;
    const listaP = document.createElement('p');
    listaP.innerHTML = listaCursos;
    sectionListaPrecios.appendChild(listaP);
    sectionListaPrecios.classList.add('article__home__alumnos')
}

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

// alumno1.agregarCursos(curso1)
// alumno1.agregarCursos(curso4)
// alumno1.agregarCursos(curso5)
// console.log(alumno1)
// console.log(alumno1.curso)

/* Menu -------------------------------------------------*/
let bienvenida = parseInt(prompt("Te damos la bienvenida al portal de Casa del Sur, por favor ingresa tu n° de alumna/o"));


function mostrarAlumno(a) {
    let mensaje = parseInt(prompt("Mis datos: \nCodigo: " + a.id + "\nNombre " + a.nombre + "\nApellido " + a.apellido + "\nPara volver al menu anterior, presiona 0"));
    if (mensaje === 0) {
        mostrarMenu(a)
    } else {
        let advertencia = alert("Tu entrada no es válida");
        mostrarAlumno(a)
    }
    // agregar opcion para volver
}

function reducirCupo(e) {
    e.cupo = e.cupo - 1;
}
function aumentarCupo(e) {
    e.cupo = e.cupo + 1;
}

function mostrarCursos(a) {
    let cursosA = "Los cursos disponibles son:\n"
    arrayCursos.forEach(curso => {
        cursosA += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
    });
    cursosA += "\nIngresa 0 para volver al menú anterior.";
    let cursoPrompt = prompt(cursosA);
    if (cursoPrompt == 0) {
        mostrarMenu(a)
    } else {
        let advertencia = alert("Tu entrada no es válida");
        mostrarCursos(a)
    }
}

function tomarCursos(a) {
    const arrayCursosAlumno = a.curso.map(c => c.id)
    const arrayCursosDisponibles = arrayCursos.filter(curso => !arrayCursosAlumno.includes(curso.id));
    let cursosB = "Los cursos disponibles son:\n"
    arrayCursosDisponibles.forEach(curso => {
        cursosB += `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;
    });
    cursosB += "\nIngresa el codigo del curso que quieras tomar.\nIngresa 0 para volver al menú anterior.";
    let cursoPrompt = parseInt(prompt(cursosB));
    const cursoDisponible = arrayCursosDisponibles.find((d) => d.id === cursoPrompt)
    if (cursoPrompt === 0) {
        mostrarMenu(a)
    } else if (cursoDisponible) {
        a.agregarCursos(cursoDisponible);
        reducirCupo(cursoDisponible)
        alert("Curso de " + cursoDisponible.nombre + " agregado con exito");
        mostrarMenu(a)
    } else {
        alert("Tu entrada no es válida");
        tomarCursos(a);
    }
}

function sacarCursos(a) {
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

function mostrarMenu(a) {
    let menu = parseInt(prompt("Elige una opcion \n1. Ver mis datos\n2. Ver oferta de cursos\n3. Agregar curso a mi carrito \n4. Eliminar curso de mi carrito\n5. Ver mi carrito"));

    switch (menu) {
        case 1:
            mostrarAlumno(a)
            break;
        case 2:
            mostrarCursos(a)
            break;
        case 3:
            tomarCursos(a)
            break;
        case 4:
            sacarCursos(a)
            break;
        case 5:
            verCarrito(a)
            break;
        default:
            mostrarMenu(a)
    }
}

function corroborarAlumno(m) {
    const alumnoExiste = arrayAlumnos.some(alumno => alumno.id === m);
    if (alumnoExiste) {
        mostrarMenu(arrayAlumnos.find(alumno => alumno.id === m))
    } else {
        let menuAgain = parseInt(prompt("No ingresaste un id válido, vuelve a intentarlo"));
        corroborarAlumno(menuAgain)
    }
}

corroborarAlumno(bienvenida);

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
