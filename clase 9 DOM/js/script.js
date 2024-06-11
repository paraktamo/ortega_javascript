


/*El método getElementById() 
sirve para acceder a un elemento de HTML, usando el ID como identificación.
 
HTML:
<div id="app">
    <p id="parrafo1"> Hola Mundo </p>
</div>    */

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML); //  <p id="parrafo1">Hola Mundo</p>
console.log(parrafo.innerHTML); // Hola Mundo

// _________________________________________________________________________________________

/* getElementsByClassName() 
sirve para acceder a un conjunto de elementos del HTML, usando su atributo
class como identificación. Se retornará un Array de elementos con todas las coincidencias
 
HTML:
<ul>
    <li class="paises">AR</li>
    <li class="paises">CL</li>
    <li class="paises">UY</li>
</ul>   */

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML); // AR
console.log(paises[1].innerHTML); // CL
console.log(paises[2].innerHTML); // UY

// _________________________________________________________________________________________

/* getElementsByTagName() 
sirve para acceder a un conjunto de elementos del HTML, usando su nombre de etiqueta
como identificación. Se retornará un Array de elementos con todas las coincidencias.
 
HTML:
<div>
    <div>CONTENEDOR 2</div>
    <div>CONTENEDOR 3</div>
</div>   */

let contenedores = document.getElementsByTagName("div");
console.log(contenedores); // HTMLCollection(4)
console.log(contenedores[0].innerHTML); // <p id="parrafo1">  Hola Mundo  </p>
console.log(contenedores[1].innerHTML); //  <div>CONTENEDOR 2</div>
//                                          <div>CONTENEDOR 3</div>
console.log(contenedores[2].innerHTML); // CONTENEDOR 2

// _________________________________________________________________________________________

// FOR... OF

let paises1 = document.getElementsByClassName("paises");
let contenedores1 = document.getElementsByTagName("div");

for (const pais of paises1) {
    console.log(pais.innerHTML);
}

for (const div of contenedores1) {
    console.log(div.innerHTML);
}

// _________________________________________________________________________________________

/* innerText
nos permite modificar su nodo de texto. Es decir, acceder y/o modificar
el contenido textual de algún elemento del DOM.
 
HTML:
<h1 id=”titulo”>Hola Mundo!</h1> 
 
variable.innerText --> asi es como se llama al inner text de un elemento    */

let titulo = document.getElementById("titulo")
console.log(titulo.innerText) // “Hola Mundo!”

// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"
console.log(titulo.innerText) // “Hola Coder!”

// _________________________________________________________________________________________

/* innerHTML: innerHTML permite definir el código html interno del elemento seleccionado.
 
- El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde
un string crear una nueva estructura de etiquetas y contenido. 
 
- Al pasar un string con formato de etiquetas html y contenido a través de la propiedad 
innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado. 
 
HTML:
<div id=”contenedor”></div>    */

let container = document.getElementById("contenedor")

// cambio el código HTML interno
container.innerHTML = "<h2>Hola mundo!</h2> <p>Lorem ipsum</p>"

//Resultado en el DOM
/*{ <div id= "contenedor"> 
                            <h2>Hola mundo!</h2>
                            <p>Lorem ipsum</p>
    </div> }    */

// _________________________________________________________________________________________

/* className:
A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class
del mismo y definir cuáles van a ser sus clases:
 
HTML:
<div id="contenedor"></div>    */

//CODIGO JS
let container1 = document.getElementById("contenedor1")

// cambio el código HTML interno
container1.innerHTML = "<h3>Hola mundo!</h3>"

// cambio el atributo class
container1.className = "container row"

/* Resultado en el DOM
<div id= "contenedor" class= "container row">
        <h2>Hola mundo!</h2>
</div>    */

// _________________________________________________________________________________________

/* document.createElement():
- Se debe indicar el nombre de etiqueta HTML que representará ese elemento.
- Luego debe agregarse como hijo el nodo creado con append(), al body o a otro nodo del documento actual. */

// Crear nodo de tipo Elemento, etiqueta p
let parrafo1 = document.createElement("p");

// Insertar HTML interno
parrafo1.innerHTML = "<h2>¡Hola Coder!</h2>";

// Añadir el nodo Element como hijo de body ----- document.ELEMENTO-PADRE.append(ELEMENTO-HIJO)
document.body.append(parrafo1);

// _________________________________________________________________________________________

/* remove()    */

parrafo = document.getElementById("parrafo1");
parrafo.remove();  // Eliminando el propio elemento

paises = document.getElementsByClassName("paises");
paises[0].remove()  // Eliminando el primer elemento de clase paises

// _________________________________________________________________________________________

/* Obtener info de INPUTS:    Acceder a la propiedad value 
 
HTML:
<input id = "nombre" type="text">
<input id = "edad"   type="number">   */

document.getElementById("nombre").value = "HOMERO"; // Cambia el valor:    document.getElementById("ID").value = "NUEVO-VALOR";

document.getElementById("edad").value = 39; // Cambia el valor:    document.getElementById("ID").value = "NUEVO-VALOR";

// Ejemplo

let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];  // Array con la información a agregar
let padre = document.getElementById("personas");    //Obtenemos el nodo donde vamos a agregar los nuevos elementos
// document.body.appendChild(padre);


// Iteramos el array con for...of:
for (const persona of personas) {

    let li = document.createElement("li");  // Creamos un nodo <li> 

    li.innerHTML = persona; // indicamos el contenido del <li>

    document.body.appendChild(li);

    padre.appendChild(li); // y agregamos al padre en cada ciclo
}


// _________________________________________________________________________________________

/*  Plantillas Literales */

let producto = { id: 1, nombre: "Arroz", precio: 125 };

let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " $" + producto.precio;
let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} $${producto.precio}`;

//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);

// _________________________________________________________________________________________

/*  Plantillas Literales e innerHTML  */

let producto1 = { id: 1, nombre: "Arroz", precio: 125 };
let contenedor2 = document.createElement("div");

//Definimos el innerHTML del elemento con una plantilla de texto
contenedor2.innerHTML = `<h3> ID: ${producto1.id}</h3>
                        <p>  Producto: ${producto1.nombre}</p>
                        <b> $ ${producto1.precio}</b>`;

//Agregamos el contenedor creado al body
document.body.appendChild(contenedor2);

// _________________________________________________________________________________________

const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
{ id: 2, nombre: "Fideo", precio: 70 },
{ id: 3, nombre: "Pan", precio: 50 },
{ id: 4, nombre: "Flan", precio: 100 }];

for (const producto of productos) {
    let contenedor = document.createElement("div"); // para cada objeto en el array, creamos un div
    
    //Definimos el innerHTML del elemento con una plantilla de texto 
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;

    document.body.appendChild(contenedor); // agregamos el contenedor creado al body
}

// _______________________________________________________________________________________

/* QuerySelector():
Nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.

HTML:
<div id= "contenedor3">
    <p class="texto"></p>
</div>
*/


let parrafo3 = document.querySelector("#contenedor3 p") // puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores

let contenedor = document.querySelector("#contenedor3") // seleccionar sólo el contenedor por id con #

parrafo3 = document.querySelector(".texto") // o por clase
