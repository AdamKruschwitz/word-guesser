// PSEUDOCODE
// Get a random word
// Start a timer which counts down to 0
// Display "_" instead of each character in the chosen word
// When the player presses a letter key that isn't in guessed
    // Reveal that character from the chosen word if it appears and add it to guessed (make a guess)
// When random word is fully revealed
    // Record a win in local memory
    // Move to a " You win! " screen and stop the timer
// When the timer runs out                  X
    // Recording a loss in local memory     X                                                               
    // Move to a " You Lose! " screen       X                                                                

// TODO: Get a random word
var word = "Banana";

var timerValue = 60; // 60 seconds
var timerEl = document.createElement("p");
timerEl.innerHTML = timerValue;
var timer = setInterval(function(){
    // Timer function
    timerValue--;
    timerEl.innerHTML = timerValue;
    if(timerValue <= 0){
        // TODO: Bring to loss screen
        recordLoss();
        buildLossScreen();
        clearTimeout(timer); // Stops the timer
    }
}, 1000);

function buildLossScreen() {
    // Create the loss screen elements
}

function recordLoss() {
    // Records the loss in local memory
}