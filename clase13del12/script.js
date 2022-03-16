const inputRange = document.querySelector('input')
const cantidadPesos = document.getElementById('cantidadPesos');

inputRange.addEventListener('input', ()=> {
    let valor = inputRange.value;
    plata = valor/100;
    cantidadPesos.innerText=plata;
})
// deje de vel la clase en el minuto 46
// link: https://us02web.zoom.us/rec/play/ewSj1CABWpmXO3yQc3vL1a8gs-CIscE5Y_Zo1udGtrWJdcUA52G5p8EFcmlbKfnvobcFjNG04QOelWtO.OCVm9OsG0AYyQG7Q?startTime=1639433373000&_x_zm_rtaid=DGTDZu5XTlm1jm-DUPIJOA.1640716234315.0eefed065d8f7f034ccadc0abc64441b&_x_zm_rhtaid=781

