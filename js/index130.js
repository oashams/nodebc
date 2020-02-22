/*Create a new index130.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
Original mutants list
Sorted mutants list
Reversed mutants list
Mutants name separated by *
*/
const mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
console.log (`Original List:`,mutants);

var sortedList= mutants.sort();
var joinMutants= mutants.join(' * ');

console.log(`Sorted List:`,sortedList);
console.log(`Reversed List:,`,sortedList.reverse());
console.log(`Joined List:`,joinMutants);
