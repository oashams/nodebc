let firstName = "Omer Ali";
let lastName = "Shams"
let characterCount = firstName.length;
let characterCount1 = lastName.length;
let difference = characterCount >= 5 || lastName == characterCount1;
console.log (`My first name is ${firstName} and it is ${characterCount} characters long.`);
console.log (`My last name is ${lastName} and it is ${characterCount1} characters long.`);
console.log (`The character difference between my first and last name is ${characterCount-characterCount1}`);
console.log (`My first name is longer than my last name ${difference}`);
