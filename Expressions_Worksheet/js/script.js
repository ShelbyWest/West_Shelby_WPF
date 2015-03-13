//Shelby West
// March 12, 2015
// Expressions Worksheet/**

//Problem 1 Dog Years

//Calculate Sparky's age in dog years
var sparkysAge = 5;
var dogYears = 7;
//Dog age multiplied by 7 is the output
var realAge = sparkysAge * dogYears;
//print out the output age
console.log("Sparky is 5 human years old which is " + realAge + " in dog years.");

//Slice of Pie part 2

//Calculate how many pieces of pizza Sparky can eat
var slicesPerPizza = 8;
var peoplePresent = 12;
var numberPizzas = 9;
//Multiply number of slices by how many pizzas then divide by number of people
var slicesPerPerson = slicesPerPizza * numberPizzas / peoplePresent;
var slicesForSparky = slicesPerPizza * numberPizzas % peoplePresent;
//print out the output number of slices
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");
//print out the number of slices for Sparky
console.log("Sparky got " + slicesForSparky + " slices of pizza.");

//Discounts

//Calculate the discounted price
var orgPrice = 29.99;
var discountPercentage = .30;
var descItem = "Maxi Dress";
var salesTaxPercent = .07;
//multiply original price by discount percentage then multiply that by the sales tax
var discount = orgPrice * discountPercentage;
var discountPrice = orgPrice - discount;
var taxes = discountPrice * salesTaxPercent;
var taxPrice = discountPrice + taxes;
//output the prices
console.log("Your " + descItem + "was originally $" + orgPrice + " but after a " + discountPercentage + "% discount, it is now $" + discountPrice + "without tax, and $" + taxPrice + " with tax.");



