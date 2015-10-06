// Star Trek Adventure game

// How to play:

// Respond to questions game provides.

// To win defeat all enemy ships.

// Variables / Functions

// Klingon Attack chosen at random
var KA;
var Random = Math.random();

var KAF = function(){
	Random = Math.random();
	if(Random < 0.33){
		KA = (Math.random()) * 1000;
	}
	if(0.33 < Random < 0.66){
		KA = (Math.random()) * 2000;
	}
	if(0.66 < Random){
		KA = (Math.random()) * 500;
	}
	Random = Math.random();
};

// Kligon Living or not
var KL = true;

// Klingon 1 Energy
var K1E = 700;

// Klingon 2 Energy
var K2E = 700;

// Klingon 3 Energy
var K3E = 700;

// Enterprise 1 Energy
var E1E = 1000;

// Fighter Attack
var Fighters = 75;

// Torpedoes left
var Tleft = 2;

// Potion value
var P = 200;

// Phasers Energy
var PA = 0.2;

// Torpedoes Energy
var TE = 150;

// Photon Energy
var PE = 100;

// Shield 0 Cost
var S0C = 0;

// Shield 1 Cost
var S1C = 20;

// Shield 2 Cost
var S2C = 30;

// Shield 3 Cost
var S3C = 40;

// Shield 4 Cost
var S4C = 50;

// Shield 0 Value
var S0V = 0;

// Shield 1 Value
var S1V = 0.125;

// Shield 2 Value
var S2V = 0.25;

// Shield 3 Value
var S3V = 0.375;

// Shield 4 Value
var S4V = 0.5;

// Free Energy per Turn
var FEperT = 20;

// Source Code

// Asks users what their name is and Welcomes them
var userName = prompt("Welcome to the Star Trek Adventure Game, Please Enter Name bellow.");

// Has user say if they want to play the game
confirm("Hello " + userName + ", are you ready to start your adventure?");

// Gives user option to be a Commander of and Enterprise ship or Fighter Squad

var userOption = prompt("Do you want to be a Commander of Enterprise Ship or Fighter Squad?");


// if user chooses Enterprise it will take them down this path

