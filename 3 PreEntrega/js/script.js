// debugger

let bienvenida;

// DOM de inicio
document.addEventListener("DOMContentLoaded", function () {

    let usuario;
    let usuarioEnLS = JSON.parse(localStorage.getItem('usuario'))

    if (usuarioEnLS) {
        usuario = usuarioEnLS
        inicializarBotones(usuario)
    } else {
        inicializar()
    }

    function inicializar() {
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
    }
});
// local de inicio
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, JSON.stringify(valor)) };
const guardarSession = (clave, valor) => { sessionStorage.setItem(clave, JSON.stringify(valor)) };

// guardarLocal("listaProductos", JSON.stringify(productos)); ||||| para almacenar un array completo
// guardarSession("carrito", JSON.stringify(carrito)); ||||| para almacenar un array completo


// function guardarCarritoEnLocalStorage() {
//     localStorage.setItem('carrito', JSON.stringify(carrito));
// }

// function tomarCarritoDeLocalStorage() {
//     const carritoGuardado = localStorage.getItem('carrito');
//     return carritoGuardado ? JSON.parse(carritoGuardado) : [];
// }

// function agregarCursoAlCarrito(curso) {
//     // Agregar curso al carrito (supongamos que `carrito` es un array global)
//     carrito.push(curso);

//     // Guardar el carrito actualizado en localStorage
//     guardarCarritoEnLocalStorage();

//     // Otros pasos necesarios después de agregar un curso al carrito, si los hay
//     // Por ejemplo, actualizar la interfaz de usuario
// }

// let carritoEnStorage = tomarCarritoEnLocalStorage()

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
        reducirCupo(curso);

    }
    quitarCursos(idCurso) { // debe recibir el id del curso
        const index = this.curso.findIndex(curso => curso.id === idCurso);
        if (index !== -1) {
            const cursoEliminado = this.curso[index];
            this.curso.splice(index, 1);
            aumentarCupo(cursoEliminado)
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


    if (arrayCursosDisponibles.length === 0) {
        let vacioP = document.createElement('p');
        vacioP.id = 'mensajeVacio';
        vacioP.innerText = 'No hay cursos disponibles para agregar';
        divTomarCursos.appendChild(vacioP);
    } else {
        arrayCursosDisponibles.forEach(curso => {
            let cursoDiv = document.createElement('div');
            cursoDiv.innerHTML = `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;

            let botonTomar = document.createElement('button');
            botonTomar.innerText = 'Agregar';
            botonTomar.addEventListener('click', () => {
                a.agregarCursos(curso);
                tomarCursos(a);
                sacarCursos(a);
                alert("Curso de " + curso.nombre + " agregado con exito");
            });

            cursoDiv.appendChild(botonTomar);
            divTomarCursos.appendChild(cursoDiv);
        });
    }
    contenedorContenido.appendChild(tomarH4);
    contenedorContenido.appendChild(divTomarCursos);
}

function sacarCursos(a) {
    contenedorContenido.innerHTML = '';

    const sacarH4 = document.createElement('h4');
    sacarH4.id = 'sacarH4';
    sacarH4.innerText = 'Cursos Agregados';

    const divSacarCursos = document.createElement('div');
    divSacarCursos.id = 'divSacarCursos';

    const cursosAgregados = a.curso;

    if (cursosAgregados.length !== 0) {
        cursosAgregados.forEach(curso => {
            let cursoDiv = document.createElement('div');
            cursoDiv.innerHTML = `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} - Cupo: ${curso.cupo} \n`;

            let botonQuitar = document.createElement('button');
            botonQuitar.innerText = 'Remover';
            botonQuitar.addEventListener('click', () => {
                a.quitarCursos(curso.id);
                tomarCursos(a);
                sacarCursos(a);
                alert("Curso de " + curso.nombre + " removido con exito");
            });

            cursoDiv.appendChild(botonQuitar);
            divSacarCursos.appendChild(cursoDiv);
        });
    } else {
        let vacioP = document.createElement('p');
        vacioP.id = 'mensajeVacio';
        vacioP.innerText = 'No hay cursos disponibles para quitar';
        divSacarCursos.appendChild(vacioP);
    }
    contenedorContenido.appendChild(sacarH4);
    contenedorContenido.appendChild(divSacarCursos);
}


function verCarrito(a) {
    contenedorContenido.innerHTML = '';

    const verH4 = document.createElement('h4');
    verH4.id = 'verH4';
    verH4.innerText = 'Mi Carrito';

    const divVerCarrito = document.createElement('div');
    divVerCarrito.id = 'divVerCarrito';

    const cursosAgregados = a.curso;

    if (cursosAgregados.length !== 0) {
        const total = cursosAgregados.reduce((acumulador, curso) => acumulador + curso.valor, 0);

        cursosAgregados.forEach(curso => {
            const mensajeCarro = document.createElement('div');
            mensajeCarro.innerHTML = `Codigo: ${curso.id}. ${curso.nombre} - $${curso.valor} \n`;
            divVerCarrito.appendChild(mensajeCarro);
        });

        const divTotalCarrito = document.createElement('div');
        divTotalCarrito.id = 'divTotalCarrito';
        divTotalCarrito.innerText = `Total: $${total}`;
        divVerCarrito.appendChild(divTotalCarrito);
    } else {
        let vacioP = document.createElement('p');
        vacioP.id = 'mensajeVacio';
        vacioP.innerText = 'Carrito Vacío';
        divVerCarrito.appendChild(vacioP);
    }

    contenedorContenido.appendChild(verH4);
    contenedorContenido.appendChild(divVerCarrito);

}

function cerrarSesion() {
    localStorage.clear();
    window.location.reload();
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

    let salirBoton = document.createElement("button");
    salirBoton.innerText = "Cerrar Sesión";
    salirBoton.id = "salirBoton";
    salirBoton.addEventListener("click", respuestaClick6)
    function respuestaClick6() {
        cerrarSesion(a)
    }

    contenedorMenu.appendChild(menu);
    contenedorMenu.appendChild(verPerfilBoton);
    contenedorMenu.appendChild(verOfertaBoton);
    contenedorMenu.appendChild(agregarCursoBoton);
    contenedorMenu.appendChild(sacarCursoBoton);
    contenedorMenu.appendChild(verCarritoBoton);
    contenedorMenu.appendChild(salirBoton);


    // Agregar listeners a los botones si es necesario
}


function mostrarMenu(a) {

    inicializarBotones(a); // podria puentear esta funcion pero la voy a dejar para seguir probando la app
}

function corroborarAlumno(m) {
    const alumnoExiste = arrayAlumnos.some(alumno => alumno.id === m);
    if (alumnoExiste) {
        const alumno = arrayAlumnos.find(alumno => alumno.id === m);
        guardarLocal("usuario", alumno);

        let divB = document.getElementById('divB');
        if (divB) {
            divB.remove();
        }
        let pErrorYaExiste = document.getElementById("perrorBienvenida");
        if (pErrorYaExiste) {
            pErrorYaExiste.remove();
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

/* funciones viejas ------------------------------------------------- */

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
