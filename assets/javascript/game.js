var wins = 0;
var losses = 0;
var guessesLeft = 10;
//var guessCount = 0;
var allGuesses = []; //prints all guessed letters to screen

//create an array that lists all possible letter choices
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//var randomLetter = letters[Math.floor(Math.random() * letters.length)];
//console.log(randomLetter);
function newRandomLetter() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
  //console.log(randomLetter);
}
//var randomLetter = newRandomLetter();
newRandomLetter();
console.log(randomLetter);

document.onkeypress = function(event) {
  var playerGuess = event.key;
  //console.log(playerGuess);
  //validate playerGuess as a letter
  if (letters.includes(playerGuess)) {
    allGuesses.push(playerGuess);
    document.getElementById("letterGuess").innerText = allGuesses;
  } else {
    alert("Not a valid guess. Please guess the 'letter' I'm thinking of.");
  }
  //if player's guess = computer guess, player wins; increment wins by 1, reset game, clear guesses, congratulate on win
  //if player's guess not = computer guess/random letter
  if (playerGuess === randomLetter) {
    wins++;
    document.getElementById("winNum").innerText = wins;
    allGuesses = []; //or use allGuesses.length = 0
    alert(
      "Wow! You are a psychic! The correct letter was " +
        randomLetter + ". I dare you to try again."
    );
    //console.log("wins: " + wins++);
    guessesLeft = 10;
    newRandomLetter();
    console.log(randomLetter);
  } else {
    guessesLeft--;
    //console.log("guesses left: " + guessesLeft);
    document.getElementById("guessNum").innerText = guessesLeft;
  }
  //until guesses reach 0, log a loss, reset game
  if (guessesLeft === 0) {
    losses++;
    allGuesses = [];
    document.getElementById("lossNum").innerText = losses;
    //console.log("losses= " + losses);
    alert(
      "Sorry. You are evidently not psychic. The correct letter was " +
        randomLetter + ". Try again."
    ); //how could I use confirm to ask and then reset for null response?
    guessesLeft = 10;
    newRandomLetter();
    console.log(randomLetter);
  }

  //for duplicate letter guesses, still counts as a guess but not written to allGuesses array again
  //if (allGuesses.indexOf(playerGuess) >= 0 ) {
  //  alert("You aleady guessed a " + playerGuess + ". Please try another letter.");
  //}else {
  //  allGuesses.push(playerGuess);
  //document.getElementById("letterGuess").innerText = allGuesses;
  //}

  //to end game after so many losses and reset to beginning
  if (losses >= 7) {
    alert("I don't think you're psychic. Please try another game.");
    losses = 0;
    wins = 0;
    allGuesses = [];
    guessesLeft = 10;
  }
  //to end game after so many wins and reset to beginning
  if (wins >= 7) {
    alert("You're a psychic pro! No more proof of your abilities is needed.");
    losses = 0;
    wins = 0;
    allGuesses = [];
    guessesLeft = 10;
  }

  console.log("guesses left= " + guessesLeft);
  console.log("letters guessed= " + allGuesses);
  //document.getElementById("lossNum").textContent = losses;
  //document.getElementById("winNum").textContent = wins;
  //document.getElementById("guessesNum").textContent = guessesLeft;
  //document.getElementById("letterGuess").textContent = allGuesses;
};
