/*Rango de edad para empleo
Escribir un programa que a permita validad un rango de edad para un empleo. 
La edad permitida es mayor a 18 y menor a 25.*/



console.log("Ingresa la edad del empleado:");
let edad = prompt("Edad:");

if (edad > 18 && edad < 25) {
  console.log("El empleado cumple con el rango de edad permitido.");
} else {
  console.log("La edad del empleado no cumple con el rango permitido.");
}


/*En este ejemplo, se le pide al usuario que ingrese la edad del empleado utilizando la función prompt(). 
Luego, se utiliza un condicional "if" para verificar si la edad está dentro del rango 
permitido (mayor a 18 y menor a 25). Si la edad cumple con el rango,
 se muestra un mensaje indicando que el empleado cumple con el rango de edad permitido. De lo contrario, 
se muestra un mensaje indicando que la edad del empleado no cumple con el rango permitido.*/