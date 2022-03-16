// // ------------------------------------------------------------ CLASE 5 DE NOVIEMBRE
// // si quiero ejecutar dos funciones con el mismo evento: x/ej: btn.addEventListener('click' , y aca llamo a otra funcion flecha ()=> { aca adentro llamo a las dos funciones que qiero que se ejecuten, x ejemplo toco el boton y se cambie de color el fonto Y la letra} )

// // DECLARO LAS VARIABLES GLOBALES
// const formulario = document.getElementById("formulario");
// let nombre = document.getElementById('idNombre');
// let apellido = document.getElementById('idApellido');
// let email = document.getElementById('idMail');
// let contraseña = document.getElementById('idContraseña');
// let confirmarContraseña = document.getElementById('idConfirmarContraseña');
// let boton = document.getElementById('submit');

// // AHORA DECLARO UNA NUEVA FUNCION PARA TRAERME LAS NUEVAS VARIABLES EN LAS CUALES DEBO GUARDAR EL VALOR DE ESTAS VARIABLES GLOBALES (primero llamo las variables globales paratraerme el Input, pero ahora me traigo el VALOR e ese input)
// // los declaro
// let elNombre;
// let elApellido;
// let elMail;
// let laContraseña;
// let laContraseñaConfirmada;



// // creo la funcion PARA TRAERME LAS NUEVAS VARIABLES EN LAS CUALES se guarda lo que el usuario escribe y los llamo
// const traermeInformacionDesdeFormulario = () => {
//     elNombre = nombre.value;
//     elApellido = apellido.value;
//     elMail = email.value;
//     laContraseña = contraseña.value;
//     laContraseñaConfirmada = confirmarContraseña.value;

//     // con el console.log los muestro
//     //console.log(`${elNombre}`, `${elApellido}`, `${elMail}`, `${laContraseña}`, `${laContraseñaConfirmada}`);

//     // ahora que ya los puedo ver y "guardar" los vuelvo a llamar y les "borro" el contenido. sigue estango guardado PERO en el browser se muestran vacios
//     nombre.value = "";
//     apellido.value = "";
//     email.value = "";
//     contraseña.value = "";
//     confirmarContraseña.value = "";
// }
// // creo una funcion para mostrar en pantalla eso que el usuario escribe
// const imprimirEnPantalla = () => {
//     // aca me traigo la cajita del html que cree para almacenar estos datos que quiero mostrar en pántalla
//     let cajita = document.querySelector('.miCajaConInformacion');
//     let pNombre = document.querySelector('.nombree')
//     let pApellido = document.querySelector('.apellidoo');
//     let pMail = document.querySelector('.maill');
//     let pContraseña = document.querySelector('.contraseñaa');
//     let pRepetirContraseña = document.querySelector('.repetirr');

//     // ahora necesito que estos datos se impriman en el browser:
//     // OJO si pongo:
//     // OPCION 1
//     // pApellido.innerHTML = elApellido // me lo va a pisar al <p>nombre que yo hice
//     // OPCION 2
//     // pApellido.innerHTML += elApellido //  me lo concatena
//     // OPCION 3 CON TEMPLATE STRING y puedo ELIMINAR lo que escribi en el html <p class="nombree" >NOMBRE: </p>, lo dejo vacio y lo escribo en el template DATAZO: ojo con las contraseñas, porque solo en el template se ven
//     // pNombre.innerText = `NOMBRE: ${elNombre}`;
//     // ACA LO HICE DE VARIAS FORMAS PÁRA VER COMO FUNCIONAN CADA UNO

//     pNombre.innerText = `NOMBRE: ${elNombre}`;
//     pApellido.innerText = elApellido;
//     pMail.innerText = elMail;
//     pContraseña.innerText = `contraseña: ${laContraseña}`;
//     pRepetirContraseña.innerText = `contraseña: ${laContraseñaConfirmada}`;
//     //acatambien llamo al div y le cambio el style para que se vea
//     cajita.style.display = 'block';
// }


// // ahora creo una funcion para validar que ambas contraseñas ingresadas son iguales, pero OJO!! EL EVENTO VA EN EL INPUT. porque? porque es mejor ir validando a medida que el usuario va escribiendo... en lugar e escribirlo mal y te avise una vez que ya lo escribiste
// const validandoContraseñas = () => {
//     let divVerde = document.querySelector('.correcto');
//     let divRojo = document.querySelector('.incorrecto');
//     if (contraseña.value === confirmarContraseña.value) {
//         divVerde.style.display = 'block';
//     } else {
//         divRojo.style.display = 'block';
//     }
// }
// confirmarContraseña.addEventListener('keypress', validandoContraseñas)

// boton.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log(e);
//     traermeInformacionDesdeFormulario();
//     //y aca llamo a la funcion de imprimir en pantalla
//     imprimirEnPantalla();
// })

// //   SET - ATTRIBUTE
// // VARIABLE.setAttribute('ATRIBUTO', 'NOMBRE DEL ATRIBUTO')
// // POR EJEMPLO: 
// // boton.setAttribute('id','nombre')
// // PODEMOS DESHABILITAR BOTONES.... ENTONCES SI LAS CONTRASEÑAS NO COINCIDEN... LE DESABILITAMOS EL BOTON... Y HSATA QUE NO HAYA COHINCIDENCIA NO LO HABILITA
// //  boton.setAttribute('DISABLE','DISABLED')

// // E.TARGET
// // por ejemplo:
// // apellido.addEventListener('click', (e) => console.log(e.target.value))
// // esta es la manera de acceder al valor de mi input, sin star guardandolo en una variable todavia.
// // lo uso cuando quiero saber si logro o no captarle el valor

// // UNA NUEVA FORMA DE CREAR UN EVENTO
// // con el addEventListener
// // boton.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     traermeInformacionDesdeFormulario();
// //     imprimirEnPantalla();
// // })
// // // con el metodo onClick (CUANDO  recibe un click)
// // boton.onClick = (e) => {
// //     e.preventDefault();
// //     traermeInformacionDesdeFormulario();
// //     imprimirEnPantalla();
// // }