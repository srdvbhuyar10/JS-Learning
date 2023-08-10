
const arraynums = [ 20, 3, 4, 56, 90, 400, 49 ]
let clonearraynums = arraynums;
clonearraynums.push( 55, 66 );
console.log(`before clone [${arraynums}]`);
console.log(`after clone [${clonearraynums}]`);

console.log(`-----------------Spread Operator----------------------`);

let deepclone = [...arraynums];
arraynums.push( 10, 25 );
console.log(`before deepclone[${arraynums}]`);
console.log(`after deepclone[${deepclone}]`);

console.log(`--------------------Given Another Array-----------------------------`);

let arrayeven = [ 2, 30, 14, 8 ];
let mergedarray = [...arrayeven,...arraynums];
console.log(`after merged [${mergedarray}]`);

console.log(`----------------Create Employee Details-----------------------`);

let employeeinfo = {
    EmpID : 25,
    EmployeeName : "SrideviB",
    Salary:{
        July_Month: 50000,
        Augest_month: 60000,
        June_month: 70000,

    },
    

    Address:{
    Locality:{
        Colony:"Shivnagri Society",
        Street:"Hadapsar",
        showAddress(){
            console.log(`locality: Colony->${this.Colony}, Street->${this.Street} `);
        }
    }

    },
Address1:{
    City: "Pune",
    State: "Maharashtra",
    country:"India",
},
    showAddress(){
        console.log(`Address: city${this.City}, State->${this.state}, Country->${this.country} `);

    
},
mobile: ["7972998547", "8582369721"],
}
console.log(`Address colony ${employeeinfo.Address.Locality.Colony},
 ${ employeeinfo.Address.Locality.Street},
 ${ employeeinfo.Address1.State},${ employeeinfo.Address1.country}`);

 console.log(`---------------------JSON Strinify----------------------`);

 let deepcopy = JSON.parse(JSON.stringify(employeeinfo)) ;
 console.log(`updated Salary of July Month ${ deepcopy.Salary.July_Month = 80000}`);
 console.log(`updated country ${ deepcopy.Address.country = "UnitedKingdom"}`);
