const prompt = require('prompt-sync')();

//declare variable for the prompt and user to enter data

var typeTweet = prompt("Enter your tweet ");

//figure out hpw to count the charachters of the typeTweet variable

var typeTweetCharachters = typeTweet.length;

//Calculate how many charchters are left up to 240

var typeTweetRemaining = (140- typeTweetCharachters);

// slice the extra charachters over 140
var tweetUnder140 = typeTweet.slice(0, 140);

// display outputs

console.log(typeTweet + " Do you want to send tweet? You have written " + typeTweetCharachters + " charachters. You have " + typeTweetRemaining + " remaining " + tweetUnder140);