/*Create a new index99.js file
Add all even numbers bettwen 0 and 1000 using for statement
The iteration must break after finding the first 20 even numbers
Show the result as output
*/
let a=1; 
for (let number=0;number<1000;number++){
    if (a>20){
    break;  
}
    else if(number%2===0){
     console.log(number);
     a++;
    }
}