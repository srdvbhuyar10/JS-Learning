


console.log(`--------- Comparison Operators -------------`)
var num1 = 20;
var num2 = "20";
var result = num1==num2;
console.log(`Result is : ${result}`);
console.log(`== Comparison ${47 == '47'}`);
console.log(`== Comparison ${89 == 98}`);

var result = num1===num2;
console.log(`Result is : ${result}`);
console.log(`=== Comparison ${47 === "47"}`);
console.log(`=== Comparison ${'47' === "47"}`);

var result = num1!=num2;
console.log(`Using != Result is : ${result}`);

var result = num1!==num2;
console.log(`Using != Result is : ${result}`);

var num3 = 30;
var num4 = 29;
var result = num3 < num4;
console.log(`Using < operator Result is : ${result}`);

var result = num3 > num4;
console.log(`Using > operator Result is : ${result}`);

var num5 = 30;
var result = num3 < num5;
console.log(`Using < operator Result is : ${result}`);

var result = num3 <= num5;
console.log(`Using <= operator Result is : ${result}`);


var result = num3 > num5;
console.log(`Using > operator Result is : ${result}`);

var result = num3 >= num5;
console.log(`Using >= operator Result is : ${result}`);





var jennySsc = 97;
var jennyHsc = 67;
//
var result = (jennySsc >= 60 && jennyHsc>=60) ? "Please go inside all the best" : "Chal Nikal";
console.log(result);

var num = 50;
var result = num%2==0 ? "EVEN" : "ODD";
console.log(result);