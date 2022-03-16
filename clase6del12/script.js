// UN FOR COMUN

// const array = [3,5,8,9,75,41,6];
// let suma = 0 ;

// for (let i = 0; i < array.length; i++) {
//     suma += array[i];
// }
// console.log(suma)

//-----------------------------------------//

// PERO HAY OTRA FORMA DE HACER UN FOR : 
// FOR OF

// const array = [3,5,8,9,75,41,6];
// let suma = 0 ;

// for (let elemento of array)
// suma += elemento
// console.log(suma)

// PARA SUMAR ELEMENTOS AL ARRAY USO 
//.PUSH()

// PARA ELIMINAR EL ULTIMO ELEMENTO DEL AYYAR 
//.POP()

// PARA EGREGAR 1 O MAS ELEMENTOS AL INICIO DEL ARRAY
//.UNSHIFT()

// PARA ELIMINAR EL PRIMER ELEMENTO DEL ARRAY 
//.SHIFT()

//CONCAT:
// PARA "UNIR Y CREAR" UN NUEVO ARRAY:
// TENGO UN ARRAY Y QUIERO CREAR OTRO EN EL CUAL ESE PRIMER ARRAY SEA PARTE DEL PRIMER ELEMENTO DEL SEGUNDO NUEVO.
// X EJEMEPLO:
// let array1 = [1,2,3,4];
// let array2 = [100,200,300,400];
// let arrayNuevo = array1.concat(array2);
// console.log(arrayNuevo);


// SPLICE: 
// PARA ELIMINAR COMPONENTES EN FORMA SIMULTANEA: .SPLICE(A,B)
// A: partir de esta posicion (incluida)
// B: procedemos a eliminar la cantidad de componentes que indicamos aca)
// let array1 = [1,2,3,4,'hola','tete',10];
// let arrayConSplice = array1.splice(4,2); // desde la posicion 4 , eliminame dos componentes
// console.log(arrayConSplice);
//---------------------------------------//
// EJERCICIO: PEDIR POR TECLADO Q INGRESEN SUELFOS, METERLOS DENTRO DEL ARRRAY SIEMPRE Y CUANDO EL NUMERO INGRESADO NO SEA CERO Y DEVOLVER EN PANTALLA LA SUMA DE TODOS LOS SUELDOS INGRESADOS

// const sueldos = [] ;
// let monto;
// let suma = 0;

// do {
//     monto = parseInt(prompt('ingrese un monto'));
//     if (monto != 0) {
//         sueldos.push(monto);
//     }
// } while (monto != 0);
// for (let i = 0; i < sueldos.length; i++) {
//     suma += sueldos[i]
// }
// document.write(suma);

//---------------------------------------//
// SPLICE no solo elimina desde deonde le indico, y la cantidad que le indico:
// tambien puedo indicarle que AGREGUE elementos a un array:
// .SPLICE(POSICION DESDE, 0, LO QUE LE QUIERO AGREGAR)
// POR EJEMPLO:
// let array1 = [1,2,3,4,5,6,7,8,9,10];
// document.write('ANTES' + '<br>')

// for (let i = 0; i < array1.length; i++) {
//     document.write(array1[i] + '<br>')
// }
// //ahora uso el splice para INSERTAR nuevos elementos al array:
// // .splice y entre () pongo(A,0,C)
// //A= DESDE DONDE Y no LO INCLUYO
// //0= SIGNIFICA QUE NO LE BORRO NADA SOLO CERO
// // C= LO QUE LE INSERTO
// array1.splice(1,0,'aaaa','sss','ddd'); //esto no crea un nuevo array sino que modifica el inicial
// document.write('DESPUES' + '<br>')
// for (let i = 0; i < array1.length; i++) {
//     document.write(array1[i] + '<br>')
// }
//hora de la gravacion: 1.48.17


// tambien con SPLICE puedo BORRAR E INSERTAR .
// let array1 = [1,2,3,4,5,6,7,8,9,10];
// document.write('ANTES' + '<br>')
// for (let i = 0; i < array1.length; i++) {
//     document.write(array1[i] + '<br>')
// }

// array1.splice(1,3,'aaaa','sss','ddd'); //desde la posicion 1, borrame tres, y meteme ahi estos
// document.write('DESPUES' + '<br>')
// for (let i = 0; i < array1.length; i++) {
//     document.write(array1[i] + '<br>')
// }

// ************  SLICE  **********//
// ESTE METOCO CORTA EL ARRAY
// .SLICE(DESDE DONDE incluyendo dicha posicion , HASTA DONDE (desde la posicion 0 nuevamente)SIN INCLUIR la posicion indicada)
// NO MODIFICA EL ARRAY INCIAL , retorna otro array nuevo con la seleccion indicada

// let array1 = [1,2,3,4,5,6,7,8,9,10];
// document.write('ANTES de usar el slice' + '<br>')
// for (let i = 0; i < array1.length; i++) {
//     document.write(array1[i] + '-')
// }
// document.write('<br>')
// let arrayUsandoSlice = array1.slice(2,7)
// document.write('DESPUES de usar el slice' + '<br>')

// for (let i = 0; i < arrayUsandoSlice.length; i++) {
//     document.write(arrayUsandoSlice[i] + '-')
// }

//SI SOLO LE PONGO UN PARAMETRO: .SLICE(4) SIN PONERLE UN OTRO PARAMETRO AHI MISMO DENTRO DE LOS PARENTESIS...
// SOLO ME VA A TRAER DESDE ESA POSICION Q LE INDICO HASTA EL FINAL PROQUE NO EL INDIQUE YO EL HASTA DONDE

// let array1 = [1,2,3,4,5,6,7,8,9,10];
// let arrayConSpliceSinSegundoParametro = array1.splice(4)
// console.log(arrayConSpliceSinSegundoParametro);


// si al igual que aca arriba solo le indico un valor y es negativo le estoy idicando que me traiga desde atras:
// let array1 = [1,2,3,4,5,6,7,8,9,10]
// let arrayConSpliceSinSegundoParametro = array1.splice(-2)
// console.log(arrayConSpliceSinSegundoParametro);

//***********EJERCICIO****************** */

// // Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000. Buscar el menor y luego generar otro vector a partir de dicha posición hasta el final.

// // CREO EL ARRAY VACIO
// let vec = []

// // CON EL FOR INDICO QUE LO TENGO QUE LLENAR CON 10 ELEMENTOS
// for ( let i = 0 ; i < 10 ; i++) {
//     //ACA LE INDICO QUE A CADA ELEMENTO DEL VEC (POR ESO LE PONGO EL [SUB ALGO] ) )
//     //LE INDICO QUE CADA UNO DEBE SER RANDOM Y *1001 SIGNIFICA QUE ES HASTA EL NUMERO 1000  (1001 IXCLUIDO)
//     vec[i] = parseInt(Math.random()*1001)
// } 
// //muestro el vector
// document.write('vector original <br>')
// for ( let f = 0; f < vec.length; f++) {
//     document.write(vec[f] + '-');
// }
// //HASTA ACA GENERO ALEATORIAMENTE LOS ELEMENTOS Y LLENO ASI EL ARRAY VACIO.

// let menor = vec[0]
// for (let f = 1; f < vec.length; f++) {
//     if ( vec[f] < menor ) {
//         menor = vec[f]
//         console.log(menor)
//     }
// }
// let vec2 = vec.slice(vec.indexOf(menor))
// console.log(vec2)