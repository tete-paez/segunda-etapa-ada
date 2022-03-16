// link de la clase es:
// https://us02web.zoom.us/rec/play/fRl4y7PTlGdlmmfV3t8mPZ9BiZqUG-cObI7deNfAxOd2X1wjv_i3QWTTttlQIWZEO-QlPdouxiA9JvL1.S5pwlHCekJE-EavU?startTime=1638569064000&_x_zm_rtaid=5zbR0R_lTHmoiIL8Hy_4aQ.1638877197072.5a8d32926d9693b4b99a0a6a18100ed2&_x_zm_rhtaid=756
// con este link acceso al gitHib de pilar que explica las expresiones regulares 
// https://github.com/PiliFigueroa/expresiones-regulares/blob/master/Expresiones_Regulares.txt

// ***************************************************

// REGEX

// QUIERO VALIDAR SI DENTRO DE ALGO HAY O NO tal cosa, esa validacion la da el test del RegExp 
// por ejemplo pido que ingresen un valor y usando regex, test, chekeo si eso que pongo en el test esta o no. 
//  EJEMPLO:

// let valor = prompt('ingrese un valor positivo de 3 digitos');

// let patron = new RegExp('^[0-9]{3}$')
// //el ^ es el inicio de la expresion 
// //el $ es el final de la expresion
// //los [] en dentro del rango
// //los {} es la cantidad exacta
// if (patron.test(valor)) {
//     //si true
//     console.log('el valor ingresado es correcto')
// } else {
//     // si false
//     console.log('el valor ingresado es incorrecto')
// }

// ***************************************************

// operador ternario:

// sirve para simplificar un if donde si true pasa algo si false pasa otra ConstantSourceNode.lengthpor ejemplo
// (condicion) ? si es tru se ejecuta esto detras del signo de ptrgunta : si es false se ejecuta esto otro detras de los dos puntos
// por ejemplo:
// let numero  ; // no lo defino, no le ody ningun valor si lueg lo defino como = a 8 x ejemplo, salta en el console log que numero si esta definido
// numero ? console.log('numero esta definido') : console.log('numero no esta defiinido');
// al no estas definido entra directo al false.
// no puedo usar el && ni el || pero puedo usar >mayor y menor<
// si quiero que se ejecute algo si algo es true se pone asi: &&
// numero > 10 && console.log('numero es mayor a 10')
// no da espacio a que hacer si es false
// porque no habria que ejer¿curtar nada si lo fuese

// ***************************************************

// otro ejercicio:

// debo llenar un array amigos y luego chekear si dentro de ese grupo de amigos esta "sol"

// let amigos = [] ; //creo un array vacio

// // //genero un for donde me pida cinco veces agregar amigos a ese grupo o array

// for (let i = 0; i < 5 ; i++) { // pongo < 5 porque cuando llega a cinco corta, o sea pregunta 5 veces
//     let amigo = prompt('ingrese el nombre de un amigo');
//     amigos.push(amigo); // aca meto dentro del array amigos, al amigo que ingreso por prompt con el PUSH
// }
// // ahora debo nuevamente recorrer el array de amigos pero chekeando si alguno de esos es "sol"
// // entonces creo el regEx que seria el "patron"
// let patron = /sol/ ;
// for (let i = 0; i < amigos.length; i++) {
//     // UNA OPCION ES ASI:
//     //patron.test(amigos[i]) ? console.log('sol se encuentra en tus amigos') : console.log('sol no se encuentra entre trus amigos')
//     // eso significa que testeo el patron si esta sol dentro de amigos por eso el sub i [i] entrando a cada amigo y chekeando si es coincidencia con sol 
//     //******************************** */
//     //OTRA OPCION ES ASI:
//     patron.test(amigos[i]) ? console.log(`iteracion ${i}: `, true) : console.log(`iteracion ${i}: `, false)
//     // y aca te muestra cual es los i es sol
// }

//*****OTRO EJERCICIO */
// genero un for donde me pida cinco numeros para emter dentro del array de numeros u luego validar si los numeros ingresados son mayores a 10
// let numeros = [];
// for (let i = 0; i < 5; i++) {
//     let numero = parseInt(prompt('ingrese un numero'));
//     numeros.push(numero)    
// }
// for (let i = 0; i < numeros.length; i++) {
//     numeros[i] > 10 ? console.log(`iteracion ${i}: `, true) : console.log(`iteracion ${i}: `, false)
// }


// ***************************************************
//**********OTRO EJERCICIO CREANDO ELEMENTOS DESDE EL DOM */
// const alumnas = ["juana", "marcela", "teresa", "micaela", "josefina"];
// // me traigo del dom la lista desordenada
// const lista = document.getElementById('listaDesordenada');

