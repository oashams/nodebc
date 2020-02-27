const greet = (first, last, callback) => {
    console.log(`Hi ${first} ${last}`, typeof first, typeof last, typeof callback)
    callback();
    console.log('This is a very important piece of logic')
}
const callbackFunction = () => console.log('This code gets executed after the greet function call');

greet('John', 'Rambo', callbackFunction);
