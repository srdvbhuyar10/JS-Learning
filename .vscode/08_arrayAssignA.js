
console.log("=============ASSIGNMENT-1=============");

console.log(`------------Log First and Last Element-------------`);
var array =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);

let removedElement = array.splice(1,2,3);
console.log(removedElement);

console.log(`---------------Add Element-Papaya----------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.unshift("Papaya");
console.log(array);

console.log(`----------------Removed Mango FRom Array---------------`);

var array1 =["Banana","Orange","Apple","Mango","Water Melon"];
let elementRemoved1 = array1.splice(3,1);
console.log(array1);
console.log(elementRemoved1);// removed element mango 

console.log(`------------Insert an Element Pinepple at last position------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.push("Pineapple");
console.log(array);

console.log(`-------------Insert an Element DraganFruit Before Water-Melon------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.splice(4,1,"Dragon Fruit");
console.log(array);

console.log(`---------------Replace an Element Orange with kiwi--------------`);

    var array =["Banana","Orange","Apple","Mango","Water Melon"];
    array.splice(2,1,"kiwi");
    console.log(array);

    console.log(`---------------Log the Element starting from  Index 1 to 4-------------`);
    //array.splice(1,4);
    console.log(array.splice (1,4));
    

    console.log(`----------------Only select last 3 Element and log on to SConsole--------------`);
    var array =["Banana","Orange","Apple","Mango","Water Melon"];
    lastThreeElement=array.slice(array.length-3)
    console.log(`Print the last three element in the array - [${lastThreeElement}]`);
