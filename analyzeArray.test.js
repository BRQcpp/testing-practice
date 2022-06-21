import {analyzeArray} from './analyzeArray.js'

it(`Returns correct average value`, ()=>
{
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

it(`Returns correct minimal value`, ()=>
{
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

it(`Returns correct maximal value`, ()=>
{
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

it(`Returns correct length of array`, ()=>
{
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);

});
