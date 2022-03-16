//------------------------------------------------------//
//------------------------------------------------------//
// DOM Ejercicios
//------------------------------------------------------//
//------------------------------------------------------//

// saludo
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

// const nombre = prompt('ingrese su nombre');
// const saludo = document.getElementById('teTe');
// saludo.innerText = 'hola'+ " " + `${nombre}` + '!';
// saludo.style.color = 'pink';
// saludo.style.fontSize = "45px";

//------------------------------------------------------//
// color
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// const color = prompt('ingrese un color en sistema hexadecimal');
// const cuerpo = document.querySelector('body');
// cuerpo.style.backgroundColor = color;

//------------------------------------------------------//
// rgb
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
// rgb(100, 149, 237)

// const color1 = prompt('ingrese un numero del 0 al 255');
// const color2 = prompt('ingrese otro numero del 0 al 255');
// const color3 = prompt('ingrese otro numero mas del 0 al 255');
// const cuerpo = document.querySelector('body');
// cuerpo.style.backgroundColor = (`rgb(${color1},${color2},${color3})`);

//------------------------------------------------------//
// imagen
// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px

// const img = document.getElementById('imgGatito');
// const imgZize = prompt('ingrese un tamaño de imagen: CHICA / MEDIANA / GRANDE');

// switch (imgZize) {
//     case 'chica':
//         img.style.height = '200px';
//         img.style.width = '200px';
//         break;
//     case 'mediana':
//         img.style.height = '500px';
//         img.style.width = '500px';
//         break;
//     case 'grande':
//         img.style.height = '800px';
//         img.style.width = '800px';
//         break;

//     default:
//         document.write('el dato ingresado no entra en los valores entre CHICA / MEDIANA / GRANDE');
// }

//------------------------------------------------------//
// temperatura
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura,
// y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo,
// Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	                        Color
// Menor a 0°	                        Azul
// Mayor o igual a 0° y menor a 15°	    Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	                        Rojo

// const temperaturaActual = prompt('ingrese la temperatura');
// const titulo = document.getElementById('titulo');
// const numero = document.getElementById('numero');

// const changeColour = () => {
//     if (temperaturaActual < 0) {
//         titulo.style.color = ('#0000FF');
//         numero.innerText = `${temperaturaActual}`
//     } else if (temperaturaActual >= 0 && temperaturaActual < 15) {
//         titulo.style.color = ('#00AAE4');
//         numero.innerText = `${temperaturaActual}`
//     } else if (temperaturaActual >= 15 && temperaturaActual < 25) {
//         titulo.style.color = ('#00FF00');
//         numero.innerText = `${temperaturaActual}`
//     }else if (temperaturaActual >= 25 && temperaturaActual < 30) {
//         titulo.style.color = ('#FFFF00');
//         numero.innerText = `${temperaturaActual}`
//     }else if (temperaturaActual >= 30 && temperaturaActual < 35) {
//         titulo.style.color = ('#FF8000');
//         numero.innerText = `${temperaturaActual}`
//     }else {
//         titulo.style.color = ('#FF0000');
//         numero.innerText = `${temperaturaActual}`
//     }
// }
// changeColour();

//------------------------------------------------------//
// progreso
// Crear una barra de progreso con dos divs anidados.
// Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente
// (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

// const divMayor = document.getElementById('container');
// const divMenor = document.getElementById('progreso');
// const cantProgreso = document.getElementById('pr');

// const progreso = prompt('ingrese un porcetaje de progreso');

// const cambiarTamañoBarraProgreso = () => {
//     divMenor.style.width = (`${progreso}%`);
//     cantProgreso.innerText = `${progreso}%`;
// }
// cambiarTamañoBarraProgreso();



//------------------------------------------------------//

// reacciones
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

// const MG = document.getElementById('cantMG');
// const ME = document.getElementById('cantME');
// const MA = document.getElementById('cantMA');

// const reaccionMG = prompt('íngrese la cantidad de MG');
// const reaccionME = prompt('íngrese la cantidad de ME');
// const reaccionMA = prompt('íngrese la cantidad de MA');

// const cantidadReacciones = () => {
//     MG.innerText = `${reaccionMG}`
//     ME.innerText = `${reaccionME}`
//     MA.innerText = `${reaccionMA}`
// }
// cantidadReacciones();



//------------------------------------------------------//

// card
// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto

// const titulo = document.getElementById('titulo');
// const foto = document.getElementById('imagen');
// const ancla = document.getElementById('ahref');

// const pTitutlo = prompt('ingrese un titutlo');
// const pFoto = prompt('ingrese  el link de una imagen');
// const pAncla = prompt('ingrese el link de un articulo sobre la imagen');

// const completarCard = () => {
//     titulo.innerText = `${pTitutlo}`;
//     foto.setAttribute('src', `${pFoto}`);
//     ancla.setAttribute('href', `${pAncla}`)
// }
// completarCard();

//------------------------------------------------------//

// animales

// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

// const primera = document.getElementById('a1');
// const segunda = document.getElementById('a2');
// const tercera = document.getElementById('a3');

// const muestroAnimalUsuario = () => {
//     const animalUsuario = prompt('ingrese un animal: ZORRO / TIGRE ALBINO / ORCA');
//     switch (animalUsuario) {
//         case 'ZORRO':
//             primera.style.display = 'inline';
//             break;
//         case 'TIGRE ALBINO':
//             segunda.style.display = 'inline';
//             break;
//         case 'ORCA':
//             tercera.style.display = 'inline';
//             break;
//         default:
//             document.write('el dato ingresado no entra en los valores entre ZORRO / TIGRE ALBINO / ORCA');
//     }
// }
// muestroAnimalUsuario();

//------------------------------------------------------//

// paises
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.


// const continente = prompt('ingrese un continente');
// const mostrarPaisesDelContinente = () => {
//     const paises = document.querySelectorAll('li');

//     for (let i = 0; i < paises.length; i++) {
//         paises[i].getAttribute('data-continente' = `${continente}`);
         
//             console.log(paises[i]);
        
//     }
// }
// mostrarPaisesDelContinente();


// const am = document.getElementsByClassName('america');
// const eu = document.getElementsByClassName('europa');
// const af = document.getElementsByClassName('africa');
// const oc = document.getElementsByClassName('oceania');

//const mostrarPaisesDelContinente = () => {
//const continente = prompt('ingrese un continente');
//if (continente == america) {
//    am.className += "destacado";
//}
//}

//------------------------------------------------------//


// comidas
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.






//------------------------------------------------------//
// busqueda
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.