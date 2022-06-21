import {add, subtract, divide, multiply} from './calculator.js'

it('Adds two numbers (sent as number type)', () =>
{
    expect(add(2,2)).toBe(4);
});

it('Adds two numbers (sent as character type)', () =>
{
    expect(add('2','2')).toBe(4);
});

it('Adds two negative numbers', () =>
{
    expect(add(-4, -2)).toBe(-6);
});

it('Adds negative and positive numbers', () =>
{
    expect(add(-4, 2)).toBe(-2);
});

it('Adds float point numbers', () =>
{
    expect(add(5.2, 2)).toBeCloseTo(7.2);
});




it('Subtracts two numbers (sent as number type)', () =>
{
    expect(subtract(4,2)).toBe(2);
});

it('Subtracts two negative numbers', () =>
{
    expect(subtract(-4, -2)).toBe(-2);
});

it('Subtracts negative and positive numbers', () =>
{
    expect(subtract(-4, 2)).toBe(-6);
});

it('Subtracts float point numbers', () =>
{
    expect(subtract(5.2, 2)).toBeCloseTo(3.2);
});



it('Multiplies two numbers (sent as number type)', () =>
{
    expect(multiply(4,2)).toBe(8);
});

it('Multiplies two negative numbers', () =>
{
    expect(multiply(-4, -2)).toBe(8);
});

it('Multiplies negative and positive numbers', () =>
{
    expect(multiply(-4, 2)).toBe(-8);
});

it('Multiplies float point numbers', () =>
{
    expect(multiply(5.2, 2)).toBeCloseTo(10.4);
});



it('Divides two numbers (sent as number type)', () =>
{
    expect(divide(4,2)).toBe(2);
});

it('Divides two negative numbers', () =>
{
    expect(divide(-4, -2)).toBe(2);
});

it('Divides negative and positive numbers', () =>
{
    expect(divide(-4, 2)).toBe(-2);
});

it('Divides float point numbers', () =>
{
    expect(divide(8.4, 2)).toBeCloseTo(4.2);
});

it('Throws error when divisor is 0', () =>
{
    expect(divide(8.4, 0)).toBe('Cannot divide by 0');
});






