var answer = Math.floor((Math.random() * 50) + 1);
function generate(){
	answer = Math.floor((Math.random() * 50) + 1);
	console.log(answer);
}

function cheat() {
	alert("The correct answer is " + answer);
}

function checkGuess(){
	var guess = document.getElementById("inputGuess").value;
	var lives = Number(document.getElementById("guessLeft").innerHTML);
	var played = Number(document.getElementById("playRound").innerHTML);
	var won = Number(document.getElementById("wonRound").innerHTML);
	var lost = Number(document.getElementById("lostRound").innerHTML);
	var money = Number(document.getElementById("idAmount").innerHTML);
	var bet = Number(document.getElementById("idMoney").value);
	if(guess > answer){//If the guess was too high
		lives = lives - 1; //minus one guess
		alert("Your guess is too high");
		document.getElementById("guessLeft").innerHTML = lives;
			if(document.getElementById("guessLeft").innerHTML == 0){//If you run out of guesses
				money = money - bet; //minus amount of money bet
				document.getElementById("idAmount").innerHTML = money ;
				lost += 1; //add one to rounds lost
				document.getElementById("lostRound").innerHTML = lost;
				alert("You ran out of guesses! You lose! The correct answer was " + answer);
				lives = 6; //reset lives
				document.getElementById("guessLeft").innerHTML = lives;
				played += 1; //add one to rounds played
				document.getElementById("playRound").innerHTML = played;
				generate();
					if(document.getElementById("idAmount").innerHTML == 0){
						alert("You ran out of money! You lose");
						document.getElementById("idAmount").innerHTML = 500;
						document.getElementById("inputGuess").value = "";
						document.getElementById("guessLeft").innerHTML = 6;
						document.getElementById("playRound").innerHTML = 0;
						document.getElementById("wonRound").innerHTML = 0;
						document.getElementById("lostRound").innerHTML = 0;
						generate();	
					}
			}
	}
	
	else if(guess < answer){//If the guess was too low
		lives = lives - 1 ;//minus one guess
		alert("Your guess is too low");
		document.getElementById("guessLeft").innerHTML = lives;
			if(document.getElementById("guessLeft").innerHTML == 0){
				money = money - bet ;//minus amount of money bet
				document.getElementById("idAmount").innerHTML = money ;
				lost += 1;
				document.getElementById("lostRound").innerHTML = lost;
				alert("You ran out of guesses! You lose! The correct answer was " + answer);
				lives = 6;
				document.getElementById("guessLeft").innerHTML = lives;
				played += 1;
				document.getElementById("playRound").innerHTML = played;
				generate();
					if(document.getElementById("idAmount").innerHTML == 0){
						alert("You ran out of money! You lose");
						document.getElementById("idAmount").innerHTML = 500;
						document.getElementById("inputGuess").value = "";
						document.getElementById("guessLeft").innerHTML = 6;
						document.getElementById("playRound").innerHTML = 0;
						document.getElementById("wonRound").innerHTML = 0;
						document.getElementById("lostRound").innerHTML = 0;
						generate();	
					}
			}
	}
	
	else{//when you win the round
		alert("You guessed the correct answer");
		money = money + bet*2;
		document.getElementById("idAmount").innerHTML = money ;
		lives = 6 ;//reset lives
		document.getElementById("guessLeft").innerHTML = lives;
		won += 1 ;//add one to rounds won
		document.getElementById("wonRound").innerHTML = won;
		played += 1; // add one to rounds played
		document.getElementById("playRound").innerHTML = played;
		generate();
	}
}

function restart(){ //reset all values
	document.getElementById("inputGuess").value = "";
	document.getElementById("guessLeft").innerHTML = 6;
	document.getElementById("playRound").innerHTML = 0;
	document.getElementById("wonRound").innerHTML = 0;
	document.getElementById("lostRound").innerHTML = 0;
	document.getElementById("idMoney").value = "";
	document.getElementById("idAmount").innerHTML = 500;
	generate();
}