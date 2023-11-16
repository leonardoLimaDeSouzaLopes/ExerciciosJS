function CalcularTabuada() {

    // Le o valor do input e o transforma em int
    var numero = parseInt(document.getElementById("numero").value);

    // Verifica se numero1 e um numero

    if (isNaN(numero)) {

        alert("Por favor, insira números válidos.");

    } else {

        document.getElementById("resposta").innerHTML = "<h2>Tabuada do " + numero + ":</h2>";

         // Calcula a tabuada
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            document.getElementById("resposta").innerHTML += numero + " x " + i + " = " + resultado + "<br>";

        }

    }
}