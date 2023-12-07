/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla 
en forma de lista los doce nombres del arreglo.
 
solucion

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre" , "Diciembre"]
let mes = ""

let i = 0
while (i < meses.length) {
    mes = meses[i]
    console.log (mes)
    i++
}
*/

/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona
 cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


solucion:

const array = []
let ciudad = ""
let posicion = null

do {
    ciudad = prompt("Ingrese el nombre de una ciudad")
    array.push (ciudad)
   
    
    console.log (array)

} while (ciudad);

posicion = array.length -1
array.splice (posicion,1)
console.log (array)

console.log ("-------------")
console.log ( "El arreglo tiene " + array.length + " Ciudades")
console.log ("-------------")

console.log ("La primera ciudad es "+ array[0])
console.log ("-------------")

console.log ("La Tercera ciudad es "+ array[2])
console.log ("-------------")

console.log ("La ultima  ciudad es "+ array[array.length - 1])
console.log ("-------------")



array.push ("Paris")
console.log (array)
console.log ("La ultima  ciudad es "+ array[array.length - 1])

console.log ("-------------")

array[1] = "Barcelona"
console.log (array)
*/


/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:
 

let dado1 
let dado2 
let suma
const array = []

for (let index = 1 ; index <= 50; index++) {

    
    console.log ("Tiro numero " + index)
    dado1 = Math.ceil (Math.random() * 6)
    dado2 = Math.ceil (Math.random() * 6)
    console.log ("El valor del dado 1 es: "+dado1)
    console.log ("El valor del daod 2 es: "+dado2)

    suma = dado1 + dado2

    array.push (suma)
    console.log ("---------------------")

}

//console.log (array)



console.log (array.findIndex(5))
*/


/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica 
si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función


let numero = Number (prompt ("Ingrese un numero"))

function calcular  (numero){

    if (numero % 2 == 0) {
        return document.write ("El numero ingresado es par")
    } else {
        return document.write ("El numero ingresado es impar")
    }
}

calcular (numero)
*/

/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.

  Solucion:
  
let frase = prompt ("Ingrese una frase")


function DeterminaLetras (cadena) {
    let cadena1 = ""
    cadena1 = cadena.toLowerCase()

    if (cadena == cadena1) {
       return console.log ("La frase solo tiene minusculas")
    }

    
    cadena1 = cadena.toUpperCase()

    if (cadena == cadena1) {
        return console.log("La frase solo tiene mayusculas")
    }


    console.log ("La frase tiene mayusculas y minusculas")
  
}

DeterminaLetras (frase)


*/


/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y 
mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)


solucion

let lado1 = Number (prompt ("Ingrese el primer lado del rectangulo"))
let lado2 = Number (prompt ("Ingrese el segundo lado del rectangulo"))
let PerimetroRec

function perimetro (a,b) {
   
    return document.write ("El perimetro del rectangulo es: " + (2* (a+b)))
}

PerimetroRec = perimetro (lado1 , lado2)

*/

/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser
 realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 solucion:

 function tablas (a, b) {
    return console.log (`${a} x ${b} = ` + a * b)
    }  

 let tabla = Number (prompt ("Ingrese el numero de la tabla que desea conocer"))


    for (let index = 1; index <=10; index++) {

        
         

        tablas (tabla, index)
        
        }

 */

