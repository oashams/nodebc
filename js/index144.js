/*Create a new index144.js
Define a user variable and assign a literal object as value
Add the following properties and values to the user object:
property: username, value: batman
property: password, value: Alfred1960ROCKS!
First Output:
Show the users username and password as output using the user properties
Second Output:
Now show the users username and password as output again but with the following format:
username: must be capitalized: example: Batman
password: replace 1960 for an empty space so it looks this way: Alfred ROCKS!
In both cases use the user object properties to get the final output
*/
const user = {
    name: 'batman',
    password: 'Alfred1960ROCKS!' 

};
console.log ("UserName:", user.name);
console.log ("Password:",user.password);
console.log (user.password.replace ("1960", " "));
console.log (user.name.charAt(6),user.name.toUpperCase());