/*Create a new index110.js file
Define the average function that accepts 5 numbers as parameter
Call the average function with the following values: 2, 4, 10, 20, 30
After executing the call show the following message: The average is %average%*/
const average = function (number1,number2,number3,number4,number5) {
    var average = (number1+number2+number3+number4+number5)/5;
    console.log (`The Average is ${average}`)
}
average (2, 4, 10, 20, 35);
average (200, 40, 100, 210, 30);
