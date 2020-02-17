/*Create a new index114.js file
Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :)*/
let revert = function (str) {
    let word= '';
    for (let x=str.length -1; x>=0;x--){
        word+=str [x]
    }
    return console.log (word)
}
revert(`hello`);
revert(`love`);
revert(`difficult`);


/*
    let text = "hello"
    var splitString = text.split("");
    console.log (splitString)
    var reverseArray = splitString.reverse("");
    console.log (reverseArray)
    var joinArray = reverseArray.join("")
    console.log (joinArray) */   
/*const a = "hello";    
    function reverseString(str) {
        console.log(str.split("").reverse().join(""));
    }
    reverseString(a);*/