/*Create a new index147.js
Copy and paste the code from the previous exercise
Refactor the code to match the requirements
The shouldOpenBatCave function not longer accepts two parameters
Now the shouldOpenBatCave function only accepts a user parameter
Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
The rest of the code should still work the same way and show the proper output
*/
const user = {
    name: 'batman',
    password: 'Alfred1960KPO!',} 
  function shouldOpenBatCave(name){
 if (user.name==="batman" && user.password==='Alfred1960KPO!'){
    console.log ('Welcome Back Batman!!!')
} else {
    console.log ('Sorry, you can\'t enter the Batcave, try again..')
    
}
}
  
  shouldOpenBatCave();