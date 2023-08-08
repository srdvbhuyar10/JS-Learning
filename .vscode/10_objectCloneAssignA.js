

console.log(`-----------------------------------------------------------------------------------`);
console.log(`Create object personal details`);
let PersonalDetails = {
    Name : "Sridevi",
    Gender : "Female",
    Address : "Hadapsar",
    
}
console.log(PersonalDetails);
console.log(`---------------------------------------------------------------------------`);
console.log(`Create object college details`);
let collegeDetails = {
    clgName : "Ambedkar College",
    address : "Pune",
    university : "Pune"
}
console.log(collegeDetails);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`Merging both the Objects`);


const mergedObj = Object.assign({}, PersonalDetails, collegeDetails);
console.log(mergedObj);
// personalDetails = collegeDetails;
// console.log(`personalDetails :`);
// console.log(personalDetails);
// console.log(`collegeDetails :`);
// console.log(collegeDetails);

console.log(`----------------------------------------------------------------------------------`);
console.log(`Create a array of friends name and freeze it`);

let friendsArray = ["Vijay", "Suraj", "Kiran", "Neha"];
console.log(friendsArray);
Object.freeze(friendsArray);
friendsArray[2] = "Kshitija";
console.log(`Changed the value at index 2 in the array but no change because it is freezed.`);
console.log(friendsArray);
console.log(`----------------------------------------------------------------------------------`);
console.log(`5) Iterate the array using for of loop`);

for (const element of friendsArray) {
    console.log(element);
}
console.log(`----------------------------------------------------------------------------------`);
console.log(`6) Reverse a specific word in the string`);


let str = "CODEMIND TECHNOLOGY";
let strLength = str.length;
let newStr1 = "";
let newStr2 = "";
for (let index = strLength-1; index >=0; index--) {
    
    if(str.charAt(index)== " "){
        break;
    }
    else {
        newStr1 = newStr1 + str.charAt(index);
    }   
}
for (let index = 0; index < strLength; index++) {
    if(str.charAt(index)== " "){
        break;
    }
    else {
        newStr2 = newStr2 + str.charAt(index);
    }
}
let resultString = newStr2.concat(" " , newStr1);
console.log(resultString);