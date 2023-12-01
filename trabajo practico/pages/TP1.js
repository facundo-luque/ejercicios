/* 
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “un mensaje”. 

solucion: 

alert ("un mensaje")
*/


/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga «Hello World» (document.write).

solucion:

document.write ("Hello World") */

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5. 

solucion:

document.write ("El resultado es ") + document.write (3+5)*/

/*
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo:
input: Coder Output: Hola Coder


solucion:
let nombre = prompt ("Ingrese su nombre")
document.write ("Hola   "+ nombre)*/

/* 
5.- Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/
parseInt


let num1 = parseInt (prompt("ingrese el primer numero"))
let num2 = parseInt (prompt("ingrese el segundo numero"))


document.write (num1 + num2)*/

/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.
Ejemplo:
input: 15 , 3 Output: El 15 es el número más
grande

solucion1:

let num1 = parseInt( prompt("Ingrese el primer numero"))
let num2 = parseInt( prompt("Ingrese el segundo numero"))

if ((isNaN (num1)) || (isNaN(num2)) ) {

    console.error("Uno de los valores ingresados no es un numero")
} 
else { 
    
let mayor = Math.max(num1 , num2)


document.write ("El numero mayor es: " + mayor)

}
*/
//solucion2:

/*
let num1 = parseInt( prompt("Ingrese el primer numero"))
let num2 = parseInt( prompt("Ingrese el segundo numero"))
if ((isNaN (num1)) || (isNaN(num2)) ) {

    console.error("Uno de los valores ingresados no es un numero")
} 
else 
    
    if (num1 > num2) {
        document.write ("El numero mayor es: " + num1)

    }  else if (num2> num1) { 
        document.write ("El numero mayor es: " + num2)
 
    } else { document.write ("Los numeros ingresados son iguales")}
 
  
*/




/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.
Ejemplo:
input: 15 , 3, 9 Output: El 15 es el número más
grande
 

solucion:

let num1 = parseInt( prompt("Ingrese el primer numero"))
let num2 = parseInt( prompt("Ingrese el segundo numero"))
let num3 = parseInt( prompt("Ingrese el segundo numero"))

if ((isNaN (num1)) || (isNaN(num2)) || (isNaN(num3)) ) {

    console.error("Uno de los valores ingresados no es un numero")

} 
else  if (num1 == num2 && num1 == num3){ 

    document.write ("Los numeros ingresados son iguales")
    } else {
        let mayor = Math.max(num1 , num2, num3)

        document.write ("El numero mayor es: " + mayor)
    }

*/


/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2

SOLUCION:

let numero = parseInt(prompt("Ingrese un numero"))

if  (isNaN (numero)) {

    document.write("El valor ingresado no es numero")
 
} else if (numero % 2 == 0) {
    document.write ("El valor ingresado "+ numero+ " Es divisible por 2")

} else {
    document.write ("El valor ingresado no es divisible por 2")
}
*/

/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo Output: oauo 



let frase = prompt("Ingrese una frase")
let i = 0
let vocales = " "
let cantidad = frase.length

frase = frase.toLowerCase()

while (i < cantidad) {

    if ( 
         (frase.charAt(i) )== "a" ||
         (frase.charAt(i) )== "e" ||
         (frase.charAt(i) )== "i" ||
         (frase.charAt(i) )== "o" ||
         (frase.charAt(i) )== "u" 
    
    ) {
        //console.log ("las vocales son: "+ frase.charAt(i))
       vocales = vocales +  frase.charAt(i)
    }  


i = i + 1
} 

document.write ("Las vocales son:" +  vocales)

*/

/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:
input: 20 Output: El 20 es divisible por 2.


let numero  = Number(prompt("Ingrese un numero"))


if (numero % 2 == 0) {
    console.log ("El valor ingresado: " + numero + " es divible por 2")
} else if (numero % 3 == 0) {
    console.log ("El valor ingresado: " + numero + " es divible por 3")
} else if (numero % 5 == 0) {
    console.log ("El valor ingresado: " + numero + " es divible por 5")
} else if (numero % 7 == 0) {
    console.log ("El valor ingresado: " + numero + " es divible por 7")
}
else {
    console.log ("El valor ingresado: " + numero + " no es divisible por 2, 3, 5 y 7")
}*/


/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)
Ejemplo:
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3,
por 5 y por 7



let numero = Number(prompt("Ingrese un numero"))

if  (numero % 2 == 0) {
    console.log ("El valor ingresado " + numero + " es divible por 2")
}
if  (numero % 3 == 0) {
    console.log ("El valor ingresado " + numero + " es divible por 3")
}
if  (numero % 5 == 0) {
    console.log ("El valor ingresado " + numero + " es divible por 5")
}
if  (numero % 7 == 0) {
    console.log ("El valor ingresado " + numero + " es divible por 7")
}


if (
   (numero % 2 !==0  ) &&
   (numero % 3 !==0  ) &&
   (numero % 5 !==0  ) &&
   (numero % 7 !==0  ) 
   )  {
    console.log ("El valor ingresado no es divible por 2, 3 ,5 ni 7") 
}
*/