var num = 100;
console.log(num);
var display = function(){
    console.log(`I am React Developer !`);
}
display();
console.log(typeof display);

var add = function(num1, num2){
    var result = num1 + num2;
   console.log(`Addition is: ${result}`);
}
add(40, 30);


var wordCount = function(word){
    var words = word.split("");
    var wordCount = words.length
    console.log(`In given String - ${word}`);
    return wordCount;
}
var Result= wordCount("I am UI Developer");
console.log(`total word count is: ${Result}`);



