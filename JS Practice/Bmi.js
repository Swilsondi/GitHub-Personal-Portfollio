const prompt = require("prompt-sync")();

var weight = prompt("What is your weight  ");
var height = prompt("What is your height  ");

height = Math.pow(height, 2);


function bmiCalculator(weight, height) {
    var bmi = (weight) / (height);
    var bmi = Math.floor(bmi);
}
bmiCalculator();
return bmiCalculator;
// work on this tommrow

//math.floor to round to the nearest whole dollar              