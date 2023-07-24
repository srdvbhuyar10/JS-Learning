console.log("Assignment-1");
console.log("-----------------------------------------------------------");

// Function with no argument and no return value
function show1(){
    console.log('I am a Teacher');
    console.log('My hobbies are travelling, listening songs');
}
show1(); // Function Invocation

var firstNameLastNameandMyCollegename = "first Name : Sridevi Last Name : Bhuyar My College name: Dr.B.Ambedkar College"; // updation
console.log(firstNameLastNameandMyCollegename);


console.log("============================================================");


// Function with argument and no return value

function swapvalue(arg1, arg2){ // arg1, arg2 arguments, parameters
   
    console.log('Before Swapvalue=> arg1', arg1, " arg2", arg2 );
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log('After Swapvalue=> arg1', arg1, " arg2", arg2);
}
var Virat = "VIRAT";
var Anushka = "ANUSHKA";
swapvalue(Virat, Anushka);// Function call or invocation

console.log('---------------------------------------------------------------')

var arg1 = 1000;
var arg2 = 2000;
swapvalue(arg1, arg2);// Function call or invocation


console.log("===============================================================");


// Function with argument and return value
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var resultValue = addition(10.23, 600, 40);
console.log('Result is ', resultValue);


console.log("=================================================================");


// Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Result is: HELLOGOODMORNING ');
}
checkType("HELLO GOOD MORNING")

console.log("===================================================================");


console.log("Assignment-2");
console.log("------------------------------------------------------------------");



function show(){
    console.log('Bank Name:CITI BANK  Account No.:3456782345  Location:Pune  PinCode:431202');
    console.log('Bank Name:AXIS BANK  Account No.:7856782345  Location:Pune  PinCode:441202');
    console.log('Bank Name:HDFC BANK  Account No.:8956782345  Location:Pune  PinCode:631202');
}
show(); // Function Invocation




