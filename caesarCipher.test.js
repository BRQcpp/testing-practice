import {caesarCipher} from './caesarCipher.js'

it('ciphers a string (case sensitive)', ()=>
{
    expect(caesarCipher('JavaScript', 2)).toBe('LcxcUetkrv');
});

it('Transforms correctly by shift over basic range', ()=>
{
    expect(caesarCipher('JavaScript', 28)).toBe('LcxcUetkrv');
});
