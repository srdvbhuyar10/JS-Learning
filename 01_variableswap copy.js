
var name1 = sweety; // cutie
var name2 = cutie; // sweety
console.log( 'Before swap sweety cutie' ,'name1 - ', name1, ' name2 - ', name2);
var temp = name1;
name2 = name1;
name1 = temp;
console.log(temp, name2, name1);
console.log( 'After swap cutie sweety' ,'name2 - ', name2, ' name1 - ', name1);