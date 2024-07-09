function add(a, b) {
    return a + b;

    
}

function subtract(a, b) {

    return a - b;

}

function product(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {

        alert("Error: No se puede dividir entre cero.");
        return null;

    }

    return a / b;
}

function clearScreen() {

    document.getElementById("screen").innerText = "";


}

function pressKey(key) {
    document.getElementById("screen").innerText += key;

}

function calculate() {
    const screen = document.getElementById("screen");
    const expression = screen.innerText;
    try {
        const result = eval(expression);
        screen.innerText = result;
    } catch (e) {
        alert("Error en la expresión");
        clearScreen();
    }
}
