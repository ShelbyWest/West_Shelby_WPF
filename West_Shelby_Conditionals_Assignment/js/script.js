/**
 * Shelby West
 * March 19, 2015
 * Conditionals Assignment
 */
console.log("Let's find out how much food to give the animals!");

var numDogs = prompt("How many dogs do you have to feed?"); //assigning a variable to the number of dogs the user enters.

if(numDogs === ""){
    numDogs = prompt("Please enter how many dogs there are.");//validating the user input

}else {
    console.log("There are " +numDogs+ " dogs to feed.");//outputting the number of Dogs to feed

}
numDogs = Number(numDogs); //casting the string numDogs variable to be a used as a number

var dogWeight = confirm("Do the dogs weigh more than 10 lbs? Ok for Yes, Cancel for No."); //asking how much the dogs weigh for the calculation.
var bowlsEmpty = confirm("Are the food bowls empty? Ok for Yes, Cancel for No."); //using the food bowls for the logical operator

if(dogWeight && bowlsEmpty === true){ //using a logical operator to determine whether to multiply

    var numberOfScoops = numDogs * 2; //multiplying the scoops by 2 for dogs that weigh more than 10 lbs
    console.log("Please prepare " +numberOfScoops+ " scoops of dog food."); //outputting the number of scoops for the dogs.
}else{
    console.log("Please prepare " +numDogs+ " scoops of dog food."); //Keeping the number the same for dogs under 10 lbs
}

var numCats = prompt("How many cats are there to feed?"); //prompting the user for the number of cats

if(numCats === ""){
    numCats = prompt("Please enter the number of cats."); //validating the user input
}else{
    console.log("There are " +numCats+ " cats to feed."); //outputting the number of cats to feed
}

numCats = Number(numCats); //casting the variable numCats as a number

var kittens= confirm("Are there any kittens? Ok for Yes, Cancel for No"); //asking the user if there are kittens

if(kittens === true){
    var numKittens = prompt("How many kittens are there?"); //prompting the user for how many kittens there are

    if(numKittens === "")
    numKittens = prompt("Please enter how many kittens there are.") //validating the user input for kittens

    numKittens = Number(numKittens); //casting the variable numKittens to be a number

    var cansOfFood = numCats + numKittens; //adding the number of kittens to the number of cats for the final calculation
}
else if(kittens === false && numCats > 3){ //code to be completed if there are no kittens and more than 3 cats
    var cansOfFood = numCats + 2; //add 2 to the number of cats for the amount of food

}else{
    var cansOfFood = numCats; //code to be performed if there are less than 3 cats and no kittens.
}

console.log("Please prepare " +cansOfFood+ " cans of cat food.") //outputting the number of cans for the cats


