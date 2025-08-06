document.getElementById("form-imc").addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, preencha os campos corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    

    document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
