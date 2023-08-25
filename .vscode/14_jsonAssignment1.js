

console.log(`===============================================`);
let details = 
`{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : [" Dev " , " DBA "],
    "age" : 23,
    "dob" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : " 32,Laham St. ",
        "city" : " Innsbruck ",
        "country" : " Austria "
},

"referred by" : " E0012 " 
}`;

const address = JSON.parse(details); // Convert from JSON format to object
console.log(`details type of ==>  ${typeof details}`);
console.log(details);
console.log();