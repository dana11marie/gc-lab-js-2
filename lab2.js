// for loop example

for(var i=1; i<=10; i++) {
	console.log(i);
}


// while loop example

var i = 10;

while(i < 18) {
	console.log("You are " + i + " years old!");
	i++;
}

console.log("You are legally an adult!");

//function example

function playGame(game) {
	console.log("Let's play " + game + "!");
}

for (var i = 0; i < 4; i++) {
	playGame("Uno");
	playGame("Checkers");
}


// LAB 2

function convertTemp(inputTemp, inputUnit) {
	var outputTemp;
	if(inputUnit === "F"){
	  outputTemp = (inputTemp - 32) * (5/9);
	  console.log("The temperature " + inputTemp + " degrees Fahrenheit is equal to " + outputTemp + " degrees Celsius.")
	}
	else if (inputUnit === "C"){
	  outputTemp = (inputTemp * (9/5)) + 32;
	  console.log("The temperature " + inputTemp + " degrees Celsius is equal to " + outputTemp + " degrees Fahrenheit.")
	}
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");

// figure it out

var randomNumber = Math.floor(Math.random()*10);
var chooseNumber;

do
chooseNumber = prompt("Choose a number 1-10.");
while
(chooseNumber !== randomNumber);

if(chooseNumber === randomNumber) {
	chooseNumber = alert(GoodWork!)
}

// if (chooseNumber !== randomNumber) {
// 	chooseNumber = prompt("Not a match. Guess again.");
// } else if (chooseNumber === randomNumber) {
// 	chooseNumber = prompt("Good work!");
// }
