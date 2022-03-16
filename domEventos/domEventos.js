//--------------------------------- CLASE 3 DE NOVIEMBRE
// DOM EVENTOS

// // declaro la variable link y me traigo el ANCLA 
// const link = document.querySelector('a')

// //ACA ME TRAIGO TODO EL ANCLA (LO QUE ENTRA DENTRO DEL A)
// console.log(link)

// //ACA SOLO EL ATRIBUTO HREF (SOLO EL LINK)
// console.log(link.getAttribute('href'))

// // link.setAttribute('atributo', 'valor del atributo') ACA LE CAMBIO EL VALOR DEL HREF CON SET ATTRIBUTE
// link.setAttribute('href', 'https://getbootstrap.com/');

// let miArray = [1,10,'tete','dosmil'];

//ACA ME TRAIGO TODOS LOS LI (ME LOS LEE COMO ARRAY)
        // const lista = document.querySelectorAll('li')
        // console.log(lista)
//DEDE LA CONSOLA PONGO "LISTA [3] Y ME VA A TRAER NEGRO"

//CREO UN BOTON Y ME LO TRAIGO
// const boton = document.querySelector('button');

//ACA le CREO UN AVENTO A ESE BOTON, QUE CUANDO LO TOQUE ALGO PASE
//boton.addEventListener('el evento click',lo q qiero q pase (una funcion))
        // boton.addEventListener('click', () => {
        //     console.log('hiciste un click')
        // });

        // const miMensaje = () => {
        //     console.log('hiciste un click')
        // }
        // boton.addEventListener('click', miMensaje)
// explicando lo de aca arriba:
// constante.addEventListener(aca adentro va el Evento,COMA, y aca va la funcion y la llamo poniendo los () y cierro)
//en esos parentesis violetas llamo a la funcion que quiero que se ejecute linea 29

// // HAGO QUE EL BOTON CAMBIE DE COLOR:CON UN CLICK
// // DECLARO LA CONSTANTE Y ME TRAIGO EL BOTON
// const boton = document.getElementById('btnChangeColour');
// //CREO LA FUNCION DE AMBIAR EL COLOR
// const changeColour  = () => {
//     boton.style.backgroundColor = 'red';
// }
// // CREO QUE EVENTO CKICK EN EL BOTON
// boton.addEventListener('click', changeColour);

// // HAGO QUE EL BOTON CAMBIE DE COLOR: CON UN DOBLE CLICK
// // DECLARO LA CONSTANTE Y ME TRAIGO EL BOTON
// const boton = document.getElementById('btnChangeColour');
// //CREO LA FUNCION DE AMBIAR EL COLOR
// const changeColour  = () => {
//     boton.style.backgroundColor = 'red';
//     boton.innerHTML = 'ahora cambie de color';
// }
// // CREO QUE EVENTO CKICK EN EL BOTON
// boton.addEventListener('dblclick', changeColour);

// Disponer un div de 800x70 píxeles. Al hacer doble clic redimensionarlo a 250x250 píxeles y si se hace doble clic nuevamente retornar al tamaño 800x70


// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO
// NUNCA TERMINE DE HACERLO

// const barra = document.querySelector('div');
// const redimension1 = () =>{
//     barra.style.width ='250px';
//     barra.style.height ='250px';
// }
// const dimension1  = () =>{
//     barra.style.width ='800px';
//     barra.style.height ='70px';
// }

// const eventoCambioDimension = () => {
//     if (barra.addEventListener('dblclick',redimension1))
// }

