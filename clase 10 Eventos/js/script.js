// arrays
const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros[0]) // 1; 
console.log(numeros[3]) // 4; 
let resultado = numeros[1] + numeros[2]
console.log(resultado)

// for tradicional en arrays
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}

const miArray = ["marca", 3, "palabra"];
console.log(miArray.length);
for (let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}

// agregar elementos al final - pop para eliminar
miArray.push('otro elemento')

// agregar elementos al principio - shift para eliminar
miArray.unshift('otro elemento')

//eliminar personalizado -> splice(index, cantidad)
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2) // elimina Pedro y Miguel

// join
console.log(nombres.join(“, ”)) // Luis, Ana, Julia

// ejemplo 1 -----------------------------------------------------

//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
} while (listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

//ejemplo 2 -----------------------------------------------------

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

    // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1) {
        nombres.splice(index, 1)
    }
}
eliminar('Pedro')

const productos = [{ id: 1, producto: "Arroz" },
{ id: 2, producto: "Fideo" },
{ id: 3, producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}


// array de objetos
const objeto1 = { id: 1, producto: "Arroz" }; // objeto
const array = [objeto1, { id: 2, producto: "Fideo" }]; // array con objeto
array.push({ id: 3, producto: "Pan" });

// el for... of te deja recorrer un array de objetos
const Productos = [{ id: 1, cosa: "Arroz" },
{ id: 2, cosa: "Fideo" },
{ id: 3, cosa: "Pan" }];

for (const m of Productos) {
    console.log(m.id);
    console.log(m.cosa);
}

// Retornar funciones
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log(suma(4, 6))  //  10
console.log(resta(5, 3))  //  2

// recibir funcion como parametro

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

// const numeros = [1, 2, 3, 4]

porCadaUno(numeros, console.log)

// recibir fn como parametro - acumulador
let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10

/*mas de arrow function: en este ejemplo la funcion se declara en la misma llamada de porCadaUno de manera anonima*/
const duplicado = []

porCadaUno(numeros, (el) => {
    duplicado.push(el * 2)
})

console.log(duplicado)

/*forEach: Itera sobre el array y, por cada elemento, ejecuta la función que enviemos por
parámetro, la cual recibe a su vez el elemento del array que se está recorriendo*/
numeros.forEach((num) => {
    console.log(num)
})

/*find: recibe una función de comparación por parámetro. Captura el elemento que se está
recorriendo y retorna true o false según la comparación ejecutada. El método retorna el
primer elemento que cumpla con esa condición*/
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
]
const resultado1 = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado1) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

/*filter: El método filter() recibe una función comparadora por parámetro, y retorna un nuevo
array con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío.*/
const cursos = [
    { nombre: 'Javascript', precio: 15000, disponibilidad: true },
    { nombre: 'ReactJS', precio: 22000, disponibilidad: false },
    { nombre: 'AngularJS', precio: 22000, disponibilidad: true },
    { nombre: 'Desarrollo Web', precio: 16000, disponibilidad: true },
]

const resultado3 = cursos.filter((el) => el.nombre.includes('JS'))
const resultado4 = cursos.filter((el) => el.precio < 14000)

console.log(resultado3)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */
console.log(resultado4) // []

/* some: funciona igual que el find() recibiendo una función de búsqueda.
En vez de retornar el elemento encontrado, retorna true o false según el resultado de la iteración de búsqueda.*/
console.log(cursos.some((el) => el.nombre == "Desarrollo Web")) // true
console.log(cursos.some((el) => el.nombre == "VueJS")) // false

/*map: crea un nuevo array con todos los elementos del original transformados según las
operaciones de la función enviada por parámetro. Tiene la misma cantidad
de elementos pero los almacenados son el return de la función */

// Ej 1
const soloNombres = cursos.map((el) => el.nombre)
console.log(soloNombres) // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// Ej 2
const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})
console.log(actualizado)
/* [
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 },
    { nombre: 'AngularJS', precio: 27500 },
    { nombre: 'Desarrollo Web', precio: 20000 }
] */

/* reduce: obtener un único valor tras iterar sobre el array. Funciona como un método
que resume el array a un único valor de retorno. Usa dos parámetros:
1. El primero es la función que ordena qué queremos resumir del array. Recibe un parámetro
que funciona como acumulador, y el elemento del array que iteramos.
2. El segundo es el valor inicial del acumulador.

Lo usamos cuando:
- Queremos acumular la suma de alguna propiedad de los elementos
- Deseamos obtener algún resultado general sobre todo el array */

// Ej 1
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

// Ej 2
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

/* sort: reordena un array según un criterio que definamos. Recibe una función de
comparación por parámetro que, a la vez, recibe dos elementos del array. La función
retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después. */

// Ej 1
const otrosNumeros = [40, 1, 5, 200];
otrosNumeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
otrosNumeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

// Ej 2
const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})

console.log(items)