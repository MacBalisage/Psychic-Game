var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0
var losses = 0
var attempts = 9

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById('para');
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]

     var userGuess = event.key.toLowerCase();
     
     // console.log(computerGuess)

        if (userGuess === computerGuess) {
        wins++;
        attempts = 9
       
        }
        else if (userGuess !== computerGuess) {
        attempts = -1
        
        }
        else {
        loses++    
        };

    

    directionsText.textContent = "";

    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    attempsText.textContent = "attempts: ";

    //computerChoiceText.textContent = computerGuess;

    //console.log(computerChoiceText.textContent);

}