let operation;
let a;
let b;
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
        do {
            a = prompt(`what is the first number?`);
            number1 = +a;
        } while (a === '' || +a !== number1);

        if (operation !== 'cos' && operation !== 'sin') {
            do {
                b = prompt('what is the second number?');
                number2 = +b;
            } while (b === '' || +b !== number2);
        }
    }

    let result;
    let operationName;
    switch (operation) {
        case '+':
            result = number1 + number2;
            operationName = 'plus';
            break;
        case '-':
            result = number1 - number2;
            operationName = 'minus';
            break;
        case `*`:
            result = number1 * number2;
            operationName = 'multiplication';
            break;
        case `/`:
            result = number1 / number2;
            operationName = 'division';
            break;
        case `pow`:
            result = number1 ** number2;
            operationName = 'pow';
            break;
        case `sin`:
            result = Math.sin(number1);
            operationName = 'sin';
            break;
        case `cos`:
            result = Math.cos(number1);
            operationName = 'cos';
            break;
    }

    const message = 'Operation ' + operationName + ' finished with result = ' + result;

    if (operation !== 'history') {
        console.log(message);
        history[history.length] = message;
    } else {
        console.log('Your history');
        let i = 0;
        while (i < history.length) {
            console.log(i + 1 + '. ' + history[i]);
            i++;
        }
    }

}
while (confirm('Do you want to perform a new operation?')) ;
