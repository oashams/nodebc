/*Create a new index116.js file
Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output
*/
const getHexaColor= function (webcolor) {
    switch(webcolor){
        case 'white':
            return "#FFFFFF"
            break;
                 case 'black':
                    return "#000000"
                        break;    
                            case 'blue':
                                return "#0b24fb"
                                    break;    
                                    case 'green':
                                        return "#0e7e12"
                                            break;
                                            case 'yellow':
                                                  return '#fffd38';
                                                            break;
                                                                case 'pink':
                                                                return '#fec1cc';
                                                                break;   
               
    }   

}
console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('pink'));   
