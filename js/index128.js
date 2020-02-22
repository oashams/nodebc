/*Create a new index128.js file
Define a iceCreamFlavors array with 10 flavors
Remove the last 4 elements using pop
Show the iceCreamFlavors items as output
Show each removed flavor
*/
const iceCreamFlavors = ['Raspberry','Vanila','Strawberry','Blueberry', 'Apple', 'Tuti Fruiti','Dark Choco'];
const iceCreamFlavors1 = ['Raspberry','Vanila','Strawberry','Blueberry', 'Apple', 'Tuti Fruiti','Dark Choco'];
let iceCreamName = iceCreamFlavors.pop('Dark Choco');
let iceCreamName1 = iceCreamFlavors.pop('Tuti Fruiti');
let iceCreamName2 = iceCreamFlavors.pop('Apple');
console.log (iceCreamFlavors1);
console.log (iceCreamFlavors1.length);
console.log (`1st Removed Item:`, iceCreamName);
console.log (`2nd Removed Item:`, iceCreamName1);
console.log (`3rd Removed Item:`,iceCreamName2);
console.log (iceCreamFlavors.length);
console.log (iceCreamFlavors);
