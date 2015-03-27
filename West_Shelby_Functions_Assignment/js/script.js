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

function powerballNumbers(min, max, num){ //created the function to find the random powerball numbers

    var lotteryNumberArray = []; //created the variable for the array of lottery numbers

    for(var i = 0; i < num;  i++) { //making the loop that assures the right amount of numbers are entered into the array
        var lotteryNumber = Math.round(Math.random() * (max - min) + min); //using the math object to find a random group of numbers
        lotteryNumberArray[i] = lotteryNumber; //making sure each number in the array is a random number
    }

    return lotteryNumberArray; //returning the value of the array
}

function pbNumber(min, max){ //created the function that will find the powerball number

   var pb = Math.round(Math.random() * (max - min) + min); //using the math object to find a random powerball numbers

    return pb //returning the value of the powerball number

}

function floridaLotteryNumbers(min, max, num){ //created the function to find the Florida lottery numbers

    var floridaArray = []; //created the variable for the array of lottery numbers

    for(var b = 0; b < num; b++){ //using the for loop to assure that the number of numbers in the array is correct
        var floridaNumbers = Math.round(Math.random() * (max - min) + min); //using the math object to generate random numbers
        floridaArray[b] = floridaNumbers; //making sure each number in the array is a random number
    }
    return floridaArray; //returning the values in the array
}


//Main Code

whichLottery = promptValidation(whichLottery); //code to run the validation prompt to make sure the user enters a lottery type


if(whichLottery === "powerball"){ //using an if else statement to run the code for when the user enters 'powerball'
    pbNumbers = powerballNumbers(1, 59, 5); //running the powerball number function to generate the random array of 5 numbers in the lottery between 1 and 59
    powerball = pbNumber(1, 35); //running the pb number function to generate a random powerball number between 1 and 35
    console.log("The powerball numbers are " +pbNumbers+ " with a powerball of " +powerball+ "."); //printing to the console the powerball lottery numbers and the powerball

}else{ //if the user enters florida instead of powerball, this code will run
    floridaLottery = floridaLotteryNumbers(1, 53, 6); //running the florida lottery function to generate the random array of 6 numbers between 1 and 53
    console.log("The Florida lottery numbers are" +floridaLottery+ "."); //printing to the console the Florida lottery numbers.
}


