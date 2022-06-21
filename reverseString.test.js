import {reserveString, reverseString} from './reverseString';

it('Returns reversed string with even number of characters', () =>
{
    expect(reverseString('Warsaw')).toBe('wasraW');
}); 

it('Returns reversed string with odd number of characters', () =>
{
    expect(reverseString('kajaK')).toBe('Kajak');
}); 