/*
Shelby West
Test JS file
March 12, 2015
 */
//alert("Testing 1, 2, 3 ");
//Functions - Variable Scope

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}
console.log(width);
calcArea();
