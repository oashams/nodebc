/*Create a new index58.js file
Define a hour variable
Assign the hour variable a value between 1 and 24
If hour is bettwen 5 to 12 show the following message: Good morning
If hour is bettwen 12 to 18 show the following message: Good afternoon
If hour is bettwen 18 to 22 show the following message: Good evening
If hour is bettwen 22 to 5 show the following message: Good night
Change the hour value to test each case*/
var hours = 12;
if (hours>5 && hours<=12){
 console.log (`Good Morning`);   
} else if (hours>5 && hours<=18) {
    console.log (`Good Afternoon`);
} else if (hours>5 && hours<=22) {
    console.log (`Good Evening`);
} else {
    console.log (`Good Night`);
}


