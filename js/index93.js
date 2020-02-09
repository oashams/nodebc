/*Create a new index93.js file
Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while
*/

for(let star = "**********",num = 10;num > 0;num--) {
    star = star.slice(0,star.length-1);
    console.log(star);
}
