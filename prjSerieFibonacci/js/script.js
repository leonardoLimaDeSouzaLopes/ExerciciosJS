function CalcularTabuada() {

    // Le o valor do input e o transforma em int
    var n = parseInt(document.getElementById("n").value);

    // Verifica se numero1 e um numero

    if (isNaN(n) || n <= 0) {

        alert("Por favor, insira números válidos.");

    } else {

        var numeroAtual = 1, ultimoNumero = 0, penultimoNumero = 0, serie = "";
		
		//Laco for para fazer a serie de fibonacci ate o numero antes do enesimo
		for (var i = 0 ; i < n-1; i++) {
			serie += numeroAtual + ", ";
			penultimoNumero = ultimoNumero;
			ultimoNumero = numeroAtual;
			numeroAtual = ultimoNumero + penultimoNumero;
		}
		//Adciona o enesimo numero
		serie += numeroAtual;
		
		//Sysout para mostrar o Resultado
		document.getElementById("resposta").innerHTML = serie

    }
}