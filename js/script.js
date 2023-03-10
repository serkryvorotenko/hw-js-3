let operation;
let number1;
let number2;
const history = [];

do {
    do {
        operation = prompt('What operation should be performed? + , - , * , / , sin , cos , pow , history');
    } while (operation !== '+'
    && operation !== '-'
    && operation !== '*'
    && operation !== '/'
    && operation !== 'sin'
    && operation !== 'cos'
    && operation !== 'pow'
    && operation !== 'history');

    if (operation !== 'history') {
        number1 = askNumber(`what is the first number?`);

        if (operation !== 'cos' && operation !== 'sin') {
            number2 = askNumber(`what is the second number?`);
        }
    }

    switch (operation) {
        case '+':
            plus(number1, number2);
            break;
        case '-':
            minus(number1, number2);
            break;
        case `*`:
            multiplication(number1, number2);
            break;
        case `/`:
            division(number1, number2);
            break;
        case `pow`:
            pow(number1, number2);
            break;
        case `sin`:
            sin(number1);
            break;
        case `cos`:
            cos(number1);
            break;
        case 'history':
            showHistory();
            break;
    }
}
while (confirm('Do you want to perform a new operation?')) ;

function plus(number1, number2) {
    const result = number1 + number2;
    showMessage('+', result, 'plus');
}

function minus(number1, number2) {
    const result = number1 - number2;
    showMessage('-', result, 'minus');
}

function multiplication(number1, number2) {
    const result = number1 * number2;
    showMessage('*', result, 'multiplication');
}

function division(number1, number2) {
    const result = number1 / number2;
    showMessage('/', result, 'division');
}

function pow(number1, number2) {
    const result = number1 ** number2;
    showMessage('pow', result, 'pow');
}

function sin(number1) {
    const result = Math.sin(number1);
    showMessage('sin', result, 'sin');
}

function cos(number1) {
    const result = Math.cos(number1);
    showMessage('cos', result, 'cos');
}

function showMessage(operation, result, operationName) {
    const message = 'Operation ' + operationName + ' finished with result = ' + result;
    console.log(message);
    history[history.length] = message;
}

function showHistory() {
    console.log('Your history');
    let i = 0;
    while (i < history.length) {
        console.log(i + 1 + '. ' + history[i]);
        i++;
    }
}

function askNumber(massage) {
    let a;
    let number1;
    do {
        a = prompt(massage);
        number1 = +a;
    } while (a === '' || +a !== number1);
    return number1;
}