if (userOption === "Enterprise Ship") {
	alert("Congratulation's on choosing the Enterprise Ship, this will be an exciting adventure.");

	userOption = prompt("As commander of the Starship Enterprise you have been searching the galaxy to discover new things. Suddenly you come across 3 Klingons. Do you wish to Attack or Run?");

	if (userOption === "Attack") {

		confirm("Good choice captain How to play: All ships gain/loose Energy Attack: Photons(PO) 100E, Torpedoes(P) 150E get 2, and Phasers(PA) 10% Defend: Shields(S# 1-4 S3) Protect up to 50%, Fighters(F) take 75E from enemy and give it to you, and Potions(P) +200 to your healt Kill all 3 Klingons to win");


		// while you or the enemy is not dead continue the game
		while (E1E > 0 && KL) {
			// Function to set Klingon attack
			KAF();
			
			// Asks where to attack
			userOption = prompt("Which ship would you like to attack 1, 2, 3?");

			if (userOption === "1") {
				userOption = prompt("Enter attack command");

				if (userOption === "PO") {
					K1E = K1E - PE;
				}

				if (userOption === "T") {
					K1E = K1E - TE;
					Tleft = Tleft - 1;
				}
				
				if(userOption === "PA"){
					K2E = K2E - (K2E * PA);
				}

				// Asks how to defend
				userOption = prompt("Enter defend command");
				// Function to set Klingon attack
			KAF();
			
				if (userOption === "S0") {
					E1E = E1E - KA;
				}

				if (userOption === "S1") {
					E1E = E1E - (KA * S1V);
					E1E = E1E - S1C;
				}

				if (userOption === "S2") {
					E1E = E1E - (KA * S2V);
					E1E = E1E - S2C;
				}

				if (userOption === "S3") {
					E1E = E1E - (KA * S3V);
					E1E = E1E - S3C;
				}

				if (userOption === "S4") {
					E1E = E1E - (KA * S4V);
					E1E = E1E - S4C;
				}

				if (userOption === "F") {
					K1E = K1E - Fighters;
					E1E = E1E + Fighters;
				}
				
				if (userOption === "P"){
					E1E = E1E + P;
				}
				// Gives free Energy
				E1E = E1E + FEperT;

				confirm("Enterprise Energy = " + E1E + "     Klingon 1 Energy = " + K1E + "     Klingon 2 Energy = " + K2E + "     Klingon 3 Energy = " + K3E + "     Torpedoes left = " + Tleft);
			}




			if (userOption === "2") {
				
				userOption = prompt("Enter attack command");

				if (userOption === "P") {
					K2E = K2E - PE;
				}

				if (userOption === "T") {
					K2E = K2E - TE;
					Tleft = Tleft - 1;
				}
				
				if(userOption === "PA"){
					K1E = K1E - (K1E * PA);
				}

				// Asks how to defend
				userOption = prompt("Enter defend command");
				// Function to set Klingon attack
			KAF();
			
				if (userOption === "S0") {
					E1E = E1E - KA;
				}

				if (userOption === "S1") {
					E1E = E1E - (KA * S1V);
					E1E = E1E - S1C;
				}

				if (userOption === "S2") {
					E1E = E1E - (KA * S2V);
					E1E = E1E - S2C;
				}

				if (userOption === "S3") {
					E1E = E1E - (KA * S3V);
					E1E = E1E - S3C;
				}

				if (userOption === "S4") {
					E1E = E1E - (KA * S4V);
					E1E = E1E - S4C;
				}

				if (userOption === "F") {
					K2E = K2E - Fighters;
					E1E = E1E + Fighters;
				}
				
				if (userOption === "P"){
					E1E = E1E + P;
				}
				// Gives free Energy
				E1E = E1E + FEperT;

				confirm("Enterprise Energy = " + E1E + "     Klingon 1 Energy = " + K1E + "     Klingon 2 Energy = " + K2E + "     Klingon 3 Energy = " + K3E + "     Torpedoes left = " + Tleft);
			}



			if (userOption === "3") {
				userOption = prompt("Enter attack command");

				if (userOption === "P") {
					K3E = K3E - PE;
				}

				if (userOption === "T") {
					K3E = K3E - TE;
					Tleft = Tleft - 1;
				}
				
				if(userOption === "PA"){
					K3E = K3E - (K3E * PA);
				}

				// Asks how to defend
				userOption = prompt("Enter defend command");
				// Function to set Klingon attack
				KAF();
			
				if (userOption === "S0") {
					E1E = E1E - KA;
				}

				if (userOption === "S1") {
					E1E = E1E - (KA * S1V);
					E1E = E1E - S1C;
				}

				if (userOption === "S2") {
					E1E = E1E - (KA * S2V);
					E1E = E1E - S2C;
				}

				if (userOption === "S3") {
					E1E = E1E - (KA * S3V);
					E1E = E1E - S3C;
				}

				if (userOption === "S4") {
					E1E = E1E - (KA * S4V);
					E1E = E1E - S4C;
				}

				if (userOption === "F") {
					K3E = K3E - Fighters;
					E1E = E1E + Fighters;
				}
				
				if (userOption === "P"){
					E1E = E1E + P;
				}
				// Gives free Energy
				E1E = E1E + FEperT;

				confirm("Enterprise Energy = " + E1E + "     Klingon 1 Energy = " + K1E + "     Klingon 2 Energy = " + K2E + "     Klingon 3 Energy = " + K3E + "     Torpedoes left = " + Tleft);
			}
			
			// Sees if all the Klingons are dead
			if(K1E <= 0){
				if(K2E <= 0){
					if(K3E <= 0){
						KL = false;
					}
				}
			}
		}

	}

	if (userOption === "Run") {
		userOption = prompt("OK captain should I set course for Delta Quadrant, or the Federation Neutral Zone");

		if (userOption === "Delta Quadrant") {
			alert("Ok Captain, set cordinates for D1, D1. Initiating HyperDrive with Warp Speed.");

			userOption = prompt("We have a problem, my scanners pick up a meteor shower coming our way. Do you wish to Land on Uranus, or Stay on Coarse?");

			if (userOption === "Land on Uranus") {
				alert("We have succesfully landed on Uranus but this is a strange planet filled with wierd creatures. We must get a hold of the Federation to rescue us before...");
			}

			if (userOption === "Stay on Coarse") {
				alert("Captain the meteors are to strong, our ship is getting torn to peices. I cant hold the ship down much longer. Ahh");
			}
		}

		if (userOption === "Federation Neutral Zone") {
			alert("Good choice Captain, Ill get us home quick.");
		}
	}
	if (KL === false) {
		alert("Congratulations on defeating the Klingons, you are the bravest Captian I have ever seen. I cant wait to see how proud the federation will be of you.");
	}

	if (E1E <= 0) {
		alert("Sir our ship has been destroyed our and our fleet cant escape. Noooooo,  Klingons boarding ship to kill us all. Help us please...");
	}
}
// if user chooses Fighter Squad it will take them down this path

if (userOption === "Fighter Squad") {
	alert("Welcome to Alpha Supreme Fighter Squad. I hope your ready for the fast paced thrills.");

	userOption = prompt("The commander of the ship orders you to gather the men of your choice to go into battle. Do you want 5 Of Your Best Men, or 20 Regular Men?");

	if (userOption === "5 Of Your Best Men") {
		alert("Good choice those 5 best men will be able kill more Klingons than the regular men.");

		userOption = prompt("Do you want to send your men All At Once, or In Batches Of 2");

		if (userOption === "All At Once") {
			alert("All your men die because of a space bomb.");
		}

		if (userOption === "In Batches Of 2") {
			alert("Your men successfully get to the enemy main ship and destroys it energy converters.");
		}
	}

	if (userOption === "20 Regular Men") {
		alert("I agree the ships can fly themselves so the more men the better.");


		userOption = prompt("Do you want to send your men All At Once, or In Batches Of 2");

		if (userOption === "All At Once") {
			alert("All your men die because of a space bomb.");
		}

		if (userOption === "In Batches Of 2") {
			alert("Your men successfully get to the enemy main ship and destroys it energy converters.");


		}
	}
}