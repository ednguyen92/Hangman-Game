// GLOBAL Variables

//Array of Pokemon names to use
var pokemonNames = ["pikachu", "squirtle", "charmander", "bulbasaur"];
//Chosen name to guess 
var choosenPokemon = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var num = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

// Functions

function restartGame()
{
	//Chooses word randombly from the wordBank
	choosenPokemon = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenPokemon.split('');
	//Get the number of blanks
	numBlanks = lettersInWord.length;
	
	//RESET
	//===========================================================
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	test=false;
	startGame();
}