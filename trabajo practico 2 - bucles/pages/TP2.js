
/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.


solucion:

let edad =  Number (prompt("Ingrese su edad"))

if (edad) {



while (edad > 0) {

    if (edad >= 18) { 
        console.log ("Es mayor de edad, ya puede conducir!!!")
        edad = 0  // para cortar el bucle infinito
    }

    else {
        edad =  Number (prompt("Ingrese su edad"))
    }
    
  
}
}
else  {
    console.log ("El valor ingresado no es correcto")
   
   
}
*/

/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido 
mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido

solucion:

let nota = Number(prompt("Ingrese la nota"))

while (isNaN(nota)) {
   

    alert ("Ingrese un valor correcto")
     nota = Number(prompt("Ingrese la nota"))

   
  
}


if (nota == 0 || nota== 1 || nota == 2) {
    alert ("muy deficiente")

}

if (nota == 3 || nota ==4) {
    alert ("Insuficiente")
    
}    

if (nota ==  5 || nota  ==6) {
    alert ("Suficiente")
    
} 



if (nota == 7) {
    alert ("Bien")
    
} 

if (nota == 8 || nota == 9) {
    alert ("Notable")
    
} 

if (nota == 10) {
    alert ("Sobresaliente")
    
} 

if (nota >= 10) {
    alert ("número erróneo")
}
*/

/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

solucion:

let cadena = prompt ("Ingrese una palabra")
let concatenar = ""

while (cadena) {
   
    concatenar = concatenar + cadena + "-" 
    cadena = prompt ("Ingrese una palabra")
}

alert (concatenar)
*/

/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

 solucion:

 let numero = prompt("ingrese un numero")
 let suma = null

while (numero) {
    numero = Number(numero)
    if (isNaN(numero)) {
        alert  ("el valor ingresado:"+ numero + ", no es valor correcto.")
        numero = prompt("ingrese un numero")
    } 
    else {
        suma = suma + numero
        numero = prompt("ingrese un numero")
    }

}


alert ("El valor de la suma es: " + suma)
*/

/* 
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’



let dni 

let letras 

let position 

let mostrar 





do {

    dni = Number (prompt("Ingrese su DNI"))

    

    
    if (isNaN(dni) || dni == null )  {
    alert ("Ingrese un valor correcto")  
      
    
    
         } else  {

            letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    position = dni % 23
    mostrar = letras.charAt(position)
    
    alert(mostrar)
            
         }

    
} while (dni);
*/

/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……. 

solucion:

let i = 1 
let mostrar = ""

while (i <= 30) {
    mostrar =  String (i)
    
   
   console.log( 
    mostrar.repeat(i)
   )
    
    i++
}
*/


/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma :
 (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1



let cantidad = Number(prompt("Ingrese un valor"))
let mostrar = ""

if (cantidad <= 50) {

while (cantidad > 0) {
    mostrar =  String (cantidad)
    
   
   console.log( 
    mostrar.repeat(cantidad)
   )
    
    cantidad--
}
} else {
    alert("Debe ingresar un valor menor a 50")
}

*/

/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……


let i = 1
let acumulador = ""
let cantidad = Number(prompt("Ingrese un valor"))
let mostrar = ""

if (cantidad <= 50) {

    while (i <= cantidad ) {

        acumulador = String(i) 

         mostrar = mostrar + acumulador
         console.log (mostrar)
         

       

        i++
    }

    

}
else {
    alert ("El valor ingresado debe ser menor a 50")
}

*/

/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre 
una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

solucon:


let cadena = ""
let i = 1



    while (i <= 500 ) {

        if ( i % 4 == 0) {
            cadena =  "  Es multiplo de 4"
        }

        if ( i % 9 == 0) {
            cadena = "  Es multiplo de 9"
        }


        console.log (i + cadena)
        cadena = ""

        if (i%5 == 0) {
            console.log ("_________________________")
        }

        
        i = i + 1
        
    }

    */

/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá 
escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math

*/

/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


let i = 1

let nombre = ""
let edad = ""

let nombre1 = ""
let nombre2 = ""
let nombre3 = ""

let edad1 = ""
let edad2 = ""
let edad3 = ""



let EdadMax = ""
let NombreMax = ""

while (i <= 3) {
    nombre = prompt("Ingrese un nombre")
    edad = prompt ("Ingrese la edad")

    if (i == 1) {
        nombre1 = nombre
        edad1 = edad

      

    }


    if (i == 2) {
        nombre2 = nombre
        edad2 = edad
        
    }


    if (i == 3) {
        nombre3 = nombre
        edad3 = edad
        
    }


    i++

}

EdadMax = Math.max(edad1,edad2,edad3) 

if (EdadMax == edad1) {
    console.log ("El nombre de la persona mayor es: " + nombre1)
}

if (EdadMax == edad2) {
    console.log ("El nombre de la persona mayor es: " + nombre2)
}

if (EdadMax == edad3) {
    console.log ("El nombre de la persona mayor es: " + nombre3)
}

*/

//12- Realiza un script que genere un número aleatorio entre 1 y 99

/*
solucion:
let numero = Math.random(1)
let redondeo = Math.ceil((numero * 100) - 1)

console.log (redondeo)

*/

/*13- Realiza un script que pida un texto y lo muestre en mayúsculas. 

solucion:
 
let texto = ""

do {
    
    {
        
        texto = prompt ("Ingrese un texto")
    
        console.log (texto.toUpperCase())
        
    }
} while (texto);
*/
/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


solucion:

let  palabra = prompt ("Ingrese una frase")
let frase
let acumulador = ""
let i = 0

do {

   

    frase = palabra.charAt(i)

    acumulador = acumulador + "-"+  frase 

    i++

    
} while (i <= palabra.length);

console.log (acumulador)

*/


/*15- Realiza un script que cuente el número de vocales que tiene un texto.

SOLUCION:

let frase = prompt("Ingree una frase")
let i = 0
let vocales = ""
let letra = ""


while (i <= frase.length) {
    frase = frase.toLocaleLowerCase()
    letra = frase.charAt(i)

    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u" 
        ) {
            vocales = vocales + letra

        }


    i++
}



console.log ("La cantidad de vocales son:   "+ vocales.length)*/

/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

solucion:

let frase = prompt ("Ingrese una frase")
let letra = ""
let reversa = ""
let cantidad = frase.length

while (cantidad >= 0) {

    letra = frase.charAt(cantidad)

    reversa = reversa + letra

    cantidad--
}


console.log(reversa)
*/

/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 
solucion:

let frase = prompt ("Ingrese una frase")

let vocal= ""

let posicion = 0
let i = 0

let cantidad = frase.length

while (posicion == 0) {
    

    frase = frase.toLocaleLowerCase()
    vocal = frase.charAt(i)
    if(
        vocal == "a"||
        vocal == "e"||
        vocal == "i"||
        vocal == "o"||
        vocal == "u"
    ) {
        posicion = i
        console.log("la palabra ingresada es: " + frase)
        console.log ("La primera vocal se encuentra en la posicion: " + posicion)
    }
    
    if (cantidad < i) {
        posicion = 1
        console.log ("La palabra ingresada no contiene vocales")
    }
    i = i + 1
}

*/

