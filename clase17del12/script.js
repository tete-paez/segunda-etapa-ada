// Tenemos una matriz que tiene la estructura de una tabla , en donde el primer array contiene el nombre de las columnas, y los siguientes array son las filas donde se ingresan los registros con sus datos en el orden de las columnas. Por ejemplo, si el índice 1 es la columna nombre todas las demás "filas" deben tener el dato nombre en esa posición. La tabla siempre tiene una columna id, que es un identificador único para cada registro (un número incremental).

const tabla = [
    //['id', 'nombre', 'edad', 'email'],
    [1, 'Ada', 33, 'ada@gmail.com'],
    [2, 'Grace', 45, 'grace@gmail.com'],
]

//Definí la función consultarTabla que tome por parámetro un número id, un string columna, y una matriz tabla y que retorne el valor del dato de la columna dada para el registro con el id indicado.
/*
 consultarTabla(2, 'nombre', tabla)
'Grace'
 consultarTabla(1, 'email', tabla)
'ada@gmail.com'
*/

//***************************   RESOLVEMOS  ***********************//
// 1- DE ESTA FORMA VEMOS / ACCEDEMOS A LO QUE TIENE ADENTRO ESE ARRAY DE ARRAYS
//TIP: ENTRO AL ARRAY DE ARRAYS USANDO [I]
/* 
// hacemos una funcion que reciba como parametro un array, con el for entramos dentro de ese array y vemos que tiene adentro
const iterar = (array) => {
    for (let i = 0; i < array.length; i++) {
        // aca mostramoslo que va a tener adentro cualqier array
        console.log(array[i]) 
        
    }
}
//y aca mostramos lo que tiene adentro el array y derrays que se llama tabla
console.log(iterar(tabla));
*/

// 2- DE ESTA FORMA VEMOS Y ACCEDEMOS AL CONTENIDO DE ESOS ARRAYS DENTRO DEL ARRAY MAYOR
//  TIP: ENTRO A CADA ARRAY DENTRO DEL ARRAY MAYOR USANDO [I][J]
/*
const iterar = (array) => {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
           console.log(array[i][j])
           //aca entro a cada array dentro del array[i]
           //y tambien entro a cada elemento de esos arrays por eso el [j]
       } 
        
    }
}
//y aca mostramos lo que tiene adentro los arrays por eso el [j]
console.log(iterar(tabla));
*/

//asi resuelvo el ejercicio :3. JavaScript avanzado: 3. Matrices; 9. Consultar tabla
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
/*
const iterar = (array) => {
    let emails = [];
    //aca declaro esta variable que es donde voy a guardar el dato que estoy necesitando encontrar (acceder) 
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            //una vez que ya accedo adentro con el [i] y el [j], cambio el [j] por la posicion de lo que quiero encontrar: los mails
            // console.log(array[i][3]) asi chequeo que puedo acceder
            //porque los mails estan en la posicion 3
            //por ultimo hacemos un operador ternario: si J es = 3 entonces pusheo eso dentro de la variable mails
            j === 3 ? emails.push(array[i][3]) : false
        }
    }
    return emails;
}

console.log(iterar(tabla));
*/
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS
// ME SIRVE PARA EL TP PARA ACCEDER AL ARRAY DE ARRAYS

// COMO ACCEDO A LA INFO DENTRO DEL ARRAY DE ARRAYS??
// PUEDO CON UN FILTER Y TAMBIEN PUEDO CON UN FOR OF: 

// para mostrar primero me traigo el array de arrays asi es mas facil:
const ventas = [
    [
        1,
        new Date(2019, 1, 4),
        "Grace",
        "Centro",
        ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    ],
    [
        2,
        new Date(2019, 0, 1),
        "Ada",
        "Centro",
        ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    ],
    [
        3,
        new Date(2019, 0, 2),
        "Grace",
        "Caballito",
        ["Monitor ASC 543", "Motherboard MZI"],
    ],
    [
        4,
        new Date(2019, 0, 10),
        "Ada",
        "Centro",
        ["Monitor ASC 543", "Motherboard ASUS 1200"],
    ],
    [
        5,
        new Date(2019, 0, 12),
        "Grace",
        "Caballito",
        ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
    ],
]



