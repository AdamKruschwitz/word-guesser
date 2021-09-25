// PSEUDOCODE
// Get a random word
// Start a timer which counts down to 0                     X
// Display "_" instead of each character in the chosen word X
// When the player presses a letter key that isn't in guessed
    // Reveal that character from the chosen word if it appears and add it to guessed (make a guess)
// When random word is fully revealed
    // Record a win in local memory
    // Move to a " You win! " screen and stop the timer
// When the timer runs out                  X
    // Recording a loss in local memory     X                                                               
    // Move to a " You Lose! " screen       X                                                                

// TODO: Get a random word
// Get game element
var gameEl = window.document.getElementById("game");
var word = "BANANA";
var acceptableChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var guessedChar = ""

var charEls = [];

// Start Timer
var timerValue = 60; // 60 seconds
var timerEl = document.createElement("p");
timerEl.innerHTML = timerValue;
var timer = setInterval(function(){
    // Timer function
    timerValue--;
    timerEl.innerHTML = timerValue;
    if(timerValue <= 0) {
        // Loss case, the timer ran out
        recordLoss();
        clearSpace();
        buildLossScreen();
        clearTimeout(timer); // Stops the timer
    }
}, 1000);

buildWordDisplay();

function buildWordDisplay() {
    // displays global variable word for game, all characters as _
    for(let i=0; i<word.length; i++) {
        let charEl = document.createElement("span");
        charEl.innerHTML = "_";
        charEl.setAttribute("data-letter", word[i]);
        charEl.setAttribute("data-state", "hidden")
        charEls.push(charEl);
        gameEl.appendChild(charEl); // Might change to add spans to a header tag
    }
}

document.addEventListener("keydown", onKeyboardPress);

// get letter thats been pressed
// get that letter
function onKeyboardPress(event) {
    var key = event.key.toUpperCase();
    console.log(key);
    if (acceptableChar.includes(key) && !guessedChar.includes(key)) {
        makeGuess(key);
    } 
}

function makeGuess(char) {
    guessedChar += char;

    // Check whether the character is one of the hidden characters
    for(let i=0; i<charEls.length; i++) {
        if(charEls[i].dataset.letter === char) {
            // If it is, reveal it
            charEls[i].innerHTML = charEls[i].dataset.letter;
            charEls[i].setAttribute("data-state", "visible");
        }
    }

    // Check whether guess was winning
    if(checkWin()) {
        clearTimeout(timer);
        clearSpace();
        buildWinScreen();
    }
}

function checkWin() {
    let win = true;
    for(let i=0; i<charEls.length; i++) {
        if(charEls[i].dataset.state === "hidden") win = false;
    }
    console.log(win);
    return win;
}

function buildLossScreen() {
    // Create the loss screen elements
    let text = document.createElement("h1");
    text.innerHTML = "You Lose!";
    gameEl.appendChild(text);

    buildStats();
}

function recordLoss() {
    // Records the loss in local memory
}

function buildWinScreen() {
    // Builds the win screen
    let text = document.createElement("h1");
    text.innerHTML = "You Win!";
    gameEl.appendChild(text);

    buildStats();
}

function clearSpace() {
    gameEl.innerHTML = "";
}

function buildStats() {
    // Builds stats table taking from localStorage
    
}