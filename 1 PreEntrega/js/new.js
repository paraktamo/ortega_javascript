//crear un total
let total = 0;

//crear un mensaje de bienvenida
alert("bienvenido a Kurger Bing, a continuacion le presentamos el menu");

// crear un menu con opciones
function menu() {
    let eleccion = prompt("elija elementos del menu del 1 al 9 \n 1- hambruiguesa de ajo(10$) \n 2- hamrbuguesa de queso(10$) \n 3-papas de chocolate(5$) \n 4-refresco caliente(3$) \n 5-helado de agua(3$) \n 6-taparterias9000(15$) \n 7-combo ambicion(15$) \n 8-ensalada con azucar(8$) \n 9- finalizar compra");
    //asiganrle a cada opcion un numero
    switch (eleccion) {
        case "1":
        case "2":
            //en cada opcion, agregar el costo al total y repetir el menu
            total += 10;
            menu();
            break
        case "3":
            total += 5;
            menu();
            break
        case "4":
        case "5":
            total += 3;
            menu();
            break
        case "6":
        case "7":
            total += 15;
            menu();
            break
        case "8":
            total += 8;
            menu();
            break
        case "9":
            //agregar una opcion para terminar la compra y printear el total
            if (total == 0) {
                alert("no ha comprado nada ! ! ! ")

            }
            alert("El total de tu compra es de : " + total + "$");
            break
        default:
            alert("porfavor, ingrese numeros del 1 al 9");
            menu();
    }
}
//llamar funcion
menu();
