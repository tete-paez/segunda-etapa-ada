//la estructira do while se ejecuta una sola vez
// do {
    
// } while (condition);

/*
Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0.
*/

// let valor;
// do {
//     valor = parseInt(prompt('Ingrese un valor entre 0 y 999:', ''));
//     document.write('El valor ' + valor + ' tiene ');
//     if (valor < 10) {
//         document.write('Tiene 1 digitos');
//     } else {
//         if (valor < 100) {
//             document.write('Tiene 2 digitos');
//         } else {
//             document.write('Tiene 3 digitos');
//         }
//     }
//     document.write('<br>');
// } while (valor != 0);


// En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
// Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
// a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

// Estado de la cuenta	'Acreedor' si el saldo es >0.
// 			'Deudor' si el saldo es <0.
// 			'Nulo' si el saldo es =0.
// b) La suma total de los saldos acreedores.


//let suma=0;

// do {
//     let nombreDelCliente= parseInt(prompt("Ingrese el Nombre del Cliente"))
//     let saldoActual=parseInt(prompt("Ingrese el saldo Actual de la cuenta"))
//     let numeroDeCuenta = parseInt(prompt("Ingrese el numero de cuenta, debe de finalizar con un numero negativo"))

//     if (saldoActual>0){
//         document.write("Estado de cuenta : Acredor")
//     }else if(saldoActual<0){
//         document.write("Estado de cuenta : Deudor")
//     }else{
//         document.write("Estado de cuenta : Nulo")
//     }
// } while (saldoActual>0){
//     suma=+saldoActual
// };
//*************************************************// 
// let suma = 0

// do {
//     let nombre = prompt('ingrese su nombre');
//     let saldo = parseInt(prompt('ingrese el saldo actual'));
//     let cuenta = parseInt(prompt('ingrese su numero de cuenta, debe de finalizar con un numero negativo"'));
    
//     if (saldo > 0) {
//         document.write(`su numero de cuenta es ${cuenta}`)
//         document.write('<br>');
//         document.write(`cliente: ${nombre}`)
//         document.write('<br>');
//         document.write('Estado de cuenta : Acredor')
//     } else if (saldo < 0) {
//         document.write(`${cuenta}`)
//         document.write('<br>');
//         document.write(`${nombre}`)
//         document.write('<br>');
//         document.write('Estado de cuenta : Deudor')
//     } else {
//         document.write(`${nombre}`)
//         document.write('<br>');
//         document.write(`${cuenta}`)
//         document.write('<br>');
//         document.write('Estado de cuenta : Nulo')
//     }
// } while (saldo > 0){
//     suma = suma + saldo
// };
