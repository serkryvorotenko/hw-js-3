const operation = prompt('What operation should be performed? + , - , * , / , sin , cos , pow ');
let number1;
let number2;

switch (operation) {
    case `cos`:
    case `sin`:
        number1 = +prompt(`what is the number?`);
        break;
    default:
        number1 = +prompt('what is the first number?');
        number2 = +prompt('what is the second number?');
        break;
}

let result;
switch (operation) {
    case '+':
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;
    case `*`:
        result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;
    case `/`:
        result = number1 / number2;
        alert(`${number1} / ${number1} = ${result}`);
        break;
    case `pow`:
        result = number1 ** number2;
        alert(`${number1} ˆ ${number2} = ${result}`);
        break;
    case `sin`:
        result = Math.sin(number1);
        alert(`sin ${number1} = ${result}`);
        break;
    case `cos`:
        result = Math.cos(number1);
        alert(`cos ${number1} = ${result}`);
        break;
    default:
        alert('such an action is impossible');
        break;
}