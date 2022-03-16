let password = document.querySelector('#password')
let background = document.querySelector('#background')
password.addEventListener('input', (e) => {
    let entrada = e.target.value
    let cantidad = entrada.length
    let valor_del_blur = 20 - (cantidad * 2)
    //console.log(cantidad)
    //console.log(entrada)
    background.style.filter = `blur(${valor_del_blur}px)`
})