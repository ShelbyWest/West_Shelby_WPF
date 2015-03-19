/**
 * Shelby West
 * March 19, 2015
 * Conditionals Assignment
 */
console.log("Let's find out how much food to give the animals!");
//assigning a variable to the number of dogs the user enters.
var numDogs = prompt("How many dogs do you have to feed?");

if(numDogs === ""){
    prompt("Please enter how many dogs there are.");
    //Validating the user input
}else {
    console.log("There are " +numDogs+ " dogs to feed.");
}
numDogs = Number(numDogs);
var dogWeight = confirm("Do the dogs weigh more than 10 lbs? Ok for Yes, Cancel for No.");


if(dogWeight === true){
    var numberOfScoops = numDogs * 2;
    console.log("Please prepare " +numberOfScoops+ " scoops of dog food.");
}else{
    console.log("Please prepare " +numDogs+ " scoops of dog food.");
}



