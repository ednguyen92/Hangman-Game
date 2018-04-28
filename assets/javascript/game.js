// GLOBAL Variables

//Array of Pokemon names to use
var pokemonNames = ["pikachu", "squirtle", "charmander", "bulbasaur"];
var sameLettersCheck = ["a","b","c",
                        "d","e","f",
                        "g","h","i",
                        "j","k","l",
                        "m","n","o",
                        "p","q","r",
                        "s","t","u",
                        "v","w","x",
                        "y","z"];
//Chosen pokemon to guess 
var choosenPokemon = "";
//Holds hidden letters in Word
var hiddenLetters = [];
//Holds number of underscores needed for word
var numUnderscores = 0;
//Holds Blanks and successful guesses
var underscoresAndSuccesses =[];
//Holds Wrong guesses
var guessesMade = [];
var trackPname = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var correctAnswers = 0;

// Functions

function startGame() {
	//Chooses word randombly from the wordBank
	choosenPokemon = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
	//Splits the choosen word into individual letters
	hiddenLetters = choosenPokemon.split("");
	//Get the number of blanks
	numUnderscores = hiddenLetters.length;
    
	letterGuessed = 0;
	correctAnswers = 0;
	guessesLeft = 9;
    guessesMade =[];
    trackPname =[];
    underscoresAndSuccesses =[];
    sameLettersCheck = ["a","b","c",
    "d","e","f",
    "g","h","i",
    "j","k","l",
    "m","n","o",
    "p","q","r",
    "s","t","u",
    "v","w","x",
    "y","z"];
    
    // Create blanks with For Loop
    for (var i =0; i < numUnderscores; i++) {
        underscoresAndSuccesses.push("_");
        document.getElementById("chosenWord").innerHTML = underscoresAndSuccesses;
    }
	//Changes HTML 
	document.getElementById("chosenWord").innerHTML = underscoresAndSuccesses.join(' ');
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guessesMade").innerHTML = guessesMade;
    console.log(choosenPokemon);
    console.log("start game working");
} 

function restartGame()
{
	choosenPokemon = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
	hiddenLetters = choosenPokemon.split("");
	numUnderscores = hiddenLetters.length;
	userGuess = 0;
	correctAnswers = 0;
	guessesLeft = 9;
    guessesMade =[];
    trackPname = [];
    underscoresAndSuccesses =[];
    sameLettersCheck = ["a","b","c",
    "d","e","f",
    "g","h","i",
    "j","k","l",
    "m","n","o",
    "p","q","r",
    "s","t","u",
    "v","w","x",
    "y","z"];
    check=false;
    startGame();
    console.log("reset game working");
}

function checkLetters(letterGuessed) {
    //If user key exist in choosen word then perform this function 
    if(choosenPokemon.indexOf(letterGuessed) > -1)
    {
        //Loops depending on the amount of blanks 
        for(var i = 0; i < numUnderscores; i++)
        {
            //Fills in underscores with correct letters
            if(hiddenLetters[i] == letterGuessed)
            {
                correctAnswers++;
                underscoresAndSuccesses[i] = letterGuessed;
                // track pokemon name used so when checking for wins and losses it will play audio based on chosen pokemon
                trackPname = underscoresAndSuccesses.join(" ");
                document.getElementById("chosenWord").innerHTML = underscoresAndSuccesses.join(" ");
                console.log(underscoresAndSuccesses);
                console.log(trackPname);
                console.log("correct Answer working");
            }	
        }
    }else
    {
        guessesMade.push(letterGuessed);
        guessesLeft--;
        //Changes HTML
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("guessesMade").innerHTML = guessesMade;
        console.log("Your guesses so far:  = " + guessesMade);
        console.log("Guesses left: " + guessesLeft);
    }
}
function checkWinorLoss()
{   
	// When number blanks if filled with right words then you win
	if(correctAnswers == numUnderscores && trackPname == "p i k a c h u" )
	{
		//Counts Wins 
        wins++;
        //Play audio when entire word is guessed correctly
        var audio = new Audio("assets/audio/Pikachu.mp3");
        audio.play();
        // Display Picture when entire word is guessed correctly
        // displayPikachu.style.display = 'block';
        //Changes HTML
        document.getElementById("wins").innerHTML = wins;
        // document.getElementById("displayPikachu").innerHTML = displayPikachu;
		restartGame();
	} else if (correctAnswers == numUnderscores && trackPname == "s q u i r t l e" ) {
        //Counts Wins 
        wins++;
        //Play audio when entire word is guessed correctly
        var audio = new Audio("assets/audio/Squirtle.mp3");
        audio.play();
        // Display Picture when entire word is guessed correctly
        // displaySquirtle.style.display = 'block';
        //Changes HTML
        document.getElementById("wins").innerHTML = wins;
        // document.getElementById("displaySquirtle").innerHTML = displaySquirtle;
		restartGame();
    } else if (correctAnswers == numUnderscores && trackPname == "c h a r m a n d e r" ) {
        //Counts Wins 
        wins++;
        //Play audio when entire word is guessed correctly
        var audio = new Audio("assets/audio/Charmander.m4a");
        audio.play();
        // Display Picture when entire word is guessed correctly
        // displayCharmander.style.display = 'block';
        //Changes HTML
        document.getElementById("wins").innerHTML = wins;
        // document.getElementById("displayCharmander").innerHTML = displayCharmander;
        // Call Function to restart game
        restartGame();
        
    } else if (correctAnswers == numUnderscores && trackPname == "b u l b a s a u r" ) {
        //Counts Wins 
        wins++;
        //Play audio when entire word is guessed correctly
        var audio = new Audio("assets/audio/Bulbasaur.mp3");
        audio.play();
        // Display Picture when entire word is guessed correctly
        // displayBulbasaur.style.display = 'block';
        //Changes HTML
        document.getElementById("wins").innerHTML = wins;
        // document.getElementById("displayBulbasaur").innerHTML = displayBulbasaur;
        // Call Function to restart game
        restartGame();

    }
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft == 0)
	{
		//Counts losses
		losses++;
		//Changes HTML
		document.getElementById("losses").innerHTML = losses;
        // Call Function to restart game
        console.log("check loss working");
		restartGame();
	}
}

//Main Code Calls Functions
startGame();

//Play an Audio at the start of game when page is refreshed
var audio = new Audio("assets/audio/poke-who.wav");
audio.play();

document.onkeyup = function(event)
{
	check = true;
    var userGuess = event.key;
    
	for(var i = 0; i < sameLettersCheck.length; i++)
	{	
        // Check to see if key guessed has been guessed yet or not
		if(userGuess === sameLettersCheck[i] && check === true)
		{
            var spliceWord = sameLettersCheck.splice(i,1);

			checkLetters(userGuess);
            checkWinorLoss();
            console.log("game initiate working");
		}
	}		
		
}

