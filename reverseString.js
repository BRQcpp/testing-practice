export function reverseString(string)
{
    let temp;
    string = string.split('');
    for(let i = 0; i < (string.length-1)/2; i++)
    {
        temp = string[i];
        string[i] = string[string.length-i-1];
        string[string.length-i-1] = temp;
    }
    return string.join(['']);  
}