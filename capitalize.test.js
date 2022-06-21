import {capitalize} from './capitalize.js'

it('First letter capitalized', () =>
{
    expect(capitalize('bartosz')).toBe('Bartosz');
})