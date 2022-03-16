// // # Ejercicio
// // - Crear un formulario con email, password, repeatPassword y un checkbox de aceptar terminos y condiciones.
// // - Debe hacer una validacion de que ningun campo este vacio y que las contrasenas coincidan.
// // - Si la validacion falla, se debe impedir que el usuario se registre.
// // - Si la validacion es correcta, mostrar un mensaje de exito.
// // - Los mensajes de fallo o exito no pueden verse al mismo tiempo.
// // - Al hacer click en registrarse, no se debe recargar la pagina.

// // DECLARO LAS VARIABLES GLOBALES
// const formulario = document.getElementById("formulario");
// let mail = document.getElementById('inputEmail');
// let password = document.getElementById('inputPassword');
// let repeatPassword = document.getElementById('inputRepeatPassword');
// //let checkBox = document.getElementById('checkBox');
// let boton = document.getElementById('submit');

// // AHORA DECLARO UNA NUEVA FUNCION PARA TRAERME LAS NUEVAS VARIABLES EN LAS CUALES DEBO GUARDAR EL VALOR DE ESTAS VARIABLES GLOBALES (primero llamo las variables globales paratraerme el Input, pero ahora me traigo el VALOR e ese input)

// let guestMail, guestPassword, guestRepeatPassword, guestCheckBox; 

// // creo la funcion PARA TRAERME LAS NUEVAS VARIABLES EN LAS CUALES se guarda lo que el usuario escribe y los llamo
// const getGuestData = () => {

//     guestMail = mail.value;
//     guestPassword = password.value;
//     guestRepeatPassword = repeatPassword.value;
//     //guestCheckBox = checkBox.value;
//     //usando formulario.resset borro todo lo que escribi en los inputs, que sea igual que ponerle nombre = " " vacio
//     formulario.reset();
// }
// // creo una funcion para mostrar en pantalla eso que el usuario escribe

// const printGuestData = () => {
//     let dataContainer = document.querySelector('.guestData');
//     let pMail = document.querySelector('.mail');
//     let pPassword = document.querySelector('.password');
//     let pRepeatPassword = document.querySelector('repeatPassword');
//     //ahora tengo que meter esta info que traje usando innertext
//     pMail.innerText = `E-MAIL: ${guestMail}`;
//     pPassword.innerText = `CONTRASEÑA: ${guestPassword}`;
//     pRepeatPassword.innerText = `REPETIR CONTRASEÑA: ${guestRepeatPassword}`;
//     dataContainer.style.display = 'block'
// }

// boton.addEventListener('click', (e) => {
//     e.preventDefault();
//     getGuestData();
//     printGuestData();
// })