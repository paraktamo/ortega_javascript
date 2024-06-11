/* LOCAL STORAGE

setItem - sirve para almacenar datos en el navegador.
- Se almacena en el navegador hasta que el usuario cierra la ventana.
- Solo existe dentro de la pestaña actual del navegador.
- Otra pestaña con la misma página tendrá otro sessionStorage distinto,
pero se comparte entre iframes en la pestaña (asumiendo que tengan el mismo origen).

Método ->  localStorage.setItem(clave, valor)
clave = nombre para identificar el elemento 
valor = valor/contenido del elemento              */

localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

/* getItem - sirve para recuperar datos del navegador

Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString). */

// busco por clave
let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

// imprimo valores
console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’

/*  SESSION STORAGE

getItem

Método ->  sessionStorage.setItem(clave, valor)
clave = nombre del elemento
valor = Contenido del elemento */

sessionStorage.setItem('seleccionados', [1, 2, 3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');

// ej

let lista = sessionStorage.getItem('seleccionados').split(",");
let bandera1 = (sessionStorage.getItem('esValido') == 'true');
let email = sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera1); //boolean;
console.log(typeof email);   //string;

/* Recorrer
Ciclo para recorrer las claves almacenadas en el objeto localStorage */

for (let i = 0; i < localStorage.length; i++) { // localStorage.length = 3

    let clave = localStorage.key(i);    // clave = 'bienvenida', 'esValido', 'unNumero' - key es una función para obtener las claves de Storage

    console.log("Clave: " + clave);     // 'Clave: bienvenida', 'Clave: esValido', 'Clave: unNumero'

    console.log("Valor: " + localStorage.getItem(clave));   // '¡Hola Coder!', 'true', '20'
}

/* ELIMINAR ELEMENTOS
Podemos eliminar la información almacenada en sessionStorage o localStorage usando el método removeItem o clear: */

localStorage.setItem('bienvenida', '¡Hola Code!'); // almacena
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida'); // elimina el elemento bienvenida del localStorage
sessionStorage.removeItem('esValido');

localStorage.clear()    //elimina toda la información 
sessionStorage.clear() //elimina toda la información

// NOTA: Algunos navegadores no aceptan el uso de sessionStorage. En este caso, deberás utilizar localStorage.

/* Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta 
que tanto la clave como el valor se almacenan en strings. 

Ante cualquier otro tipo a guardar, como un número o un objeto, se convierte a cadena de texto automáticamente. 

Entonces, al buscar almacenar un objeto sin una transformación previa, guardamos [object Object], 
la conversión por defecto de objeto a string. Para guardar la información correctamente hay que transformar el objeto a JSON.
*/

const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]

/* Dado que localStorage y sessionStorage son objetos globales, es posible crear y acceder a las claves como si 
fueran propiedades. Pero esto no es recomendable, porque hay eventos asociados a la modificación del storage 
cuando se emplea getItem o setItem. */

localStorage.numeroPrueba = 5; //Guarda una clave

alert(localStorage.numeroPrueba); //Leer una clave --- 5

let clave = 'toString';	 //toString método reservado que hace que se convierta a string el objeto

localStorage[clave] = "6"; // No se guarda este dato como objeto, se convierte a string

/* Stringify
Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON. */

const producto2 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto2); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON); // Se guarda {"id":2,"producto":"Arroz"}

/* Parse
Con JSON.parse podemos transformar un string en formato JSON a un objeto JavaScript. */

const enJSON = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON);     // string
console.log(typeof producto1);  // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);  // 2  

// Ejemplo 1

const productos = [{ id: 1, producto: "Arroz", precio: 125 },
{ id: 2, producto: "Fideo", precio: 70 },
{ id: 3, producto: "Pan", precio: 50 },
{ id: 4, producto: "Flan", precio: 100 }];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

// Ejemplo 2

class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos)
    producto.sumaIva();

// Ejemplo 3

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem(‘usuario’))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}

// Ejemplo 4

let carrito = []
let carritoEnLS = JSON.stringify(localStorage.getItem(‘carrito’))

// Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
if (carritoEnLS) {
    carrito = carritoEnLS
}

// Función que renderizaría el carrito
renderCarrito(carrito) 
