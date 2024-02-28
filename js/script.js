function CalcularTabuada() {

    // Le o valor do input e o transforma em int
    var entrada = document.getElementById("numero").value, numero = parseInt(entrada);

    // Verifica se numero e um numero
    if (isNaN(numero)) {

        entradaErrada(entrada);

    } else {

        document.getElementById("resposta").innerHTML = "<h2>Tabuada do " + numero + ":</h2>";

        // Calcula a tabuada e mostra
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            document.getElementById("resposta").innerHTML += numero + " x " + i + " = " + resultado + "<br>";

        }

    }
}

function SerieFibonacci() {

    // Le o valor do input e o transforma em int
    var entrada = document.getElementById("numero").value, numero = parseInt(entrada);

    // Verifica se numero1 e um numero
    if (isNaN(numero) || numero <= 0) {

        entradaErrada(entrada);

    } else {

        var numeroAtual = 1, ultimoNumero = 0, penultimoNumero = 0, serie = "";

        //Laco for para fazer a serie de fibonacci ate o numero antes do enesimo
        for (var i = 0; i < numero - 1; i++) {
            serie += numeroAtual + ", ";
            penultimoNumero = ultimoNumero;
            ultimoNumero = numeroAtual;
            numeroAtual = ultimoNumero + penultimoNumero;
        }
        //Adciona o enesimo numero
        serie += numeroAtual;

        //Mostra o Resultado
        document.getElementById("resposta").innerHTML = serie;

    }
}

function DigaMesAniversario() {

    // Le o valor do input e o transforma em int
    var entrada = document.getElementById("numero").value, numero = parseInt(entrada);

    // Verifica o mes
    switch (numero) {
        case (1):
            document.getElementById("resposta").innerHTML = "Janeiro.";
            break;
        case (2):
            document.getElementById("resposta").innerHTML = "Fevereiro.";
            break;
        case (3):
            document.getElementById("resposta").innerHTML = "Março.";
            break;
        case (4):
            document.getElementById("resposta").innerHTML = "Abril.";
            break;
        case (5):
            document.getElementById("resposta").innerHTML = "Maio.";
            break;
        case (6):
            document.getElementById("resposta").innerHTML = "Junho.";
            break;
        case (7):
            document.getElementById("resposta").innerHTML = "Julho.";
            break;
        case (8):
            document.getElementById("resposta").innerHTML = "Agosto.";
            break;
        case (9):
            document.getElementById("resposta").innerHTML = "Setembro.";
            break;
        case (10):
            document.getElementById("resposta").innerHTML = "Outubro.";
            break;
        case (11):
            document.getElementById("resposta").innerHTML = "Novembro.";
            break;
        case (12):
            document.getElementById("resposta").innerHTML = "Dezembro.";
            break;
        default:
            entradaErrada(entrada);
            break;
    }
}

function CalcularPotencia() {

    // Le o valor do input e o transforma em int
    var entrada1 = document.getElementById("base").value, base = parseInt(entrada1);

    // Le o valor do input e o transforma em int
    var entrada2 = document.getElementById("expoente").value, expoente = parseInt(entrada2);

    // Verifica se a base e o expoente são numeros
    if (isNaN(base) || isNaN(expoente)) {

        entradaErrada(entrada1, entrada2);

    } else {

        var potencia = 1;

        //Laco for para fazer a calculo de potenciacao
        for (var i = 0; i < expoente; i++) {
            potencia *= base;
        }

        //Mostra o Resultado
        document.getElementById("resposta").innerHTML = potencia;

    }
}

function entradaErrada(entrada1, entrada2) {

    //Tentei fazer por method overload mais n deu certo, então tou vendo quantos parametros q tem (lol aprendi muito com essa zuera kk)
    if (arguments.length == 1) {

        if (entrada1.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') == "sao paulo") {
            document.getElementById("resposta").innerHTML = "São Paulo!!! (da MB)";
            return;
        }

    } else if (arguments.length == 2) {

        if (entrada1.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') == "sao paulo") {
            document.getElementById("resposta").innerHTML = "São Paulo!!! (da MB)";
            return;
        }
        if (entrada2.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') == "sao paulo") {
            document.getElementById("resposta").innerHTML = "São Paulo!!! (da MB)";
            return;
        }

    } else {

        alert("ue?")
        alert("deu erro na funcao entrada errada")

    }
    
    alert("Por favor, insira números válidos.");
}