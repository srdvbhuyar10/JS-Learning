console.log("-----------------STEP-1---------------------");

var greet = "Hey, You are doing Good,Keep it up";
var lengthGreet= greet.length;
console.log(greet,'Print of String is:', lengthGreet);

console.log(`------------------STEP-2---------------------`);

var charAtLastIndex = greet.charAt(lengthGreet);
console.log(`Lenght of length is ${charAtLastIndex} of Index is ${lengthGreet}`);

console.log(`------------------STEP-3-------------------`);

var greet = "      Hey,You are doing Good,Keep it up        ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);

console.log(`------------------STEP-4------------------`);

var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var totalnumberofSpaces = greet.length - trimEndLength;
console.log(`total number of Spaces is : ${totalnumberofSpaces} `);

console.log(`----------------STEP-5----------------`);

var greet = "      Hey,You are doing Good,Keep it up        ";
var result = greet.trim(); char
console.log(` After Trim FIRST char is ${result} and it's length is ${result.length}, Trim LAST char length : ${greet.length}`);








var result = greet.includes('Virat');
console.log(`Result is ${result}`);

console.log(`------------------------------------`);
var result = greet.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);



console.log(`------------------------------------`);

console.log(`------------------------------------`);

var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);