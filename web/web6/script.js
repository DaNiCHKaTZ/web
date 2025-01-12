let currentInput = '';
let operator = null;
let operand1 = null;
let operand2 = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op !== 'sqrt' && op !== 'reciprocal') return;
    if (operator !== null) calculate();
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    if (operator === null || currentInput === '') return;
    operand2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            currentInput = operand1 + operand2;
            break;
        case '-':
            currentInput = operand1 - operand2;
            break;
        case '*':
            currentInput = operand1 * operand2;
            break;
        case '/':
            currentInput = operand1 / operand2;
            break;
        case '%':
            currentInput = operand1 * operand2 / 100;
            break;
        case 'sqrt':
            currentInput = Math.sqrt(operand1);
            break;
        case 'reciprocal':
            currentInput = 1 / operand1;
            break;
    }
    operator = null;
    operand1 = null;
    operand2 = null;
    document.getElementById('result').value = currentInput;
}

function clearAll() {
    currentInput = '';
    operator = null;
    operand1 = null;
    operand2 = null;
    document.getElementById('result').value = currentInput;
}

function clearEntry() {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function changeSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    document.getElementById('result').value = currentInput;
}
