// 1
console.log("Hola")

//2
let unArray = ["Sassón", "Marapode", "Soncini", "Marasi"]
let unArray2 = ["Tomas", "Fran", "Salva", "Bruno"]

function mostrarEnPantalla(array) {
    array.forEach(a => {
        console.log(a)
    })   
}

const mostrarEnPantalla2 = () => {
    unArray2.forEach(nombre => {
        console.log(nombre)
    })     
}

mostrarEnPantalla(unArray);

mostrarEnPantalla2()

//3
let comida = "Milanesa";
let arrayComida = ["Bife", "Manzana", "Bife", "Banana"]

const agregar = () => { arrayComida.push(comida);}

agregar()
mostrarEnPantalla(arrayComida)

//4

let ultimo = arrayComida.lastIndexOf("Bife")
console.log(ultimo)

//5

let arrayNumeros = [10,11,12,13]
let suma = 0;

const sumar = () => {
    arrayNumeros.forEach(n => {
    suma += n;
    })
}
sumar();
console.log(suma)

//6

const invertir = () => {
    arrayNumeros.reverse()
    console.log(arrayNumeros)
}

invertir()

//7
let arrayDesordenado = [5, 2, 7, 1, 3, 6, 4]

const ordenar = () => {
    arrayDesordenado.sort()
    console.log(arrayDesordenado)
}

ordenar();

//8
const filtrarNum = () => {
    const filtrarArray = arrayDesordenado.filter((num) => num >= 5)
    console.log(filtrarArray)
}

filtrarNum()

//9
