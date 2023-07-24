
// num2 = num3;
// num3 = temp;
// console.log('after swap', 'num1 -', num, 'num2 -', num2, 'num3 -', num3)


function swap(n1, n2, n3){ // n1, n2  arguments or parameters n1=100   n2=200   n3=300
    console.log('Inside swap function');
    console.log('Before Swap=> n1', n1, " n2", n2, 'n3', n3 );
    var temp = n1;
    n1 = n2;
    n2 = n3;
    n3 = temp;
    console.log('After Swap=> n1', n1, " n2", n2, 'n3', n3);
}
var num1 = 100;
var num2 = 200;
var num3 = 300;
swap(num1, num2, num3);// Function call or invocation


console.log('=========================================');



function swap(n1, n2){ // n1, n2 arguments, parameters
   
    console.log('Before Swap=> n1', n1, " n2", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', n1, " n2", n2 );
}
var sweety = "Sweety";
var cutie = "Cutie";
swap(sweety, cutie); // function call or invocation