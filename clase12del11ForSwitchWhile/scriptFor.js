// // se emplea en aquellas situaciones en las que conocemos la cantidad de veces que queremos que se ejecute ese bloque de instruccion

// //  FOR (   INICIAIZACION      ;   CONDICION   ;   INCREMENTO / DECREMENTO ) {
// //    INSTRUCCIONES
// //  }

// //  FOR (       LET I = 0       ;   I   =   10  ;       I + +      )    {
// //  INSTRUCCION A SER EJECUTADA    
// //  }
// // for (let i = 2 ; i <= 25 ; i++){
// //     document.write(i + " ")
// // }


// // Realizar un programa que lea los lados de 4 triángulos, e informar:
// // a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
// // b) Cantidad de triángulos de cada tipo.c) Tipo de triángulo del que hay menor cantidad.

// // armo un for y necesito que se ejecute CUATRO4 VECES por eso el i <= 4 

// //tambien necesito contar la cantidad de triangulos equilateros, esosceneles y ecalenos que hay... entonces debo crear los ACUMULADORES y debo INICIALIZARLOS EN 0
// let acumulador_equilateros = 0
// let acumulador_isosceless = 0
// let acumulador_escalenoss = 0

// for (let i = 0; i < 4; i++) {
//     // aca adentro hago que se hagan las preguntas x medio de prompt
//     let primerLado = parseInt(prompt('Ingrese el la medida del perimer lado'));
//     let segundoLado = parseInt(prompt('Ingrese el la medida del segundo lado'));
//     let tercerLado = parseInt(prompt('Ingrese el la medida del tercer lado'));
//     //este cdigo es el que se va a ejecutar primero y con esta info tengo que hacer un IF PARA CHEQUEAR QUE TIPO DE TRIANGULO ES CADA UNO
//     if (primerLado == segundoLado && primerLado == tercerLado) {
//         document.write('EL TRIANGULO INGRESADO ES EQUILATERO <br>');
//         // aca llamo al acumulador correspondiente y con el ++ hago q se vayan sumando
//         acumulador_equilateros++
//     } else if (primerLado == segundoLado || primerLado == tercerLado || segundoLado == tercerLado) {
//         document.write('EL TRIANGULO INGRESADO ES ISOSCELES <br>');
//         // aca llamo al acumulador correspondiente y con el ++ hago q se vayan sumando
//         acumulador_isosceless++
//     } else {
//         // aca llamo al acumulador correspondiente y con el ++ hago q se vayan sumando
//         acumulador_escalenoss++
//         document.write('EL TRIANGULO INGRESADO ES ESCALENO <br>');
//     }
// }
// document.write('ingresaste ' + acumulador_equilateros + 'triangulos equilateros');
// document.write('<br>');
// document.write('ingresaste ' + acumulador_isosceless + 'triangulos isosceles');
// document.write('<br>');
// document.write('ingresaste ' + acumulador_escalenoss + 'triangulos escalenos');
// document.write('<br>');
// //para saber cual es el tipo triangulo que ha sido ingresado menor cantidad de veces CREO UN IF Y COMPARO

// if (acumulador_escalenoss < acumulador_isosceless && acumulador_escalenoss < acumulador_equilateros) {
//     document.write('el triangulo que ha sifo ingresado la menor cantidad de veces es el triangulo escaleno')
// } else if (acumulador_equilateros < acumulador_escalenoss && acumulador_equilateros < acumulador_isosceless) {
//     document.write('el triangulo que ha sifo ingresado la menor cantidad de veces es el triangulo equilatero')
// } else {
//     document.write('el triangulo que ha sifo ingresado la menor cantidad de veces es el triangulo esosceles')
// }
