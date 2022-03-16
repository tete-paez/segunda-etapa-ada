// ******* ARRAY ********//
// let miArray = ["uno", 1, false, true, "string"];
// console.log(miArray);
// console.log(miArray.length);

//un ejercicio//
// let mostrarFecha = (mes,dia) => {
//     let numeroMes = parseInt(prompt('ingrese un numero de mes'));
//     document.write(`el numero ingresado corresponde al mes de ${mes[numeroMes-1]}`);
//     document.write('<br/>');
//     document.write(`y tiene ${dia[numeroMes-1]} dias`)
// }
// let mes = ['enero','febrero','marzo', 'abril', 'mayo','junio','julio','agosto','septiembre','octubre', 'noviembre', 'diciembre'];
// let dia = [31,28,31,30,31,30,31,31,30,31,30,31];

// mostrarFecha(mes,dia);

// Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

// let numero = parseInt(prompt('ingresar un valor del 1 al 10'))
// for (let i = 1 ; i <= 12 ; i++){
//     document.write(`</br>`)
//     document.write(numero + '*' + i + '=' + numero*i);
// }

//explico el for:
// primera parte: let i = 1 , la i vendria a ser el numero con el que se multiplicaria...
// si el cliente dice 5 la i seria el 
// 1 en le primer vuelta
// 2 en la segunda vuelta 
// 3 en la tercer vuelta
// y el sesultado seria por 1, luego por 2, luego por 3 y asi hasta llegar a 12 aca abajo
// segunda parte del for: dice ,i <= 12,
// tercera parte: el i++ indica que i aumenta y asi pasa a valer mas

// let aDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// //console.log(aDias.length)
// for (let contador=0;contador<7;contador++){
//     document.write(`El valor de la posicion ${contador} es ${aDias[contador]}<br>`)
// }

// let personas = ['maria','jose','felipe','josefina','pepe'];
// for (let i = 0 ; i < personas.length ; i++) {
//     if (personas[i] == 'pepe'){
//         document.write('pepe is in the house')
//         document.write(`</br>`)
//     }
// }
// document.write(`${personas} </br>`)