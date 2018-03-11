// Define words that computer can pick from
var computerChoices = ["pikachu", "squirtle", "charmander", "bulbasaur"];

// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];


      // Have computer pick a letter and store it in letterToBeGuessed
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);

          // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;

        /* Somehow figure out how to avoid "Control" etc */
         /*   if (event.charCode >= 97 && event.charCode <= 122)  {
            guessesMade.push(userGuess);
        } */

        var hiddenAnswer = [];
        var correctAnswer = 0;

        guessesMade.push(userGuess);
        
        for (var i = 0; i < computerGuess.length; i++) {
            /* computerGuess.charAt(i) is in guessesMade */
            /* how do i check if something is in an array */
            if (guessesMade.indexOf(computerGuess.charAt(i)) > -1) {
            hiddenAnswer[i] = computerGuess.charAt(i);
            correctAnswer++;
            }else {
                hiddenAnswer[i] = "_";  
                guessesLeft--;             
            } 
        }

        if (correctAnswer === hiddenAnswer.length) {
            wins++;
        }

    

        

       




    	// Displaying progress to HTML
        var html = "<p><h1>HangMan</h1></p>" + 
        "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
        "<p><h4>Wins: " + wins + "</h4></p>" + 
        "<p><h4>Losses: " + addRight + "</h4></p>" + 
        hiddenAnswer.join(" ") +
        "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
        "<p><h4>Your guesses so far: " + guessesMade + "</h4></p>";
        // place html into the game ID
        document.querySelector("#game").innerHTML = html;

        }