// https://github.com/matiasbenary/bootcamp-frontend-Ada/blob/master/javascript/Ejercicios/08_Array_callback/ej08-Repaso.md#parte-2---foreach




//PARTE 2 FOR EACH
// Ejercicio Array 001
// Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()

// const playlist = [
//   "Concrete and Gold",
//   "The Line",
//   "Sunday Rain",
//   "Happy Ever After (Zero Hour)",
//   "Arrows",
//   "Dirty Water",
//   "La Dee Da",
//   "The Sky Is a Neighborhood",
//   "Make It Right",
//   "Run",
//   "T-Shirt",
// ];

// playlist.forEach(element => console.log(element));


/**************************************************** */


// Ejercicio Array 002
// Tenemos un array en una variable librosDeJS con una lista de libros de javascript.
// Queremos saber la cantidad de libros que tenemos en el array
// Nos pidieron que evitemos usar la propiedad length para contar los elementos de un array y que tenemos que usar si o si un forEach
// Completá el siguiente código para que funcione el último console.log() y muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros
// const librosDeJS = [
//     "JavaScript for Kids: A Playful Introduction to Programming",
//     "Composing Software",
//     "Eloquent JavaScript: A Modern Introduction to Programming",
//     "JavaScript: The Good Parts",
//     "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
//     "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
//     "JavaScript: The Definitive Guide",
//     "You Don’t Know JS",
//     "JavaScript Allongé: The Six Edition",
// ];

// /// ¡escribir en este espacio la solución del ejercicio!
// let totalLibros = 0 ;
// librosDeJS.forEach(element => totalLibros++);

// console.log("Mi lista de libros de JavaScript tiene " + totalLibros + " libros");


/**************************************************** */


// // Ejercicio Array 003
// // Tenemos un array en una variable playlist con una lista de canciones de un disco.
// // Recorrer la lista con la función forEach y mostrar la posición y el nombre de la canción utilizando un console.log()

// const playlist = [
//     "Concrete and Gold",
//     "The Line",
//     "Sunday Rain",
//     "Happy Ever After (Zero Hour)",
//     "Arrows",
//     "Dirty Water",
//     "La Dee Da",
//     "The Sky Is a Neighborhood",
//     "Make It Right",
//     "Run",
//     "T-Shirt",
// ];

// /// completá acá el código


// // para poder hacer esto tengo que primero aprender a imprimir la posicion demlos elementos en un array

// playlist.forEach((element, index) => console.log(`${index+1} - ${element}`));



// // resultado esperado
// // 0 - Concrete and Gold
// // 1 - The Line
// // 2 - Sunday Rain
// // 3 - Happy Ever After (Zero Hour)
// // 4 - Arrows
// // 5 - Dirty Water
// // 6 - La Dee Da
// // 7 - The Sky Is a Neighborhood
// // 8 - Make It Right
// // 9 - Run
// // 10 - T-Shirt


// console.log(sum);
// // deberia mostrar 155


/**************************************************** */


// // Ejercicio Array 004
// // Tenemos un array llamado numbers con números enteros al azar.
// // Queremos calcular la suma de todos los números que están en el array.
// // Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
// // Es necesario utilizar forEach para conseguir la suma
// const numbers = [6, 1, 34, 94, 3, 17];
// let sum = 0;

// // codea debajo de este comentario la solucion al ejercicio
// numbers.forEach(element => sum += element);// en cada vuelta se suma el numero




// // Ejercicio Array 005
// // Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// // Queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
// // Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
// // Es obligatorio utilizar forEach para conseguir el promedio
// const notasDeTPs = [4, 7, 8, 5, 10];
// let notaFinal = 0;


// // codea debajo de este comentario la solucion al ejercicio

// sumaNotas = 0
// notasDeTPs.forEach(element => sumaNotas += element);
// notaFinal = sumaNotas / notasDeTPs.length

// console.log(notaFinal);
// // deberia mostrar 6.8


/**************************************************** */


// // Ejercicio Array 006
// // Tenemos un array en una variable masNumeros con números al azar.
// // También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// // Recorré el array masNumeros (utilizando forEach) y:
// // Si el número es par, agregalo al array numerosPares
// // Si el número es impar, agregalo al array numerosImpares
// // Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
// const masNumeros = [
//     43,
//     11,
//     18,
//     46,
//     44,
//     37,
//     42,
//     29,
//     9,
//     3,
//     37,
//     0,
//     40,
//     10,
//     38,
//     34,
//     25,
//     40,
//     4,
//     32,
// ];
// const numerosPares = [];
// const numerosImpares = [];

// // SOLUCION

// masNumeros.filter(element => {
//     if (element%2===0) {
//         numerosPares.push(element);
//     } else {
//         numerosImpares.push(element);
//     }
// })

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]


/**************************************************** */


// // Ejercicio Array 007
// // Tenemos un array en una variable valores con números al azar.
// // También tenemos un array vacio en la variable dobles.
// // Recorré el array valores (utilizando forEach) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
// // Por ejemplo: Si tenemos [1, 4, 7], dobles quedaría [2, 8, 14]
// const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
// const dobles = [];

// // codea aca tu solución al ejercicio


// valores.forEach(valor => dobles.push(valor*2))
    





// console.log("valores: ", valores);
// console.log("dobles: ", dobles);
// // deberias tener como resultado
// // valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// // dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]