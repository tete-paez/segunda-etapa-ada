const especies = ["🍋", "🍒", "🍑", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆"]
const productos = ["🍋", "🍒", "🍑","🍒","🍒", "🥥", "🍋", "🍋", "🍒", "🍑","🍋", "🍋", "🍑", "🥥","🍋", "🍒", "🍑", "🥥","🍋", "🍒", "🍑","🍋", "🍋", "🥥","🍋", "🍒", "🍑", "🥥", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆","🥑", "🥔", "🌽", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆", "🍄", "🥦", "🍆", "🥦", "🍆","🥑"]

/* 1) consultarStock() que reciba un producto. La funcion debe devolver true/false segun si hay o no hay stock del producto. */

const consultarStock = (producto) => productos.includes(producto)

// consultarStock("🍋") //=> true
// consultarStock("🥕") //=> false

/* 2) ordenarBodega() que reciba un producto. La funcion debe retornar un nuevo array con unicamente los productos elegidos. */
const ordenarBodega = (producto) => {
    const newArray = productos.filter(element => element === producto)
    return newArray
}

// console.log(ordenarBodega("🍋"))
// console.log(ordenarBodega("🥑"))

/* 3) cantidadEnBodega() que reciba un producto. La funcion debe devolver la cantidad total que hay en stock de ese producto. */

const cantidadEnBodega = (producto) => ordenarBodega(producto).length // PODES HACER ASI EN UNA SOLA LINEA
// O LO PODES HACER ASI EN VAIAS OTRAS:
// const cantidadEnBodega2 = (producto) => {
//     const arrayFiltrado = ordenarBodega(producto)
//     return arrayFiltrado.length
// }

// console.log(cantidadEnBodega("🍋")) // => 10
// console.log(cantidadEnBodega("🥑")) // => 3

/* 4) recepcionarPedido() que reciba una cantidad numerica y un producto. La funcion debe agregar al array correspondiente la cantidad de ese producto elegido. */
// CON EL FOR... 
// PORCADA VUELTA DEL BUBLE FOR LE VOY METIENDO EL PRODUCTO CON EL PUSH:
// LA CANTIDAD DE VUELTAS QUE LE DOY ES LA "CANTIDAD" DE PRODUCTOS QUE TENGO Q METER EN EL ARRAY PRODUCTO

const recepcionarPedido = (cantidad, producto) => {
    for (let i = 0; i < cantidad; i++) {
        productos.push(producto)
    }
}

// console.log("antes de mi funcion", productos)
// recepcionarPedido(5,'🌽')
// console.log("despues de mi funcion", productos)

/* 5) venta() que reciba un array productos comprados. La funcion debe quitar del array correspondiente la cantidad de ese producto elegido. Considerar que no podemos vender 4 berenjenas si en el array quedan menos de 4. */

const venta = (compras) => {
    //VOY A RECORRER EL ARRAY COMPRAS:
    compras.forEach(compra => {
        // en el recorridochekeo si hay stock de compras:
            //puedo hacer :producto.includes(compra)
            // o hago "consultarStock" que es lo mismo lllamando la funcion
        if (consultarStock(compra)) {
            //si consultar stock da true, se que hay
            // si da false se corta ahi
            // va a dar true, y ahi debo conseguir el indice de los elementos de la compra, para al saberlo poder borrarlo
            let index = productos.indexOf(compra)
            // ACLARACION: me va a devolver la cantidad de indices correspondiente a la cantidad de vueltas que haga ese forEach, que es la cantidad de elementos que tiene mi compra:
            //console.log(index);
            productos.splice(index, 1) // al splice que "borra/corta" le tego que pasar por parametro el indice que me devuelve el "indexOf" de aca arriba y como segundo parametro la cantidad de porisiones que necesito moverme para sacar ese elemento, que seria uno... porque solo quiero sacar ese elemento
        } else {
            console.log(`No tengo ${compra}`)
        }
    })
}

// console.log("antes de mi funcion: ", productos)
// venta(["🥑","🥑", "🌶️","🥕"])
// console.log("despues: ", productos)

/* 6) quitarProducto() que reciba un producto y si existe dentro del array de especies, lo remueva, y si no existe retornar false. */

// ACA TENGO DOS OPCIONES PARA EL SMISMO EJERCICO:

// UNO CON FOR EACH: CON IF + INDEXOF + SPLICE

// const quitarProducto = (producto) => {
//     especies.forEach(element => {
//         if (especies.includes(producto)) {
//             let index = especies.indexOf(producto)
//             console.log(index)
//             especies.splice(index, 1)
//         }
//     })
// }

// // OTRO SIN FOREACH PERO CON .SOME + IF + INDEXOF + SPLICE
// const quitarProducto2 = (producto) => {
//     //hay producto me va a guadar true o false si es verdad que dentro de especies 
//     // tengo el prioducto que yo le paso x parametro
//     const hayProducto = especies.some(element => element === producto)
//     //si es verdad que lo tengo lo meto en un if y hago el mismo procedimiento que en la forma anterior:
//     if (hayProducto) {
//         //hago lo mismo, consigo su index y uso el splice
//         let index = especies.indexOf(producto)
//         return especies.splice(index, 1)
//     } else {
//         // si ya no lo tengo me lo devuelve igual xq ya no estaba
//         return especies
//     }
// }

// console.log("antes de mi funcion: ", especies)
// //ACA TENGO LOS DOS CONSOLE LOG: DEBERIA DEJAR UNO SOLO, EL CORRESNDIENTE A LA FUNCION
// quitarProducto('🌶️')
// quitarProducto2('🌶️')
// console.log("despues: ", especies)

/* 7) agregarProducto() que reciba un producto y si no existe dentro del array de especies, lo agregue, y si existe retornar false. */

// const agregarProducto = (producto) => {
//     const hayProducto = especies.find(element => element === producto)
//     // if (!hayProducto) {
//     //     return especies.push(producto)
//     // } else {
//     //     return false
//     // }
//     // PUEDO HACER EL IF ENTERO COMO ACA ARRIBA O COMO OPERTADOR TERNARIO COMO ACA ABAJO
//     !hayProducto ? especies.push(producto) : false
// }

// console.log("antes de mi funcion: ", especies)
// agregarProducto('🌶️')
// agregarProducto('🥕')
// console.log("despues: ", especies)

// //hola soy un comentario