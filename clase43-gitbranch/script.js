// git es del repositorio loca, todo guardado SOLO en la cpmpuitadora
// gitHub es un repositorio remoto yq ueda guardado en la nube


// PARA SUVIR UN REPO:
// 1- CREO LAS CARPETAS Y ARRANCO DESDE EL VISUAL
// 2- git init
// 3- git status
// 4-  git add .
// 5- git status
// 6- git commit -m "first commit second chance" 
// ACA VOY AL GIT Y PONGO NEW REPOSITORY... Y COPIO LOS PASOS SUQE ME VA DelayNode, QUE SERIAN LOS DE LA SEGUNDA OPCION
// 7- git remote add origin https://github.com/tete-paez/SEGUNDA-CHANCE.git  
// 8- git branch -M main
// 9- git push -u origin main
// 10- ME ´PASA UN LINK Y ENTRANDO AHI ENCUENTR LO QUE SUBI

// SI HICE CAMBIOS:

// tiro un 
// git status
// me tira los cambios que hice
// pongo un 
// git add .
// y asi se suman los cambios realizados al repo
// pero para hacerlo mas simple e ir haciendo modificaciones:
// git commit -am"aca pongo las modificaciones que hice" (esto resume el git add y el git commit)
// para ver los commits que fui haceidno 
// git log --oneline
// una vez terminados los cambios y estoy segura de que va a quedar asi
// git push (esto solo te pushea lo que esta comiteado, asi que necesitas un commit)
// y nuevamente tiro el 
// git commit -am"aca pongo las nuevas modificaciones que hice"
// y me tira el link de mi repo 

// ahora para mostrarle el link a mi cliente:
// en git hub entro a SETTINGS
// a la izquierda busco donde dice PAGES
// donde dice SOURCE lo cambio por MAIN y pongo SAVE 


//*****************TEMA DE LA CLASE GIT BRANCH **********/
// nosotros estamos trabajando en la brancH MAIN
// para crear una branch en la que va a trabajar otro 
// GIT BRANCH (MAS EL NOMBRE DE LA BRANCH) asi:
// git brancH nuevaBranch
// si vuelvo a poner git branch, me va a tirar todas las branch que tengo y va a estar en otro color y con un * donde sea que yo este trabajando... que normalmente seria en main. 
// si quiero salir de main y entrar en la rama nuevaBranch
// GIT CHECKOUT NUEVABRANCH 
// y si quiero volver a main
// GIT CHECKOUT MAIN 
// siempre que arranco a trabajar en un proyecto, tiro un git status para saber DONDE ESTOY TRABAJANDO para no cagarla y comitear donde no corresponde porque cagas todo 
// si quiero comitear el cambio que hice 
// git commit -am"aca pongo las nuevas modificaciones que hice" 
// pero NO SE GUARDA ASI... 
// SE GUARDA ASI: 
// primero debo ir si o si al main
// GIT CHECKOUT MAIN 
// git merge nuevaBranch
// ahi me mergea los archivos cambiados de la rama nueva 
// si tiro un git onelog me tira una lista de los cambios hechos en la rama nueva 
// SI ME QUEDA TRAVADO EN LA LISTA DE CAMBIOS:
// TOCAR WQ 
// y si ahora quiero subir todo... 
// git push 
// y ahi se suven todos los cambios realizados al MAIN 




// ME RINDO ES UN EMBOLE CONTINUAR DE VER LA CLASE EN LA HORA 1.56
// LINK: https://us02web.zoom.us/rec/play/Oz5M1dGHuQNiY1ZXy8XoJmexeeTcPxxqQWtPVRK9WNR3SSkWw5oRNnHyHTiEEIGmdQqkCXMgvSBcAZUe.YiSXHuNWxyg5J5nI?startTime=1638396441000&_x_zm_rtaid=0dR6gt1XQLCneGL_6MpiUA.1638869949807.dc883a4e6285b7043501392ebdbe8ddf&_x_zm_rhtaid=363


