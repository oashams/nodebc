/*Create a new index134.js file
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong
*/
const numbers = [];
sum = 0;
for (let i=0;i<=1000; i++){
    numbers[i]=i;
}
numbers.forEach(function(numbers){
    sum=sum+numbers;
    console.log(`Good Job!!!`,sum);
})