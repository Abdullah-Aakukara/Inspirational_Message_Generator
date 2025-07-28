import { verbStrings, subjectStrings, objectStrings } from "./data.js";
console.log("Hello, \nHere's your today's Message!");

// helper function to return random index num
let randomIndex = (num => Math.floor(Math.random() * num));

let randomObject = objectStrings[randomIndex(objectStrings.length)];
let randomVerb = verbStrings[randomIndex(verbStrings.length)];
let randomSubject = subjectStrings[randomIndex(subjectStrings.length)];
let message = `${randomObject} ${randomVerb} ${randomSubject}`;

console.log(message);
