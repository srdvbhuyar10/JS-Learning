console.log(`-----STEP-1=Implicit Conversion To String-----`);
var result = '3' + 2;
console.log(result);
console.log(`Why result is 32; because here 3 is a string and 2 is a number so after their implicit conversion(+) it automatically gives the string value to string '32'`);

var result = '3' + true;
console.log(result);
console.log(`Why result is 3true; because their implicit conversion from string value true to string number is 'true'`);

var result = '3' + undefined;
console.log(result);
console.log(`Why result is 3undefined; because their is implicit conversion from string value to string true is 'undefined'`);

var result = '3' + null;
console.log(result);
console.log(`Why result is 3null; because their is implicit conversion from string value to string null is 'null'`);


console.log('---------------------------------------------------------------------------------------------------');

console.log(`-----STEP-2=Boolean Conversion To Number-----`);

var result = '4' - true;
console.log(result);
console.log(` The result of boolean conversion to number is ${result} and it's type is: ${typeof result}` );

var result = 4 + true;
console.log(result);
console.log(`The result of boolean conversion to number is ${result} and it's type is: ${typeof result}` );

var result = 4 + false;
console.log(result);
console.log(`The result of boolean conversion to number is ${result} and it's type is: ${typeof result}` );

console.log('-------------------------------------------------------------------------------------------------------');

console.log('-----STEP-3=Implicit String Conversion To Number-----');

var num = '4' - '2';
console.log(`Value of num: ${num}`)
var result = String(num);
console.log(`The result of 4 & 2 is ${result} and it's type is: ${typeof result}` );

var num = '4' - 2;
console.log(`Value of num: ${num}`)
var result = String(num);
console.log(`The result of 4 & 2 is ${result} and it's type is: ${typeof result}` );

var num = '4' * 2;
console.log(`Value of num: ${num}`)
var result = String(num);
console.log(`The result of 4 & 2 is ${result} and it's type is: ${typeof result}` );

var num =  '4' / 2;
console.log(`Value of num: ${num}`)
var result = String(num);
console.log(`The result of 4 & 2 is ${result} and it's type is: ${typeof result}` );


console.log('-------------------------------------------------------------------------');

console.log('---------Assignment-0C--------------');

console.log(0 == '');
console.log(`The '' is converted into 0; Result : True`);

console.log(0 == '0');
console.log(`Result : the 0 is converted into 0; Result : True`);

console.log(0 == 'false');
console.log(`Result : the '' is converted into 0; Result : False`);

console.log(null == 'undefined');
console.log(`Result : the '' is converted into 0; Result : False`);

console.log(1 == [1]);
console.log(`Result : the '' is converted into 0; Result : True`);

console.log(1 == 'true');
console.log(`Result : the '' is converted into 0; Result : False`);

console.log(1 == '1');
console.log(`Result : the '' is converted into 0; Result : True`);




