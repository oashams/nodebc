/*Create a new index45.js file
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!
*/
const playName = 'Pratik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = ' Winnipeg is the best Canadian city, Go Winnipeg';
const result = playName.slice (0,13);
console.log (result);
const result1 = teams.slice (45,50);
console.log (result1);
const result2 = message.slice (09,21);
console.log (result2);
const result3 = message.slice (36,40);
console.log (result3);
const template = result.slice(0,12).toUpperCase()+result2.slice(0)+result1.slice(0)+' '+'player,'+result3.slice(0)+result1.slice(0)+'!!!';
console.log (template);


