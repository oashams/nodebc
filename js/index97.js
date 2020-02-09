/*Create a new index97.js file
Write the code to show numbers bettwen 10000 and 0 using for
Show all the numbers as output
Every 10 numbers show the number but with the following format: ** number ***/

for (let number=10000;number>0;number--){
    if (number%10===0){
        console.log (`***${number}***`);
    }
    console.log(number);
}