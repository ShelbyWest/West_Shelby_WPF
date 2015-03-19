/*
Shelby West
Test JS file
March 12, 2015
 */
//alert("Testing 1, 2, 3 ");
//Conditional Logic - Relational Expressions

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent
//If the child is old enough, print to the console "You can ride!
//If the kid is over 48 inches in height
if(kidHeight  > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.")
}else{
    //sorry you have growing to do.
    console.log("Sorry kid, You've got some growing to do first!");
}
