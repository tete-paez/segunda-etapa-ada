// // // map()

// // //tengo el array:
// // const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// // //cuando quiero a todo el array aplicarle lo mismo
// // // no solo recorre un array, sino que 
// // // devuelve otro array donde los elementos son los del array inicial al que se les hizo "algo"

// // //por ejemplo si quiero a todo este array multiplicarlo POR DOS

// // const resultadoMultiplacacionNumerosX2 = numeros.map((num) => {
// //     return num * 2
// // })
// // console.log(resultadoMultiplacacionNumerosX2);

// // // una forma de hacer esto mismo pero mas resumido:
// // const resultadoMultiplacacionNumerosX2RESUMIDO = numeros.map(num => num * 2);
// // console.log(resultadoMultiplacacionNumerosX2);

// // //otro ejemplo pero sumandole 5 al array PREO CREANDO un nuevO array  "plus"

// // // tenemos nuestro array y el array vacio
// // const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const plus = [];

// // // ******************* podemos hacerlo asi:
// // // const resultadoMasCinco = arr.map((num) =>{
// // //     return num+5
// // // })
// // // console.log(resultadoMasCinco);
// // // plus.push(resultadoMasCinco);
// // // console.log(plus)

// // //******************** o podemos hacerlo asi
// // // const plus = arr.map( (num)=>{
// // //     return num +5
// // // }
// // // )
// // // console.log(plus);

// // /************************/

// // //some(); 
// // //me permite verificar si alguno de los elementos del array cumple con la condicion que le estoy especificando

// // const array = [1,8,9,3,-15]

// // // necesito saber si alguno de estos elementos es igual a cero 
// // const hayEnELArrayNumeroMenosACero = array.some((num)=> {
// //     return num<0
// // })
// // console.log(hayEnELArrayNumeroMenosACero);

// // //hay otra forma de hacerlo tambien:
// // const esMejorACero = array.some(valor=>valor<0);
// // console.log(esMejorACero);

// // /******************************/

// // // find(); 
// // // me pide que encuentre algo dentro de un array y si encuentra deuelve solo el primer valor que cumple con esa condicion

// // const scores = [ 10,5,60,90,20,30,100];

// // const esMayorA50 = scores.find(score => score>50);
// // console.log(esMayorA50);


// // /*********************** */

// // //filter();
// // // devuelve una matriz creada a partir de todos los elementos que pasan una determinada prueba realizada en la matriz original
// // // en otras palabras con el filter le paso la condicion de lo que quiero que me devuelva...
// // // porejemeplo quiero que me devuelva todos los scores mayores a 20

// // const nuevosScores = [ 10,5,60,90,20,19,18,30,95,100];
// // const menoresA20 = nuevosScores.filter(nuevoScore => nuevoScore<20);
// // console.log(menoresA20);


// // /******************************* */

// // //every();

// // //sirve para ferificar si TODOS los elementos de ese array cumplen con una condicion
// // //devuelve true o false
// // //por ejemeplo ahora voy a verificar si estos arrays contienen todos sus elementos PARES

// // const arrayA = [1,2,3,4,5,6];
// // const arrayB = [2,2,6,6];

// // const contieneNumerosParesA = arrayA.every(arrA => arrA % 2 === 0 );
// // const contieneNumerosParesB = arrayB.every(arrB => arrB % 2 === 0 );

// // console.log(contieneNumerosParesA);
// // console.log(contieneNumerosParesB);

// // // CON PILAR // CON PILAR // CON PILAR// CON PILAR
// // // CON PILAR // CON PILAR // CON PILAR// CON PILAR
// // // CON PILAR // CON PILAR // CON PILAR// CON PILAR

// // const puntajes = [150,400,1100,500,350,225,100,780];

// // //con filter
// // // filtrame los mayor o igual a 500
// // const mayorIgualQuinientos = puntajes.filter(puntaje => puntaje >=500)
// // console.log(mayorIgualQuinientos);

// // //con map
// // // si el puntaje es mayor a 500 quiero que le sumen 400

// // const siEsMayouLeSumo400 = mayorIgualQuinientos.map(mayor => mayor+400);
// // console.log(siEsMayouLeSumo400);

// // // every
// // const edades = [21,27,38,22,40,17,56,60];
// // // quiero saber si todas las edades son mayores a 18años

// // const sonMayoresDeEdad = edades.every(edad => edad>=18);
// // console.log(sonMayoresDeEdad)

// // //find
// // const esMayorA18 = edades.find(edad => edad >18);
// // console.log(esMayorA18);

// // //some();
// // //some(); 
// // //me permite verificar si alguno de los elementos del array cumple con la condicion que le estoy especificando

// const frutas = ["🍋", "🍒", "🍑", "🍑", "🍋", "🍒", "🍒", "🍋","🍑"];
// const frutas2 = ["🍋", "🍒", "🍋", "🍒", "🍒", "🍋"]
// //tengo que chekear si en el array hay cerezas
// // const hayCereza = frutas.some(fruta => fruta === "🍒")
// // console.log(hayCereza);

// // const ConsultarStockCerezas = () => {
// //     //primero chekeo si hay cereza como en la funcion de aca arriba que comente
// //     const hayCereza = frutas.some(fruta => fruta === "🍒");
// //     //como hay cerezas uso hago operador ternario si hay o no stock
// //     hayCereza ? console.log("hay stock") : console.log("no hay stock")
// // }
// // ConsultarStockCerezas();

// //HAY UNA FORMA DE HACER ESTO REUTILIZABLE
// //HAY UNA FORMA DE HACER ESTO REUTILIZABLE
// //HAY UNA FORMA DE HACER ESTO REUTILIZABLE, LO COMENTO Y EXPLICO ABAJO
// // primero cambio el nombre a la variable porque ya no solo busco cereas sino puedo buscar cualqer otra cosa podria ser verduras, o frutas tropicales.
// const ConsultarStock = (array, fruta) => {
//     //le paso 2 parametros:
//     //array: que seria fritas en este caso pero podria ser verduras, o frutas tropicales.
//     //fruta: que seria el emogi de cerezas o bien el template string de la fruta: `${fruta}`
//     const hayFruta = array.some(element => element === fruta);
//     //cambio el nombre de la constante porque ya no busco mas cerezas especialmente, porque quiero buscar otras cosas,podria ser verduras, o frutas tropicales. 
//     //array.some: le hago el some al primer parametro
//     //(element => element === fruta): seria algo asi comoo :
//         //(fruta => fruta === "🍒")
//     //como hay cerezas uso hago operador ternario si hay o no stock
//     hayFruta ? console.log(`hay stock de ${fruta}`) : console.log(`no hay stock de ${fruta}`)
// }
// //y aca paso los parametros que necesito:
// //le paso el nombre del array y lo que busco
// // ConsultarStock(frutas, "🍒");
// // ConsultarStock(frutas2, "🍑");

// // comento esto de arriba para poder hacer esto de aca abajo:

// frutas2.forEach(element => ConsultarStock(frutas2,element));
