/*Create a new index101.js file
Define a function named showUser that will output the following data:
Your name
Your age
Your phone number
Your street
Your postal code
If you're married or not (boolean)
*/

const user = {
    Name: 'Omer',
    Age: 30,
    PhoneNumber: 4554454,
    MyAddress: 'Unit 3 8552 Street 84 ave Surrey',
    PostalCode:'V3R0Z3',
    MaritalStatus: 'Married',

} 
function showUser(user) {
    console.log (user);
}
showUser(user)