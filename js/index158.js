/*Create a new index158.js
Copy and paste the code from the previous exercise ()
Refactor the code to match new requirements
Define a budget variable
Add all PS4 games price and assign it to the budget variable
Show the following message as output:
I need %budget% CAD to get all this PS$ great games!!
Define a new gameNames array and assign all the games names (all strings)
Define a new gamePrices array and assign all the games prices (all numbers)
Show the gameNames items as output
Show the gamePrices items as output
*/
/*Create a new index157.js
Copy and paste the code from exercise 156
Refactor the code to match requirements
At the beginning of the code define a console variable and assign one of the following values as string: PS4 or XBOX
Iterate over the games array and filter to show only the ones which console property equals the selected console variable value
Basically we filter games by PS4 or XBOX using the array filter method
*/
let budget= 0 
let cons = ["XBOX","PS4"];
const games = [{
    name: "Crash Bandicoot N. Sane Trilogy",
    price: 1060,
    sold: 20,
    console: "PS4",
    showDetail: function(){
    console.log ('**********************');
    console.log ("Name:"+this.name);
    console.log ("Price:$"+this.price);
    console.log("Sold:$"+this.sold);
    console.log ("Console:"+this.console);
}
},
{ name:'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{ name:'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{ name:'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{ name:'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
        }
},
{ name:'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{ name:'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{ name:'Mortal Kombat X1',
    price: 940,
    sold: 30,
    console: 'XBOX',   
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
},
{
    name: "Need For Speed",
    price: 790,
    sold: 10,
    console: "PS4",
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }
  },
  {
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }  
},
  {
    name: "Resident Evil 7",
    price: 1390,
    sold: 10,
    console:"PS4",
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }  
},
  {
    name: "Dragon Ball XX",
    price: 1390,
    sold: 25,
    console: "XBOX",
    showDetail: function(){
        console.log ('**********************');
        console.log ("Name:"+this.name);
        console.log ("Price:$"+this.price);
        console.log("Sold:$"+this.sold);
        console.log ("Console:"+this.console);
    }  
},

];
let gameFilter = games.filter(function (game){
    return game.console==cons[1];
  });
  gameFilter.forEach(function(game){
      budget = budget + game.price;
      game.showDetail();
  })
  console.log (`I need ${budget} CAD to get all this PS4 Great Games`);
  let gameNames = [];
  games.forEach(function(game){
      gameNames.push(game.name);
  });
  console.log('*****Games Names*****');
  console.log (gameNames);
  let gamePrices = [];
games.forEach(function(game){
    gamePrices.push(game.price);
});
console.log('******Game Prices');
console.log(gamePrices);
