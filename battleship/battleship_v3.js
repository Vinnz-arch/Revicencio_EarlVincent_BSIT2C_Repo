// declaring variable
var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];
// Store ship locations in an array

let guess;
let hits = 0;
let guesses = 0;
var isSunk = false;

// Game logic

while (isSunk == false) {
    guess = prompt("Ready! Aim, Fire! (enter number 0-6)");

    if (guess == null) {
        alert("thank you for playing!");
        break;
    }

    guess = parseInt(guessm, 10);
    // convert input to a number base 10
    
    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid cell number between 0 and 6!");
        continue;
        // skip the code
    }
    
    guesses++;  

    const hitIndex = shipLocations.indexOf(guess);

    if (hitIndex !== -1) { // -1 means not found
        alert("Hit!");
        shipLocations.slice(hitIndex, 1);
        hits++;
        if (shipLocations.length === 0) {
            isSunk = true;
        }
    } else {
        alert("Miss!");
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
var stats = "You Took" + guesses + "guesses to sink the battleship!/n" + "Accuracy:" + accuracy + "%";
alert(stats);