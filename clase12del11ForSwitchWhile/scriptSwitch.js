//  las estructuras SWITCH sirven para reemplazar las estructuras if y else if donde la condicion SE VERIFICA SI ES IGUAL A CIERTO VALOR 
// switch (variable que vamos a analizar y verificar si es igual a algo ) {
//    case value:            //ACA SE ANAIZA EL PRIMER CASO... COMPARAMOS LA VARIABLE CON EL CASE 
//               break;      //AL FINALIZAR CADA CASE DEBEMOS ITILIXAR LA PALABRA BREAK COM PARA CORTAR
//                            PUEDE HABER MUCHOS CASE
//    case value:            //ACA SE ANAIZA EL PRIMER CASO... COMPARAMOS LA VARIABLE CON EL CASE 
//               break;      //AL FINALIZAR CADA CASE DEBEMOS ITILIXAR LA PALABRA BREAK COM PARA CORTAR
//                            PUEDE HABER MUCHOS CASE
//    case value:            //ACA SE ANAIZA EL PRIMER CASO... COMPARAMOS LA VARIABLE CON EL CASE 
//               break;      //AL FINALIZAR CADA CASE DEBEMOS ITILIXAR LA PALABRA BREAK COM PARA CORTAR
//                            PUEDE HABER MUCHOS CASE
//    default:               // si llega aca es como ejecutar un else, y pareciera que no es valido el valor ingresado o no se puede comparar con el valor inicial de la variable
//    }

//EJEMPLO:
// let valor;
// valor = parseInt(prompt('ingrese un numero entre el 1 yel 5'));

// switch (valor) {
//     case 1:
//         document.write('uno')
//         break;
//     case 2:
//         document.write('dos')
//         break;
//     case 3:
//         document.write('tres');
//         break;
//     case 4:
//         document.write('cuatro');
//         break;
//     case 5:
//         document.write('cinco');
//         break;
//     default:
//         document.write('el numero ingresado no enrta en los valores entre el 1 y el 5');
// }

// let nombre;
// nombre = prompt('ingrese un nombre: maria , ana o pia');
// // en el case pongo el nombre del case entre ''
// switch (nombre) {
//     case 'maria':
//         document.write('el nombre indicado es maria')
//         break;
//     case 'ana':
//         document.write('el nombre indicado es ana')
//         break;
//     case 'pia':
//         document.write('el nombre indicado es pia')
//         break;
//     default:
//         document.write('el nombre ingresado no esta entre los sugeridos')
// }

// let palabra;
// palabra = prompt(' ingrese palabra para ser traducida en ingles; casa , perro');

// switch (palabra) {
//     case 'casa':
//         document.write('house')
//         break;
//     case 'perro':
//         document.write('dog');
//         break;
//     default:
//         document.write('la palabra ingresada no corresponde');
// }