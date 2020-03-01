/*Create a new index142.js
Define a firstPerson variable
Define a secondPerson variable
Assign a new array to each defined variable with the following structure
The first item is the person first name (string)
The second item is the person last name (string)
The third item is the person address (string)
The fourth item is the person age (number)
Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
Compare the strings result to see if they are the same person (if they are they should match)
Try using the same person (with different variables) and also try different people
*/
const firstPerson =["Rahim","Ahmad","425 Boca Raton Ave","36"];
const secondPerson= ["Amjad", "Malick","589 New York Ave","45"];

let result = firstPerson.reduce(function(total, currentValue){
    return total+currentValue;
});
let result1 = secondPerson.reduce(function(total,currentValue ){
    return total+currentValue;
}); 
if(result===result1){
    console.log ('Same Person');
} else {
    console.log("Different Person");
}