/*Using the console show odd numbers from 1 to 1000
*/

function oddNumber() {
    for (number=0;number<=1000;number++)
     if (number%2===1) 
     console.log(`showing odd numbers: ${number}`);
}
oddNumber()