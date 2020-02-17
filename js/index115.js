/*Create a new index115.js file
Define a getLongerText that accepts two string values
This function returns the longer text
After calling the function show the longer word as output
Call this function 3 times with different words
*/

function getLongerText(text1,text2){
    return text1.length>text2.length ? text1:text2;

}
console.log (getLongerText(`honey is sweet`,`I dont like sweet`));
console.log (getLongerText(`honey is sweet`,`I like sweet`));
console.log (getLongerText(`Sweetness can cause diabetes.`,`I dont like sweet`));