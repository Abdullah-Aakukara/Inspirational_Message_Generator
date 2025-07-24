console.log("Hello! \nHere's your today's Message!");
// function to randomly return subject
function selectSubject(arr) {
     let index = Math.floor(Math.random() * arr.length)
     return arr[index];
}
// function to randomly return verbs
function selectVerb(arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
const displayMessage = (fun1, fun2) => {
    console.log("You " + fun2() + fun1() + ' !');
}