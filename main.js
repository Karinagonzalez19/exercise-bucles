//1
function tabla(valor) {
    if (typeof valor === "number") {
        for (let i = 0; i <= 10; i++) {
            console.log(valor + " * " + i + " = " + (valor * i));
        }
    }
}
tabla(parseInt(prompt("ingrese cualquier numero:")))
//2
function ingresar(){
    let valor = parseInt(prompt("ingrese 0 si asi lo desea o cualquier numero)"))
    let acumulado =+ valor
    while (valor > 0) {
        valor = parseInt(prompt("ingrese un numero (o si desea finalice con 0)"))
        acumulado += valor
    }
    console.log("el acumulado de sus numeros es ", acumulado);
}
ingresar()
//3
function numeroSecreto(){
    let secreto =  17;
    let ingreseSuN = parseInt(prompt("ingrese un numero: "))
    let contar = 1
    let bandera = false
    while(bandera == false){
        if (secreto == ingreseSuN) {
            bandera = true
        }else if (secreto < ingreseSuN) {
            ingreseSuN = parseInt(prompt("estas cerca, el numero secreto es menor de " + ingreseSuN + " ingrese otro numero: "))
            contar++
        } else {
            ingreseSuN  = parseInt(prompt("estas cerca el numero secreto es mayor a " + ingreseSuN+ " ingrese otro numero: "))            
            contar++
        }
    }
    console.log("acerto te demorastes " + contar + " intentos");
}
numeroSecreto()
//4
function primo() {
    let valor = parseInt(prompt("¿quieres saber si es un numero primo? ingreselo"))
    let bandera = true
    if (valor > 1) {
        for (let i = 2; i < valor; i++) {
            if(valor % i == 0){
                bandera = false
                break;
            }
        }
        console.log("el numero " + valor + " es primo? " + bandera);
    }else{
        console.log("el número no cumple con la definición de número primo porque no es mayor que 1");
    }
}
primo()
//5
function mostrar() {
    let divisor = parseInt(prompt("¿desea ver sus divisiores, ingrese un numero: "))
    console.log("los divisores de " + divisor + " son: ");
    for (let i = 1; i <= divisor; i++) {
        if (divisor % i === 0) {
            console.log(i);
        }
    }
}
mostrar()
//6
function animales (){
    for (let i in mamiferos) {
        console.log(mamiferos[i]);
    }
}
let mamiferos = ["gato", "perro", "jirafa", "elefante", "leon", "tigre", "murcielago", "canguro", "hiena", "ballena"]
animales()
//7
let impar = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

function porDos() {
   for (const num of impar) {
    console.log("el doble de " + num + " es: " + (num * 2));
}
}
porDos()
//8
function familia() {
    for (let obj  of familiares) {
        console.log("hola mi nombre es: " + obj.nombre + " tengo " + obj.edad + " años soy " + obj.parentesco + " y mi oficio es " +obj.oficio);
    }
};
let persona1 = {
    nombre: "Nancy Pinzon",
    edad: 46,
    parentesco: "madre",
    oficio: "Ama de casa"
};
let persona2 = {
    nombre: "Clara Toro",
    edad: 30,
    parentesco: "hija",
    oficio: "estudiante"
};

let persona3 = {
    nombre: "Kevin Portilla",
    edad: 20,
    parentesco: "hijo",
    oficio: "estudiante"
};

let persona4 = {
    nombre: "Julian Portilla",
    edad: 18,
    parentesco: "hijo",
    oficio: "ejerzo practicas"
};
let familiares = [persona1, persona2, persona3, persona4]
familia()
//9
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i]);
    }
}
//10
function calcular() {
    let valor = parseInt(prompt("escriba un numero puede ser cero"))
    let pares = 0
    let impares = 0
    while (valor != 0) {
        if (valor % 2 == 0) {
            pares += valor
        }else{
            impares += valor
        }
        valor = parseInt(prompt("ingresa un numero cuantas veces desee, y para finalizar marca  el o"))
    }
    console.log("el resultado de los numeros pares es de: " + pares)
    console.log("el resultado de los numeros impares es de: ", impares);
}
calcular()
//11
let maximo = [100,24, 60, 150,11, 9, 5, 77, 18, 101];
let mayor = maximo[0];

for (let i = 1; i < maximo.length; i++) {
    if (maximo[i] > mayor) {
        mayor = maximo[i];
    }
}
console.log("El número mayor del array es:", mayor);
//12
let minimo = [100,24, 60, 150,11, 9, 5, 77, 18, 101];
let masChico = minimo[0];

for (let i = 1; i < minimo.length; i++) {
    if (minimo[i] < masChico) {
        masChico = minimo[i];
    }
}
console.log("El número mas chico del array es:", masChico);
//13
function juegoDeMano() {
    let nPlay1 = prompt("Escriba su nombre jugador 1: ");
    let nPlay2 = prompt("Escriba su nombre jugador 2: ");
    let juegaPlay1 = prompt(nPlay1 + ", ingrese piedra, papel o tijera: ").toLowerCase();
    let juegaPlay2 = prompt(nPlay2 + ", ingrese piedra, papel o tijera: ").toLowerCase();

    while (true) {
        if ((juegaPlay1 === "piedra" && juegaPlay2 === "tijera") ||
            (juegaPlay1 === "papel" && juegaPlay2 === "piedra") ||
            (juegaPlay1 === "tijera" && juegaPlay2 === "papel")) {
            console.log("¡El jugador " + nPlay1 + " gana!");
            break;
        } else if ((juegaPlay2 === "piedra" && juegaPlay1 === "tijera") ||
                   (juegaPlay2 === "papel" && juegaPlay1 === "piedra") ||
                   (juegaPlay2 === "tijera" && juegaPlay1 === "papel")) {
            console.log("¡El jugador " + nPlay2 + " gana!");
            break;
        } else {
            console.log("Empate");
            juegaPlay1 = prompt(nPlay1 + ", ingrese piedra, papel o tijera: ").toLowerCase();
            juegaPlay2 = prompt(nPlay2 + ", ingrese piedra, papel o tijera: ").toLowerCase();
        }
    }
}
juegoDeMano()
//14
function triangulo() {
        for (let i = 0; i < 5; i++) {
        console.log("*".repeat(1 + i));
    }
    let por = ["*", "* *", "* * *", "* * * *", "* * * * *"]

    for (let i = 0; i < 5; i++) {
        console.log(" ".repeat(5-i) + por[i]);
    }
}
triangulo()
//15
function trianguloI() {
    
    for (let i = 0; i < 5; i++) {
        console.log("*".repeat(5-i));
    }
}
trianguloI()
//16
let myArray = [10,24,5,50,12,7,1,-1,-50,1500];

for(let i = 0; i< myArray.length; i++){ 
    for(let j = 0; j< myArray.length; j++){ // 
        if(myArray[i] < myArray[j]){
            let temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;
        }
    }
}
console.log(myArray)
