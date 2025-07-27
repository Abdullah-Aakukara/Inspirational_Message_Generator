const objectOfstrings = require('./data.js')
console.log("Hello, \nHere's your today's Message!");
// helper function to return random index num
let randomIndex = (num) => {
    return Math.floor(Math.random() * num)
}
let arrOfStrings = [];
// iterating through the object 
for (const key in objectOfstrings) {
    if (Array.isArray(objectOfstrings[key])) {
        let index = randomIndex(objectOfstrings[key].length);
        arrOfStrings.push(objectOfstrings[key][index]);
    }
}
let message = arrOfStrings.join(' ');
console.log(message);


