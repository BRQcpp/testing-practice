function add(num1, num2)
{
    return +num1 + +num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    if(num2 == 0)
        return 'Cannot divide by 0';
    return num1 / num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}


export {add, subtract, divide, multiply};