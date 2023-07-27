console.log("--------------Assignment-A------------------");

var squareOfWordLength=function(string){
    var length=string.length
    console.log(`The length of the string is : ${length}`);
    var square = length * length
    console.log(`The square of the length given string is : ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer smart");
console.log("==========Step 2=============");

var givenString = function(string){
   var result = string.length
   console.log(`The length of the string is : ${result}`);
   var result = string.split(" ")
   var words = result.length; 
   console.log(`Total words in string : ${words} and The division result is : ${words%2}`);
}
givenString("I am ANGULAR Developer");



console.log("----------Assignment-B------------------");

console.log(`---------STEP-1 : Two args and no return value-------`)
var num = 10;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the greater no between 10 and -10 is :-10 `);
console.log(result);


var num = 10;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the greater no between 800 and 899 is :-899`);
console.log(result);


console.log(`---------STEP-2 : FE with one arg and return value-------`)

var num = 29;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the number is : - 29`);
console.log(result);

var num = 44;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the number is : 44`);
console.log(result);

var num = 0;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the number is : 0`);
console.log(result);

var num = 101;
var result = num%2==0 ? "EVEN": "ODD";
console.log( `the number is : -101`);
console.log(result);
