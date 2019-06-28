var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numAttempts = 9;
var guessChoices = [];

//var directionsText = document.getElementById("directions-text");
//var userChoiceText = document.getElementById("userchoice-text");
//var computerChoiceText = document.getElementById('para');
//var winsText = document.getElementById("wins-text");
//var lossesText = document.getElementById("losses-text");

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    //console.log(computerGuess);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //var userGuess = event.key.toLowerCase();

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            numAttempts = 9;
            guessChoices = [];
        }
        if (userGuess !== computerGuess) {
            numAttempts--;
            guessChoices.push(userGuess);
        }
        if (numAttempts === 0) {
            numAttempts = 9;
            losses++;
            guessChoices = [];
        }

        var html =
            "<h1> The  Psychic Game </h1>" +
            "<p> Guess what letter I'm thinking of </p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Loses: " + losses + "</p>" +
            "<p>Attemps left: " + numAttempts + "</p>" +
            "<p>Your guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html
        //directionsText.textContent = "";

        //userChoiceText.textContent = "You chose: " + userGuess;
        //computerChoiceText.textContent = "The computer chose: " + computerGuess;
        //winsText.textContent = "wins: " + wins;
        //lossesText.textContent = "losses: " + losses;
        //attempsText.textContent = "attempts: ";
    }
    //computerChoiceText.textContent = computerGuess;
    //console.log(computerChoiceText.textContent);
};