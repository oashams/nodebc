/*Create a new index70.js file
Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too
*/
let number = 0;
let sum = 0;
while(number<1000){
    if (number%2==1) {
   console.log (`Odd number${number}`);
   sum+=number;
    }
number ++;
console.log (`Sum of Odd numbers: ${sum}`);
}