/* 1) addeventlistener()
El método permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.


Ejemplo: */
let boton1 = document.getElementById("btnPrincipal1") // captura el elemento por su id

boton1.addEventListener("click", respuestaClick) // escucha el evento

function respuestaClick() { // la función de respuesta
    console.log("Respuesta evento"); // imprime en consola
}

// ________________________________________________________________________________________________________________ //
/*  2) onClick

Emplear una propiedad del nodo para definir la respuesta al evento:

Las propiedades se identifican con el nombre del evento y el prefijo on.

También es posible emplear funciones anónimas para definir los manejadores de eventos.


Ejemplo: */
let boton2 = document.getElementById("btnPrincipal2") // captura el elemento por su id

boton2.onclick = () => { console.log("Respuesta 2") } // escucha el evento y la función de respuesta es la misma

// ________________________________________________________________________________________________________________ //

/* 3) Sintaxis:
Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML.

La denominación del atributo es idéntica al de la propiedad de la opción 2 (prefijo on). 

La función puede declararse entre la comillas o bien tomarse una referencia existen en el script.


Ejemplo: 

html --> <input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />           */

// ________________________________________________________________________________________________________________ //

/* Eventos del mouse

- mousedown/mouseup: Se oprime/suelta el botón del ratón sobre un elemento.
- mouseover/mouseout:  El puntero del mouse se mueve sobre/sale del elemento.
- mousemove: El movimiento del mouse sobre el elemento activa el evento.
- click: Se activa después de mousedown o mouseup sobre un elemento válido.

*/

let boton = document.getElementById("btnMain") // captura el elemento por su id

boton.onclick = () => { console.log("Click") } // escucha el evento: click

boton.onmousemove = () => { console.log("Move") } // escucha el evento: se mueve el mouse sobre el elemento

// _______________________________________________________________________________________________________________ //

/* Eventos del teclado:

- keydown: Se presiona una tecla.
- keyup: Se suelta una tecla.                                                                           */

let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => { console.log("keyUp") } // escucha el evento: se suelta una tecla
input2.onkeydown = () => { console.log("keyDown") } // escucha el evento: se presiona una tecla

/* Eventos de teclado:

------ change: Se activa cuando se detecta un cambio en el valor del elemento. 
Por ejemplo, mientras se escribe en un input de tipo texto no hay evento
change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.                         */

let input3 = document.getElementsByClassName("input3")[0];
let input4 = document.getElementsByClassName("input4")[0];
input3.onchange = () => { console.log("valor1") }; // 
input4.onchange = () => { console.log("valor2") }; //

/*
------ input: Se cambia el valor de un elemento. Si queremos ejecutar una función
cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.                */

let input5 = document.getElementsByClassName("input5")[0]; // captura el primer elemento con la clase "input5"

input5.addEventListener('input', () => { // escucha el evento "input", es decir cada vez que se tipea
    console.log(input5.value); // imprime en consola, value es el valor del input
});

/*
------ submit: Se presiona el boton Submit.                                                              */

