/*Create a new index137.js file
Define a numbers array with values between 1 and 1000
Iterate over each numbers item using map and increment the value in 10
If value is 1 then it should be 11
If value is 2 then it should be 12
and so on..
Show the following output for each element:
index: 1, original number: 1, incremented value: 11*/
const numbers = [];
sum = 0;
for (let i=0;i<=1000; i++){
    numbers[i]=i;
}
const numberMap = numbers.map(function(numb, index){
    console.log(` Index: ${index}, original number: ${index}, Incremented Value: ${numb+10}`);
    return numb+10;
})