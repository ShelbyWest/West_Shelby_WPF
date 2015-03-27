//*
//Shelby West
//SDI C201503
//Functions Assignment

//Variables

var whichLottery = prompt("Which lottery would you like the numbers for? \n\nEnter 'florida' for Florida 'powerball' for the Powerball"); //Asking the user which lottery numbers they would like to see
var pbNumbers; //created the variable for the powerball number array
var powerball; //created the variable for the powerball number
var floridaLottery; //created the variable for the Florida lottery numbers

//Functions

function promptValidation(lottery){ //creating the function to assure that the user entered an answer to the prompt
    while (lottery === "" ) { //using a while loop to keep the user from leaving the prompt empty
        lottery = prompt("Please enter either 'florida' or 'powerball.'"); //asking the user to enter an answer to the first prompt
    }
    return lottery; //returning the variable lottery
}

function powerballNumbers(min, max, num){

    var lotteryNumberArray = [];

    for(var i = 0; i < num;  i++) {
        var lotteryNumber = Math.round(Math.random() * (max - min) + min);
        lotteryNumberArray[i] = lotteryNumber;
    }

    return lotteryNumberArray;
}

function pbNumber(min, max){

   var pb = Math.round(Math.random() * (max - min) + min);

    return pb

}

function floridaLotteryNumbers(min, max, num){

    var floridaArray = [];

    for(var b = 0; b < num; b++){
        var floridaNumbers = Math.round(Math.random() * (max - min) + min);
        floridaArray[b] = floridaNumbers;
    }
    return floridaArray;
}


//Main Code

whichLottery = promptValidation(whichLottery);


if(whichLottery === "powerball"){
    pbNumbers = powerballNumbers(1, 59, 5);
    powerball = pbNumber(1, 35);
    console.log("The powerball numbers are " +pbNumbers+ " with a powerball of " +powerball+ ".");

}else{
    floridaLottery = floridaLotteryNumbers(1, 53, 6);
    console.log("The Florida lottery numbers are" +floridaLottery+ ".");
}


