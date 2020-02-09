/*Create a new index84.js file
Copy and paste the code from exercise 74
Refactor the code to use do/while instead of while
*/
let star = "*"
let lines = 0;
do {
    console.log(star)
    star = star.concat('*')
    lines++;
}
while(lines < 10){
}