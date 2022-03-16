// Peso inferior al normal Menos de 18.5
// Normal 18.5 – 24.9
// Peso superior al normal 25.0 – 29.9
// Obesidad Más de 30.0



const boton = document.getElementById('btn');
const calcularIMC = () => {
    const ingresePeso = document.getElementById('peso').value;
    const ingreseAltura = document.getElementById('altura').value / 100;
    const elResultado = document.getElementById('resultado');

    if (ingresePeso !== "" && ingreseAltura !== "") { 
        //imc = peso/(altura*altura)
        let imc = Math.round(ingresePeso / (ingreseAltura * ingreseAltura));
        mensaje = "";
        //console.log(imc);

        if (imc < 18.5) {
            mensaje = ('Peso inferior al normal');
        } else if (imc > 18.5 && imc < 24.9) {
            mensaje = ('Normal');
        } else if (imc > 25 && imc < 29.9) {
            mensaje = ('peso superior al Normal');
        } else {
            mensaje = ('obesidad');
        }
        elResultado.textContent = `su imc es de ${imc} . ${mensaje}`;
    }else{
        resultado.textContent = "Por favor, llene los campos"
    }
}
boton.addEventListener('click', calcularIMC);


