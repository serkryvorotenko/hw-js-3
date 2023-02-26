const operation = prompt('What operation should be performed? + , - , * , / , sin , cos , pow ');
let number1;
let number2;

if (operation === 'cos' || operation === 'sin') {
    number1 = +prompt('what is the number?');
} else {
    number1 = +prompt('what is the first number?');
    number2 = +prompt('what is the second number?');
}

if (operation === '+') {
    const result = number1 + number2;
    alert(`${number1} + ${number2} = ${result}`);
} else if (operation === '-') {
    const result = number1 - number2;
    alert(`${number1} - ${number2} = ${result}`);
} else if (operation === '*') {
    const result = number1 * number2;
    alert(`${number1} * ${number2} = ${result}`);
} else if (operation === '/') {
    const result = number1 / number2;
    alert(`${number1} / ${number2} = ${result}`);
} else if (operation === 'pow') {
    const result = number1 ** number2;
    alert(`${number1}ˆ${number2} = ${result}`);
} else if (operation === 'sin') {
    const result = Math.sin(number1);
    alert(`sin ${number1} = ${result}`);
} else if (operation === 'cos') {
    const result = Math.cos(number1);
    alert(`cos ${number1} = ${result}`);
} else {
    alert('such an action is impossible');
}