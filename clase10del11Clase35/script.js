// CLASE 35
// EJERCICIO 1
// Crear una pagina con un formulario de un input y un boton enviar.
// El input debe admitir solo 1 caracter en el cual el usuario ingresara una letra. 
//Si la letra es una vocal, al hacer click en enviar se debe imprimir un texto en verde que diga "Vocal detectada".
//Si no es una vocal, se debe imprimir un texto en rojo que diga "Consonante detectada".
// Nota: si utilizas un if, solo puede haber if y else, no utilizar elseif. Recordar operadores logicos.


// const input = document.querySelector('#input');
// const boton = document.querySelector('#btn');


// //let vocales = "a"||"e"||"i"||"o"||"u"

// const esVocal = () => {
//     let inputLetra = input.value;//la guardo adentro de la fx cosa de que luego sepa con qué evaluar o comparar
//     let verde = document.querySelector('.verde');
//     let rojo = document.querySelector('.rojo');
//         if ( 
//         //inputLetra = vocales
//         inputLetra == "a"||
//         inputLetra == "e"||
//         inputLetra == "i"||
//         inputLetra == "o"||
//         inputLetra =="u"
//         ){
//         verde.classList.remove('d-none')
//         rojo.classList.add('d-none')
//     } else {
//         rojo.classList.remove('d-none');
//         verde.classList.add('d-none')
//     }
// } 

// boton.addEventListener('click', (e) => {
//     e.preventDefault();
//    esVocal();
// })



// EJERCICIO 2
// Crear un programa en el que se pueda ingresar por un input una temperatura en celcius.
// Al hacer click en un boton "Convertir" se debe imprimir en pantalla su equivalente en farengeit.
// //me traigo los gados
// const inputGradosCelsius = document.getElementById('celsius');
// //me traigo el boton
// const btn = document.getElementById('calcular');
// //me traigo el resultado
// const resultado = document.getElementById('resultado');

//--------------------VERSION MIA TETE-----------------------------------
// let gradosC;
// let gradosF;

// const celciusAFarenheit = () => {
//     gradosC = inputGradosCelsius.value;
//     gradosF = gradosC * (1.8) + 32 ;
//     console.log(gradosF);
//     resultado.value=gradosF;    
// }
// btn.addEventListener('click', celciusAFarenheit);

//-----------------------// VERSION DE DORIS----------------------------------------------
// VERSION DE DORIS
// document.querySelector('#calcular').addEventListener('click', () => {
//     let celsius = parseInt(document.querySelector('#celsius').value);
//     let resultado;
//     if (celsius) {
//         resultado = celsius * (1.8) + 32
//     }
//     console.log(resultado)
//     document.querySelector('#resultado').innerText = resultado + '°F';
// })

//---------------------------------------------------------------//

// EJERCICIO 3
// Crear un programa que pida al usuario ingresar la temperatura actual.
// Al ingresarla se debe imprimir un texto que diga "La temperatura es (temperatura ingresada por el usuario)". El color del texto dependera de la temperatura:

// de -50 a 15 en AZUL
// de 15 a 21 en AMARILLO
// de 21 a 30 en NARANJA
// de 30 a 40 en ROJO

// //me traigo el input
// const inputTemperatura = document.getElementById('temperaturaActual');
// //me traigo el valor del input temperatura
// let valorTemperatura = inputTemperatura.value;
// // me traigo el boton
// const boton = document.getElementById('btn');
// //me traigo el p
// const pColorTemperatura = document.getElementById('color');

// const cambiarColores = () => {
//     pColorTemperatura.innerText = `La temperatura es ${inputTemperatura.value}`

//     if (inputTemperatura.value >= -50 && inputTemperatura.value < 15) {
//         pColorTemperatura.classList.add('azul');
//     } else if (inputTemperatura.value >= 15 && inputTemperatura.value < 21) {
//         pColorTemperatura.classList.add('amarillo');
//     } else if (inputTemperatura.value >= 21 && inputTemperatura.value < 30) {
//         pColorTemperatura.classList.add('naranja');
//     } else if (inputTemperatura.value >= 30 && inputTemperatura.value < 40) {
//         pColorTemperatura.classList.add('rojo')
//     } else {
//         pColorTemperatura.innerText = `La temperatura es ${inputTemperatura.value} no esta en los parametros de color`
//     }
// }
// //hago el evento en el boton
// boton.addEventListener('click', cambiarColores);

//--------------------------------------------------------------------------------------------------//

// EJERCICIO 4
// Crear un programa con un input de tipo color.
// Segun el color que elige el usuario, se debe cambiar el color de fondo del documento al color que eligio al usuario.

// const inputColor = document.getElementById('color');
// let color = inputColor.value;
// let body = document.getElementsByTagName('body');

// inputColor.addEventListener('dblclick', (e) => {
//     e.preventDefault();
//     cambioColor();
// })

// const cambioColor = () => {
//     document.body.style.background = inputColor.value;
//     }



//--------------------------------------------------------------------------------------------------//

// EJERCICIO 5
// Crear un programa que cambie de color una caja de 200x200 pixeles al hacer click en la misma. Inicialmente, la caja sera roja. Al darle click debe cambiar a azul, al darle click otra vez, cambiar a verde, y por ultimo a amarillo.

// const div = document.getElementById('caja');
