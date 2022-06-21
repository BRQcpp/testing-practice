export function analyzeArray(array)
{
    let arrayValues = {};
    arrayValues.average = array.reduce((curr, prev) =>
    {
        return prev + curr;
    }, 0)/array.length;

    arrayValues.min = array.reduce((curr, prev) =>
    {
        return curr < prev ? curr : prev;
    }, array[0]);

    arrayValues.max = array.reduce((curr, prev) =>
    {
        return curr > prev ? curr : prev;
    }, 0);

    arrayValues.length = array.length;


    return arrayValues;
}