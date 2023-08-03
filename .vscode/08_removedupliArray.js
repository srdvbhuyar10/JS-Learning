console.log(`------------------Original-------------------`);

let array = [4,5,4,5,8,5,7,8,9,7,8];
console.log(array);

console.log(`-----------Remove Duplicate Element-------------`);

let arrayAssign=[4,5,4,5,8,5,7,8,9,7,8];
function removeDuplicates(arrayAssign){
return arrayAssign.filter((item,index) => arrayAssign.indexOf (item)=== index);
}
console.log(removeDuplicates(arrayAssign))