//supongamos que quiero traerme las ventas de Grace:

//  quiero traerme las ventas de Grace PUEDO CON UN FILTER:
//  quiero traerme las ventas de Grace PUEDO CON UN FILTER:
//  quiero traerme las ventas de Grace PUEDO CON UN FILTER:
/*
const encontrarVentasdeGraceConunFilter = () => {
    //declaro una variable porque sera donde guarde las ventas de grace
    let ventasGrace = [];
        // aca "filtro"  el array de arrays
        ventas.filter(venta => {
            //aca hago un if, usando el operador ternario:
            // SI  venta ( q es un array dentro del array de arrays) contiene Grace, ENTONCES metelo dentro de ventasGrace
            venta.includes('Grace') && ventasGrace.push(venta);
    }) 
    return ventasGrace;
}
console.log(encontrarVentasdeGraceConunFilter());
*/

// quiero traerme las ventas de Grace TAMBIEN PUEDO CON UN FOR OF: 
// quiero traerme las ventas de Grace TAMBIEN PUEDO CON UN FOR OF: 
// quiero traerme las ventas de Grace TAMBIEN PUEDO CON UN FOR OF: 
/*
const encontrarVentasdeGraceConunforOf = (elements) => {
    //declaro una variable porque sera donde guarde las ventas de grace
    let ventasGrace = [];
    //con el for of recorro el array de arrays
    for (let element of elements) {
        //aca hago un if, usando el operador ternario:
        // SI  element ( q es un array dentro del array de arrays) contiene Grace, ENTONCES metelo dentro de ventasGrace
        element.includes('Grace') && ventasGrace.push(element);
    }
    return ventasGrace
}
console.log(encontrarVentasdeGraceConunforOf(ventas));

*/

// FUNCION PARA TRAERME DEL ARRAY DE ARRAYS, LOS ARRAYS POR NOMBRE:
// FUNCION PARA TRAERME DEL ARRAY DE ARRAYS, LOS ARRAYS POR NOMBRE:
// FUNCION PARA TRAERME DEL ARRAY DE ARRAYS, LOS ARRAYS POR NOMBRE:
// FUNCION PARA TRAERME DEL ARRAY DE ARRAYS, LOS ARRAYS POR NOMBRE:

// a esta funcion le paso dos parametros, uno de ellos es lo que tiene que encontrarme
const encontrarNombre = (elements, nombre) => {
    //declaro una variable porque sera donde guarde las ventas de grace
    let arrayFiltradoPorNobre = [];
    //con el for of recorro el array de arrays
    for (let element of elements) {
        //aca hago un if, usando el operador ternario:
        // SI  element ( q es un array dentro del array de arrays) contiene Grace, ENTONCES metelo dentro de arrayFiltradoPorNobre
        element.includes(nombre) && arrayFiltradoPorNobre.push(element);
    }
    return arrayFiltradoPorNobre
}

const encontrarIds = (array) => {
    const traermeIds = [];
    for (let i = 0; i < array.length; i++) {
        // aca accedo nuevamente al array de arraus filtrado x el nombre Grace
        //console.log(array[i])
        //ahora hago un for de nuevo para acceder a la posicion donde estan los ids
        for (let j = 0; j < array[i].length; j++) {
            //por ultimo hacemos un operador ternario: si J es = 0 (porque el id esta en la posicion 0) entonces pusheo eso dentro de la variable
                j === 0 && traermeIds.push(array[i][j])
        }

        
    }
    return traermeIds
}
console.log(encontrarIds(encontrarNombre(ventas, 'Grace')));
console.log(encontrarIds(encontrarNombre(ventas, 'Ada')));


// SI LOS IDS FUERAN PRECIOS, LOS PUEDO SUMAR:
// SI LOS IDS FUERAN PRECIOS, LOS PUEDO SUMAR:
// SI LOS IDS FUERAN PRECIOS, LOS PUEDO SUMAR:
// SI LOS IDS FUERAN PRECIOS, LOS PUEDO SUMAR:

const sumarIds = (array) =>{
    let suma = 0; //acumulador
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}
console.log(sumarIds(encontrarIds(encontrarNombre(ventas, 'Grace'))));