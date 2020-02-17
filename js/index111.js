/*Create a new index111.js file
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd*/
let a = 0;
const evenNumber = function (a) {
            if(a%2==0){
            return a+ `is even`
        }else{
            return a+ `is odd`
        }

    }
    console.log (evenNumber (11))

