
console.log("-------------STEP-1----------");

var num1 = 5; var num2 = 5;
var result = num1 * num2;
console.log(`The square of 6 is: ${result}`);
var num1 = 6; var num2 = 6;
var result = num1 * num2;
console.log(`The square of 25 is: ${result}`);
var num1 = 25; var num2 = 25;
var result = num1 * num2;
console.log(`The square of 100 is: ${result}`);
var num1 = 100; var num2 = 100;
var result = num1 * num2;
console.log(`The square of 67.89 is: ${result}`);
var num1 = 67.89; var num2 = 67.89;
var result = num1 * num2;
console.log(`The square of 59 is: ${result}`);
var num1 = 59; var num2 = 59;
var result = num1 * num2;
console.log(`The square of 59 is: ${result}`);


console.log("-------------STEP-2----------");

var dine = function(){
    console.log(`type of function is:${typeof (dine)}`);
}
dine();


console.log("-------------STEP-3----------");

var area= function(l,b){
    var result= l*b;
    console.log(`Area of Rectangle is ${result}`);
}
area (499,917);


console.log("-------------STEP-4----------");

 swapValues = function (arg1, arg2){
    console.log(`before swap the value are : ${arg1} & ${arg2}`);
    
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp
    console.log(`after swap value are : ${arg1} & ${arg2}`);
    }
    swapValues( "Mahi" , "Raina");
    swapValues ( 55 , 77 );


console.log(`-------------------------Step 5------------------------------------`);


    var str=function(givenstring){
    console.log(`Given string is : JS is the most popular language of interne `);
    console.log(`Total Character Present in string: ${givenstring.length}`);
    console.log(`Character at index 6 is : ${givenstring.charAt(6)}`);
    console.log(`Character at index 11 is : ${givenstring.charAt(11)}`);
    console.log(`The Last character is : ${givenstring.charAt(givenstring.length-1)}`);
    console.log(`The First Character is : ${givenstring.charAt(0)}`);
    console.log(`The Last character is: ${givenstring.charAt(givenstring.length-3)}`);

    
    var result = givenstring.split(" ")
    var words =result.length;
    console.log(`Total number of words is : ${words} and "square of number is": ${words*words}`);
  }
   str("js the most popular language of internet")

   


    