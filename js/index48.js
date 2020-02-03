const message = "3.14 it's a great number but 42 it's the answer to life";
const pi = parseFloat(message);
console.log (pi);
console.log(typeof pi);
const answerToLife = parseInt(message.substr(28,32));
console.log(answerToLife);
const result = pi+answerToLife;
console.log(`pi:${pi} \nanswerToLife:${answerToLife}`);
console.log (result.toString(),'is the result of adding pi and answerToLife');