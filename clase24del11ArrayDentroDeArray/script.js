// let heores = [ 'superman', 'ironman', 'hulk', 'wonderwoman'];
// //para recorrerlo;
// for (let i = 0 ; i < heores.length ; i++){
//     console.log(heores[i]);
// }

let arraysDentroDeArray = [
    //primer array
    ['flor','yayi', 'mel'],
    //segundo array
    [1,2,3,4,5,6],
    //tercer array
    ['plin','pingui']
]
// console.log(arraysDentroDeArray[0][0]);
// console.log(arraysDentroDeArray[1][5]);
// console.log(arraysDentroDeArray[2][1]);

for (let i = 0 ; i < arraysDentroDeArray.length ; i++) {
    // console.log(arraysDentroDeArray[i]) 
    // al poner [i] lo recorre solouna vez, si no le pongo [i, lo recorre la cantidad de veces cuantos elementos tenga el array]
    //pero para recorrer cada array dentro del array debo: hacer otro for dentro del for
    for (let m = 0 ; m < arraysDentroDeArray[i].length ; m++){
        console.log(arraysDentroDeArray[i][m]) 
    }// y asi me muestra todos los elementos que estan contenidos en todos los arrays... no muestra cual esta en casa cual... solo la lista de los elementos
}