// ciclos e iteraciones
/* por conteo ---> for
for(desde;hasta;actualizacion){
    lo que se escribe aca se ejecuta mientras se cumpla el ciclo
}
*/
for (let i = 0; i < 10; i++) {
    alert(i)
};

//condicional ---> while y do while
/* while(condicion){
    lo que se escribe aca se ejecuta mientras se cumpla la condicion
}
*/
let i = 0;

while (i < 10) {
    console.log("imprimiendo desde el while" + i)
    i++
};

// do while
do {
    console.log("imprimiendo desde el do...while " + i)
    i++
} while (i < 10);
