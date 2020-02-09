/*Create a new index83.js file
Copy and paste the code from exercise 73
Refactor the code to use do/while instead of while
*/
let star = "**********";
let num = 10;
do {
    console.log(star);
    star = star.slice(0,star.length-1);
    num--;
}
while (num > 0){  
}