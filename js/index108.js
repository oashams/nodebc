0/*Create a new index108.js file
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true
*/
var numbers = [10,8,25]
numbers.sort(function (a,b){return a - b});
console.log (numbers);
numbers.sort(function (a,b){return b - a});
console.log (numbers);
 if (numbers=25,10,8){
    console.log (`True`);
 } else if (8,10,25){
     console.log(`False`);
 }
 

