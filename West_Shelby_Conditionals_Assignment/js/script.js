/**
 * Shelby West
 * March 19, 2015
 * Conditionals Assignment
 */
console.log("Let's find out how much food to give the animals!");

var numDogs = prompt("How many dogs do you have to feed?"); //assigning a variable to the number of dogs the user enters.

if(numDogs === ""){
    numDogs = prompt("Please enter how many dogs there are.");
    //Validating the user input
}else {
    console.log("There are " +numDogs+ " dogs to feed.");
    //logging the number of dogs
}
numDogs = Number(numDogs);
var dogWeight = confirm("Do the dogs weigh more than 10 lbs? Ok for Yes, Cancel for No."); //finding out how much the dogs weigh for the calculation.
var bowlsEmpty = confirm("Are the food bowls empty? Ok for Yes, Cancel for No.");

if(dogWeight && bowlsEmpty === true){
    //multiplying the scoops by 2 for dogs that weigh more than 10 lbs
    var numberOfScoops = numDogs * 2;
    console.log("Please prepare " +numberOfScoops+ " scoops of dog food.");
}else{
    //Keeping the number the same for dogs under 10 lbs
    console.log("Please prepare " +numDogs+ " scoops of dog food.");
}

var numCats = prompt("How many cats are there to feed?");

if(numCats === ""){
    numCats = prompt("Please enter the number of cats.");
}else{
    console.log("There are " +numCats+ " cats to feed.");
}

var kittens= confirm("Are there any kittens? Ok for Yes, Cancel for No");

numCats = Number(numCats);

if(kittens === true){
    var numKittens = prompt("How many kittens are there?");

    if(numKittens === "")
    numKittens = prompt("Please enter how many kittens there are.")
    numKittens = Number(numKittens);
    var cansOfFood = numCats + numKittens;
}
else if(kittens === false && numCats > 3){
    var cansOfFood = numCats + 2;
}
else{
    var cansOfFood = numCats;
}

console.log("Please prepare " +cansOfFood+ " cans of cat food.")


