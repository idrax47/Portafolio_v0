function appendValue(value) {
    const resultado = document.getElementById("resultado");
    resultado.value += value;
}

function clearResult() {
    const resultado = document.getElementById("resultado");
    resultado.value = "";
}

function calculate() {
    const resultado = document.getElementById("resultado");
    try {
        resultado.value = eval(resultado.value); // Evalúa la operación
    } catch (error) {
        resultado.value = "Error";
    }
}
