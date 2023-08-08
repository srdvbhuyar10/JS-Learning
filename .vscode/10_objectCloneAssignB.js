

console.log(`-----------------------------------------------`);
console.log(`================================`);
const bankSBI = {
    bankName: "SBIbank" ,
    location: "Baner",
    AccountNumber: "987456321085",
    IFSC: "SBIN0001020",

}
console.log(`Before Cloning Object are `);
console.log(bankSBI);

const bankLocation= {
    street:"Near Baner-Phata",
    City:"Pune",
    Pincode:"411027"

}
console.log(bankLocation);
console.log(`----------------------Step 1---------------------`);
console.log(` Using Object.assign()For cloning Bank and Location`);
let cloneSBI = Object.assign({},bankSBI)
//cloneSBI.Location = "Pune"
console.log(cloneSBI);

let cloneLocation = Object.assign({},bankSBI)
//cloneLocation.city = "mumbai";
console.log(cloneLocation);
console.log(`  `);

console.log(`--------------------Step-2 Using Spread Operator----------------`);
let clonedSBIbank = {... bankSBI}
console.log(clonedSBIbank);

let clonedLocation = {...bankLocation}
console.log(clonedLocation);

console.log(`------------------------------------------------------`);
console.log(`-----------------Step-3 Rate of Interest---------------------`);
const rateOfInterest = {
    homeLoanInterest : "7.50",
    PersonalloanInterest: "5.50",
    duelInterest : "5.50",
}

console.log(rateOfInterest);

console.log(`------------------------------------------------------`);
console.log(`-----Merging step 1 ,step 2 and step 4 objects-----`);
let mergedObjects = Object.assign({},bankSBI);
console.table(mergedObjects);

console.log(`-------------------------------------------------------`);
console.log(`---------------Traversing Merged object Using----------------`);

for (const value in mergedObjects) {
    if (Object.hasOwnProperty.call( mergedObjects, value)) {
      
    const element = mergedObjects [value];
    console.log(`bank details:${value}:${element}`);
        
    }

}
