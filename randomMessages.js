const objectOfstrings = require('./data.js')
console.log("Hello! \nHere's your today's Message!");
// function to randomly return subject
function returnSubject(arr) {
     let index = Math.floor(Math.random() * arr.length)
     return arr[index];
}
// function to randomly return verbs
function returnVerb(arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
// function to randomly return objects
function returnObject(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
const displayMessage = (fun1, fun2, fun3) => {
    console.log(fun1(objectOfstrings.objectStrings) + ' ' + fun2(objectOfstrings.verbStrings) + ' ' + fun3(objectOfstrings.subjectStrings) + ' !');
}

displayMessage(returnObject, returnVerb, returnSubject);
console.log(objectOfstrings)

