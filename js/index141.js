/*Create a new index141.js file
Define a tripExpenses array with the following values:
The first item is hotel fee, it's a number, type a value that you like
The second item is trip fee, it's a number, type a value that you like
The third item is meals fee, it's a number, type a value that you like
Define a budget variable and assign the sum of all the tripExpenses using reduce
Show the tripExpenses items as output with the following format:
hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
Show the final budget items as output with the following format
Total trip budget: %budget%
*/
const tripExpenses = {
    hotelFee:800,
    tripFee:600,
    mealFee:700
}
let budget= tripExpenses.hotelFee+tripExpenses.tripFee+tripExpenses.mealFee;
console.log (`Hotel:${tripExpenses.hotelFee}, Trip: ${tripExpenses.tripFee}, Meal: ${tripExpenses.mealFee}`);
console.log("Total Expense:", budget);  