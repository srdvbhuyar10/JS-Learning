console.log("---Assignment : 0A : Control Flow---");
console.log('--------STEP-1----------');

// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");


console.log('--------STEP-2----------');

// WAP to get the sum of cube of numbers from 1 to 5
 function sum(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum = totalSum + index*index*index;
     }
     console.log(`Sum of first 5 numbers is : ${totalSum}`);
 }
 sum();


 console.log('--------STEP-3----------');

 function printOddCharactersReverseHorizontal2(inputstring) {
  let result = "Soon I will be Angular IT Champ";
  for (let i = inputstring.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      result += inputstring[i] + " ";
    }
  }
  console.log(result);
}
const inputstring = "Soon I will be Angular IT Champ";
printOddCharactersReverseHorizontal2(inputstring)

console.log("---------------------------------------");


function printOddCharactersHorizontal(inputstring) {
  let result = "Hard work will always pays off";
  for (let i = inputstring.length - 1; i >= 1; i--) {
    if (i % 2 !== 1) {
      result += inputstring[i] + " ";
    }
  }
  console.log(result);
}
const inputString = "Hard work will always pays off";
printOddCharactersHorizontal(inputstring)











