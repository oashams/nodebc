/*Create a new index127.js file
Define a iceCreamFlavors array with 10 flavors
Remove the first 2 elements using shift
Show the iceCreamFlavors items as output
Show each removed flavor*/
const iceCreamFlavors = ['Raspberry','Vanila','Strawberry','Blueberry', 'Apple' ];
let iceCreamName = iceCreamFlavors.shift('Raspberry');
let iceCreamName1 = iceCreamFlavors.shift('Vanila');
let iceCreamName2 = iceCreamFlavors.shift('Strawberry');
console.log (`1st Removed Item:`, iceCreamName);
console.log (`2nd Removed Item:`, iceCreamName1);
console.log (`3rd Removed Item:`,iceCreamName2);
console.log (iceCreamFlavors.length);
console.log (iceCreamFlavors);