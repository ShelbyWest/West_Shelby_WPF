// Shelby West
//March 12, 2015
//Expressions Assignment
// What is the area of a trapezoid? Then add it to the given trapezoids.
var topLength = prompt("We are finding the area of a trapezoid. \nPlease enter the length of the top."); //Prompting the user to enter the top length
var height = prompt("Please enter the height of the trapezoid."); //prompting the user to enter the height
var bottomLength = prompt("Please enter the bottom length.") //prompting the user to enter the bottom length

var area = 0.5 * (topLength + bottomLength) * height; //calculating the area

console.log("The area of the trapezoid is " + area); //outputting the final result

var otherTrapes = [ area, 4322, 3442]
var allTrapes = area + otherTrapes[1] + otherTrapes[2];

console.log("The area of all of the trapezoids is " + allTrapes);