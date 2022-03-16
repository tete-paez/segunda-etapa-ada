// // Ejercicio Array 001
// // Tenemos un array en una variable numeros con números al azar.
// // Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
// // Mostrar por consola el array original y el nuevo
// const numeros = [1, 2, 3, 4, 5];


// // codear acá la solución del ejercicio
// const numerosMasDiez = numeros.map(numero => numero + 10);



// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]


/********************************************************** */

// Ejercicio Array 002
// Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo
// const numeros = [3, 7, 13, 99];

// // codear acá la solución del ejercicio

// const dobles = numeros.map(numero => numero * 2);

// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]


/********************************************************** */

// // Ejercicio Array 003
// // Tenemos un array en una variable frases con frases al azar.
// // Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// // Mostrar por consola el array original y el nuevo
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// // codear acá la solución del ejercicio

//EXPLICO: recorro con el .map todas las frases
//luego recirriendolas le digo que a cada una le agreghe los signos usando template string

// const frasesExclamadas = frases.map(frase => `¡${frase}!`)


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]


/* *********************************************** */


// // Ejercicio Array 004
// // Tenemos un array en una variable libros con libros para leer sobre Javascript.
// // Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// // Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>
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

// // codear acá la solución del ejercicio

// creo el elemento en el dom
const lista = document.getElementById('lista');
// con el map recorro la lista de libros 
librosDeJS.map(libro => {
    //y a la variable lista que cree le mero x innerhtml los li
    lista.innerHTML += `<li>${libro}</li>`
    // cara vuelta de recorrido del map es un li nuevo que se crea

})


// // el resultado final debería ser
// // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><



/* *********************************************** */

// // Ejercicio Array 005
// // Tenemos un array en una variable frases con frases al azar.
// // Usar la función map para crear un nuevo array que contenga la longitud de cada palabra.
// // Mostrar por consola el array original y el nuevo.
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// // codear acá la solución del ejercicio
// longitudes = frases.map(frase => frase.length);

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]




/* *********************************************** */

// // Ejercicio Array 006
// // Tenemos un array en una variable playlist con una lista de canciones de un disco.
// // Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
// const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

// /// completá acá el código


// playlist.map((element, index) => console.log(`${index} - ${element}`));


// // RESULTADO ESPERADO
// // [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]


/* *********************************************** */

// // Ejercicio Array 007
// // Tenemos un array en una variable playlist con una lista de canciones de un disco.
// // Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
// const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

// /// completá acá el código
// // playlist.map((element, index) => console.log(`${index} - ${element}`));

// // RESULTADO ESPERADO
// // [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]


/* *********************************************** */

// // Ejercicio Array 008
// // Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// // Completar el siguiente código para llegar al resultado esperado
// // A un costo primero se le agrega la ganancia y después el IVA
// const costos = [12.5, 56, 98, 45.75];

// const agregarIVA = function (costo) {
//     return costo * 1.21;

// };
// console.log(agregarIVA(12.5))

// const sumarGanancia = function (costo) {
//     return costo * 1.5;
// };
// console.log(sumarGanancia(15.125))


// // codear acá la solución del ejercicio
// //ESTO ME DA BIEN PERO QUIERO MENOS LINEAS
// // costoParcial = costos.map(costo => costo * 1.21);
// // preciosFinales = costoParcial.map(costoP => costoP * 1.5)

// // const preciosFinales = (costos) => {
// //     return costos.map (costo => agregarIVA(sumarGanancia(costo)))
// //     }
// preciosFinales = costos.map(costo => agregarIVA(sumarGanancia(costo)))

// // console.log(costoParcial);
// console.log(preciosFinales);
// // deberia mostrar
// // [ 22.6875, 101.64, 177.87, 83.03625 ]

// /* *********************************************** */

// // Ejercicio Array 009
// // Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// // También tenemos un array en una variable productos con los nombres de cada producto.
// // Completar el siguiente código para llegar al resultado esperado
// // A un costo primero se le agrega la ganancia y después el IVA
// // El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos
// const productos = ["celular", "notebook", "monitor"];
// const costos = [12.5, 56, 98];

// const agregarIVA = function (costo) {
//   return costo * 1.21;
// };

// const sumarGanancia = function (costo) {
//   return costo * 1.5;
// };

// // codear acá la solución del ejercicio

// // preciosFinales = costos.map(costo => agregarIVA(sumarGanancia(costo)))
// //const preciosFinales =  productos.map(element => element + " " + (costos.map(costo=> agregarIVA(sumarGanancia(costo)))));

// const preciosFinales =  productos.map(element => element );
// const preciosParciales = (costos.map(costo=> agregarIVA(sumarGanancia(costo))))

// const meSAle = preciosFinales[0] + preciosParciales[0]


// console.log(preciosParciales);
// console.log(preciosFinales);

// //de barbara
// let costosModificados = costos.map(costo => sumarGanancia(costo)).map(costo => agregarIVA(costo))
// console.log(costosModificados);

// console.log(meSAle);
// // deberia mostrar
// // [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]


