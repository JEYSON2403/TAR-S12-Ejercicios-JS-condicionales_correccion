/*Rangos de edad para vacuna
Escribir un programa que a permita validad la edad para recibir una vacuna. 
Las edades permitidas son menores de 6 o mayores de 65*/

console.log("Ingresa la edad del paciente:");
let edad = prompt("Edad:");

if (edad < 6 || edad > 65) {
  console.log("El paciente cumple con el rango de edad para recibir la vacuna.");
} else {
  console.log("La edad del paciente no cumple con el rango para recibir la vacuna.");
}


/*En este ejemplo, se le pide al usuario que ingrese la edad del paciente utilizando la función prompt(). 
Luego, se utiliza un condicional "if" para verificar si la edad está dentro del rango 
permitido (menor a 6 o mayor a 65). Si la edad cumple con el rango, 
se muestra un mensaje indicando que el paciente cumple con el rango de edad para recibir la vacuna. 
De lo contrario, se muestra un mensaje indicando que la edad del paciente no cumple
 con el rango para recibir la vacuna.*/




