/*Create a new index119.js file
Define the following array:
const data = [42, true, function() {return 'The meaning of life is: '}];
If the second item from data is true then show the following output using the first and last items from the data array:
The meaning of life is: 42
*/
/*const data = [42, true, function() {
    return 'The meaning of life is: '}];
    
  
  const age = data [0];
  const nullValue = [1]
  const message = data[2];

  console.log(age);
  console.log(message);
  console.log (nullValue);
  console.log (data);*/
  // Ready to have your mind blown?
  const data=[42,true,function(){return 'The meaning of life is:'}];
const greeting=data[2];
if(data[1]===true){
    console.log(greeting(),data[0]);
}   