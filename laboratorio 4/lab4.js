/* 1 Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola.*/

var n1 = 6;
var n2 = 4;
var suma = (n1 + n2);
var resta = (n1 - n2);
var multiplicacion = (n1 * n2);
var division = (n1 / n2); 

console.log('Si n1 es igual n1 = ' + n1 + ' y n2 es igual n1 = ' + n2);
console.log('el resultado de la suma de n1 y n2 es ' + suma);
console.log('el resultado de la resta de n1 y n2 es ' + resta);
console.log('el resultado de la multipliacion de n1 y n2 es ' + multiplicacion);
console.log('el resultado de la division de n1 y n2 es ' + division);


/*2 Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.*/

let var1 = "Amilcar";
let var2 = "Fuentes"
    console.log(var1 + var2);
console.log("\n");

/*3 Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.*/

const r = true;
const s = {};

console.log('El tipo de variable de r es igual a = ' + typeof(r));
console.log('El tipo de variable de s es igual a = ' + typeof(s));

/*4 Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
un string, un booleano y un objeto vacío, en ese mismo orden.*/

const obj = new Object();

obj.numero = 24;
obj.nombre = "Amilcar";
obj.boolean = false;
obj.vacio = null;

console.log(obj.numero, obj.nombre, obj.boolean, obj.vacio);