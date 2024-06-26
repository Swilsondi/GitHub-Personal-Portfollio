const prompt = require("prompt-sync")();

// Create a stock market app where you take a user's investments over the course of 4 years and find out how much was invested and the average per year.
// create variables for each item that needs to be displayed/inputed
// investment per year. Average per year


var usersFullName = prompt("Welcome, Enter Full Name to be registered for this stock exchange ");

var myInvestments2021 = prompt("How much would you like to invest in 2021?  ");

        console.log("Awesome " + usersFullName + " You invested " + myInvestments2021 + " For the Year 2021 ");
        console.log("Your investment this whole year will be: " + myInvestments2021);


var answerPrompt2021 = prompt("Yes or No to Continue ");

        console.log(answerPrompt2021);


var myInvestments2022 = prompt(" Confirmed. How much would you like to deposit for 2022?  ");
 var answerPrompt2022 = prompt("Confirm Y/N ");
    
 const num1 = myInvestments2021;
 const num2 = myInvestments2022;
 const sum12 =(+num1) + (+num2);

        console.log(usersFullName + " Confirmed." + myInvestments2022 + " This is your total for 2022. " + answerPrompt2022);

        console.log("And this is your total combined for both years " + sum12);


var myInvestments2023 = prompt("Now how much would you like to deposit for 2023?  ");

const num3 = myInvestments2023;
const sum123 = (+num1) + (+num2) + (+num3); 

        console.log(myInvestments2023 + " Awesome your on a streak. Here is your total for this year is? " + myInvestments2023 + " Is Your total so far yearly combined is: " + sum123);

var myInvestments2024 = prompt("Now finally how much would you like to deposit for 2024?  ");

const num4 = myInvestments2024;
const sum1234 = (+num1) + (+num2) + (+num3) + (+num4); 

            console.log(myInvestments2024 + " Your investment for the past four years total to be " + sum1234);

const dividend = (sum1234);
const divisor = (4);
const quotient1234 = Math.floor(dividend / divisor);

            console.log("You averaged out to be " + quotient1234 + " per year. You did great!  ");


