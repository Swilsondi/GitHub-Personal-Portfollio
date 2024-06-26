const prompt = require('prompt-sync')();

//prompt user for name
var name = prompt("What is your first name? ");
// declare variable for and slice the first letter of name
var firstLetter = name.slice(0,1);

//change the first letter to uppercase
firstLetter = firstLetter.toUpperCase();

//seperate and declare rest of name as a variable
var restOfName = name.slice(1,name.length);

//make sure to have the rest of name as lowercase so set the variable to lowercase
restOfName = restOfName.toLowerCase();

//output the messsage hi + the first letter of name that we capatilized and add the rest of name that we made lowercase using string concatonation
console.log("Hi " +firstLetter + restOfName);

//repeat steps for last name
var lastName = prompt("What is your last name? ");
var lastLetter = lastName.slice(0,1);

lastLetter = lastLetter.toUpperCase();
var restOfLastName = lastName.slice(1,lastName.length);
restOfLastName = restOfLastName.toLowerCase();

//final output with first and last name both first letters capatalized with the closing message.
console.log("Your name is " + firstLetter + restOfName + " "+ lastLetter + restOfLastName);



