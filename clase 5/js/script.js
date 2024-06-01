//objetos en JS

// const persona = {
//     nombre: 'paula',
//     apellido: 'ortega',
//     edad: 23
// }
// console.log(persona)
// console.log(persona.edad)
// persona.edad = 24
// console.log(persona)
// persona.direccion = 'bogota'
// console.log(persona)

const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

//acceder a los valores
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)

//asignar nuevos valores
persona1["nombre"] = "Marge"
persona1.edad = 36

//constructor con this
//Los métodos de los objetos también son técnicamente funciones, sólo que se limitan a 
//poder ser ejecutados solo desde el mismo objeto y no pueden retornar un valor

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () { console.log("HOLA SOY " + this.nombre) } //metodo
}

// construyendo con new
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar()

// El operador in devuelve true si la propiedad especificada existe en el objeto.
console.log("nombre" in persona1);

// El bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.
for (const dato in persona1) {
    console.log(persona1[dato]);
}

// clases: equivalencia al empleo de función constructora y permite definir distintos tipos de métodos
class Personas {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablan(){ // metodo
        console.log("HOLA SOY "+ this.nombre);
    }

}
const personas1 = new Personas("Homero", 39, "Av. Siempreviva 742");
personas1.hablan()