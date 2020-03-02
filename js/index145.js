/*Create a new index145.js
Copy the user object from the previous exercise with the username and password properties and values
If the user object username is batman and password is Alfred1960KPO! then show the following output:
Welcome back batman!!
Else show the following output:
Sorry, you can't enter the Batcave, try again..
Use the user properties to create the conditions
*/
const user = {
    name: 'batman',
    password: 'Alfred1960ROCKS!' 

}; if (user.name=="batman" || user.password=='Alfred1960ROCKS!'){
    console.log ('Welcome Back Batman!!!')
} else {
    console.log ('Sorry, you can\'t enter the Batcave, try again..')
}
