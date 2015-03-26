//*
//Shelby West
//SDI C201503
//Functions Assignment

//Variables
var whichLottery = prompt("Which lottery would you like the numbers for? \n\nEnter 'Florida' for Florida 'Powerball' for the Powerball");

//Functions
function promptValidation(lottery){
    while (lottery === "" ) {
        lottery = prompt("Please enter either 'Florida' or 'Powerball.'");
    }
    return lottery;
}

//Main Code
whichLottery = promptValidation(whichLottery);
console.log(whichLottery);
