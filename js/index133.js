/*Create a new index133.js file
Define a mutants array with the following values:
Professor X,Cyclops, Iceman, Angel, Magneto, Beast,Phoenix,Logan,Gambit
First part
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list
Second part
Find out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position
*/
const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan', 'Gambit'];
console.log ('Iterate Mutants Name');
mutants.some(function (mutants) {
console.log(mutants);
if(mutants=="Magneto")
return true;    
});
console.log ('Find out position and remove it from Mutants array')
mutants.splice(mutants.indexOf('Magneto'),1);
console.log(mutants);

console.log ('Iterate without Magneto in array');
mutants.some(function (mutants){ 
    console.log(mutants.toUpperCase()); 
    });