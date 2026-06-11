// Pega os números digitados
function pegarNumeros() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return [num1, num2];
}

// Soma
function somar() {
    let [num1, num2] = pegarNumeros();

    let resultado = num1 + num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

// Subtração
function subtrair() {
    let [num1, num2] = pegarNumeros();

    let resultado = num1 - num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

// Multiplicação
function multiplicar() {
    let [num1, num2] = pegarNumeros();

    let resultado = num1 * num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

// Divisão
function dividir() {
    let [num1, num2] = pegarNumeros();

    if (num2 === 0) {
        document.getElementById("resultado").innerText =
            "Não é possível dividir por zero!";
        return;
    }

    let resultado = num1 / num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}
