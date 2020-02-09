/*Create a new index90.js file
Copy and paste the code from exercise 80
Refactor the code to use for instead of do/while*/
for (let number = 0,sum = 0;sum+=number,number<1000;number++) {
    if (number%2==1) {
        console.log (`Odd number${number}`);        
    }
    console.log (`Sum of Odd numbers: ${sum}`);
}