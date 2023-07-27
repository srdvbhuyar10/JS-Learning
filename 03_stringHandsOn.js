console.log("-----------------STEP-1---------------------");

var greet = "Hey, You are doing Good,Keep it up";
var lengthGreet= greet.length;
console.log(greet,'Print of String is:', lengthGreet);

console.log(`------------------STEP-2---------------------`);

var charAtLastIndex = greet.charAt(lengthGreet);
console.log(`Lenght of length is ${charAtLastIndex} of Index is ${lengthGreet}`);

console.log(`------------------STEP-3-------------------`);

var greet = "       Hey,You are doing Good,Keep it up        ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);

console.log(`------------------STEP-4------------------`);

var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var totalnumberofSpaces = greet.length - trimEndLength;
console.log(`total number of Spaces is : ${totalnumberofSpaces} `);

console.log(`----------------STEP-5----------------`);

var charAtFirstIndex = greet.charAt(lengthGreet-1);
console.log(` First Character of String is H ${charAtFirstIndex}: Last character of String is P`);

console.log("--------------STEP-6-----------------");

var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var totalnumberofwords = greet.length - trimEndLength;
console.log(`total number of words in String is : ${totalnumberofwords} `);

console.log("---------------STEP-07----------------------");

var result = greet.indexOf('Good');
console.log(`Index of good in String is ${result}`);

console.log("------------STEP-8----------------------");

var result = greet.indexOf('Keep it up');
console.log(`Sub-string starting from Index ''Keep it up' is : ${result}`);

console.log("------------STEP-9-------------------");

var TotalEndSpaces = greet.indexOf( `String ends with the word "Up": after the step-3`);
var EndSpaces = TotalEndSpaces;
console.log(`String ends with the word Up'after step 3 is:${EndSpaces}`);


console.log(`--------------STEP-10-----------------------`);
var TotalEndSpaces = greet.indexOf( `String start with the word "Hey": after the step-3`);
var EndSpaces = TotalEndSpaces;
console.log(`String start with the word Hey'after step 3 is:${EndSpaces}`);