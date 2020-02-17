/*Create a new index112.js file
Define a showNumbers function that accepts two numeric parameters: start and end
The showNumbers function will show all the numbers between the start and end numbers
If start is bigger than the second one show the numbers from higher to lower
If start is smaller than the second one then show the numbers from lower to higher
Call the showNumbers function using the following parameters:
start: 0, end: 1000
start: 1000, end: 0
start: 100, end: 100
start: "100", end: 300
Find a way to deal with the following scenarios:
start and end are the same number
parameters that aren't numbers
*/
function showNumber(start, end) {
    if (!Number.isInteger(start)|| !Number.isInteger(end)){
        console.log (`Please enter numbers only`)
    return
    }
    if (start>end){
        for(let i=start;i>=end;i--){
            console.log (i)
        }
    }else if (start<end){
        for (let i=start; i<=end; i++){
            console.log (i);
        }
    }else if (start===end){
        console.log (`the numbers are equal`);
    }
    }
    showNumber(0,1000);
    showNumber(1000,0);
    showNumber(100,100);
    showNumber("100",100);