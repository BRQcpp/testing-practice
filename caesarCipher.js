export function caesarCipher(string, shift)
{
    string = string.split('');
    string = string.map( (char)=>
    {
        if(char.charCodeAt(0) > 90)
            return getCharactersCodes(char, 123, 97, shift)
        return getCharactersCodes(char, 91, 65, shift)
    });
    return string.join('');
}

function getCharactersCodes(char, max, min ,shift)
{
    let charCode = (char.charCodeAt(0) + shift) % max;
    if(charCode < min)
        return  String.fromCharCode(min + charCode);
    return String.fromCharCode(charCode);
}
