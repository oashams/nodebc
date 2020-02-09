/*Create a new index85.js file
Copy and paste the code from exercise 75
Refactor the code to use do/while instead of while
*/
var f = 0;
var f1 = -1;
var f2 = 1;
var count = 0;
do {
    f=f1+f2;
    f1=f2
    f2=f
    count++
    console.log (f);
}
while (count<=10){
}
