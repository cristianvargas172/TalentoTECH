document.addEventListener("DOMContentLoaded", () =>{
    const boton = document.getElementById("boton")
    boton.addEventListener("click", () => {
        let cantidad = parseFloat(document.getElementById("Calculadora").value)
        let resultado = document.getElementById("resultado")

        function calcular(cantidad){

            let consumido = (cantidad*12)/1000;
            let consumoT = consumido*(0.059/100);

            return consumoT
        }

        valor = calcular(cantidad);
        resultado.textContent = `el porcentaje total de energia eolica usada es: ${valor}%`
    })
})