// //ANTES AGREGABAMOS ELEMENTOS ASI:
// const li = document.createElement('li');
// //Y LOS METIAMOS CON EL APPENDCHILD ASI:
// lista.appendChild(li);

//pero ahora no hacemos de una forma mas simple:

// lista.innerHTML = `<li>${alumnas[0]}</li> 
//                     <li>${alumnas[1]}</li> 
//                     <li>${alumnas[2]}</li> 
//                     <li>${alumnas[3]}</li> 
//                     <li>${alumnas[4]}</li>  
// `

// TAMBIEN PODRIA HACERLO CON UN FOR
// for (let i = 0; i < alumnas.length; i++) {
//     lista.innerHTML += ` <li class="distinto" >${alumnas[i]}</li>`
//     // adentro de lista meto los li pero con sub i [i]
//     // pongo += porque si pongo solo = me reemplaza las alumnas y queda siempre una sola (la ultima del array)
//     // con el + las suma a todas, entonces pongo las dos += y las suma y las deja a todas
//     // tambien puedo ponerle una clase desde el dom
    
// }







// ***************************************************

// F O R M U L A R I O MUY GENIAL CON PILAR

// ***************************************************

// VARIABLES GLOBALES DE ELEMENTOS DE MI FORM
const formulario = document.querySelector("#formulario")
let inputUsername = document.querySelector("#username")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
let inputRepeatPassword = document.querySelector("#repeatPassword")
let inputSubmit = document.querySelector("#submit")

// VARIABLES DEL MENSAJE DE ALERTA O EXITO
const success = document.querySelector('#password-success')
const error = document.querySelector('#password-alert')

// Declaro un objeto con los datos que quiero guardar de los usuarios, y los inicializo en false para posterior validacion
const fields = {
    username: false,
    email: false,
    password: false,
    repeatPassword: false
}
//creo una funcion removeWhitespaces cuya funcion sea al elemento que le paso x parametro reemplazarle los espacios en blanco (\s/g) por la nada misma '' que vendria a ser esto mismo (/\s/g,'')
// Remueve todos los espacios en blanco del elemento que le paso
const removeWhitespaces = (element) => element.replace(/\s/g,'')

// Manipulacion del DOM, le paso un booleando para elegir si quiero prender las alertas de error o exito,
// y un parametro field para que solo ese elemento cambie el fondo
const formAlerts = (boolean, field) => {
    if (boolean) {
        success.classList.remove('d-none')
        error.classList.add('d-none')
        field.style.backgroundColor = '#fff'
        inputSubmit.removeAttribute('disabled','disabled')
    } else {
        error.classList.remove('d-none')
        success.classList.add('d-none')
        field.style.backgroundColor = 'pink'
        inputSubmit.setAttribute('disabled', 'disabled')   
    }
}

// Valida que mis inputs no esten vacios, y en caso de dar true me guarda el value del input en mi objeto, exactamente en la propiedad que corresponde
// porque el input.name es identico al nombre que le di a las propiedades de mi objeto
const validateField = (input) => {
    if (input.value != '') {
        fields[`${input.name}`] = removeWhitespaces(input.value)
    } else {
        return false
    }
}

// Valida que las contrasenas sean iguales
const validatePassword = (pass, repeatPass) => {
    if (pass.value === repeatPass.value) {
        validateField(pass)
        validateField(repeatPass)
    } else {
        return false
    }
}

// Recibe un input y de acuerdo al input.name valida cada uno de mis inputs de forma dinamica
const validateForm = (input) => {
    switch (input.name) {
        case 'username':
            validateField(inputUsername)
            break
        case 'email':
            validateField(inputEmail)
            break
        case 'password':
            validatePassword(inputPassword, inputRepeatPassword)
        case 'repeatPassword':
            validatePassword(inputPassword, inputRepeatPassword)
            break
    }
    // Condicional que me valida que todas las propiedades de mi objeto tienen guardada informacion (ya no son false)
    // En caso de ser true, uso mi funcion que manipula el DOM para mostrar los mensajes de exito, caso contrario los de error
    if (fields.username && fields.email && fields.password && fields.repeatPassword) {
        formAlerts(true, input)
    } else {
        formAlerts(false, input)
    }
}

// EVENTOS
inputUsername.onblur = (e) => validateForm(e.target)
inputEmail.onblur = (e) => validateForm(e.target)
inputRepeatPassword.onkeyup = (e) => validateForm(e.target)

formulario.onsubmit = (e) => {
    e.preventDefault()
    formulario.reset()
}