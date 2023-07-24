
function swap(num1, num2){ // num1, num2 arguments or parameters 
    console.log('Inside swap function');
    console.log('Before Swap=> num1', num1, " num2", num2 );
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log('After Swap=>  num1', num1, " num2", num2 );
}
var sweety = "Sweety";
var cutie = "Cutie";
swap(sweety, cutie);// Function call or invocation


console.log('==============================================');

function swaping(n1, n2, n3){ // n1, n2, n3 arguments or parameters n1=100   n2=200   n3=300
    console.log('Inside swaping function');
    console.log('Before Swaping=> n1', n1, " n2", n2, 'n3', n3 );
    var temp = n1;
    n1 = n2;
    n2 = n3;
    n3 = temp;
    console.log('After Swaping=> n1', n1, " n2", n2, 'n3', n3);
}
var num1 = 100;
var num2 = 200;
var num3 = 300;
swaping(num1, num2, num3);// Function call or invocation