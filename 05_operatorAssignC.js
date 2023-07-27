
console.log("------------Assignment-1-------------");

var eligibility=function(graduation, HSC, SSC,name){
    var result= (graduation>=70 || HSC>=80 || SSC>=90)? " Congratulations! You are eligible for TCS Interview":   "Unfortunatly, you are not eligible for TCS Interview";
    console.log(`${name} ${result}`);
    }
      eligibility(80, 86, 90,"Vijay:");
      eligibility(70, 65, 55,"Sri:");
      eligibility(60, 79, 88,"Aarya:");


  console.log("-----------Assignmet-2---------------");

  var maleMarriageElligibilty=function(gender, age, boyName){
  var result=(gender="male" && age>=21)?"Hey! you are eligibale for Marriage" : "Sorry, yOU are not Eligible for marriage";
  console.log(`${boyName} ${result}`);
}
maleMarriageElligibilty("male", 25, "Billgates:");
maleMarriageElligibilty("male", 17, "Stew Jobs:");

console.log("------------Step 2----------");

var femaleMarriageAligibility=function(gender,age,girlName){
var result=(gender="Female" && age>=18)?"Hey! you are eligibale for marriage" : "Sorry, you are not Eligible for marriage";
console.log(`${girlName} ${result}`);
}
femaleMarriageAligibility("Female", 16, "Jennifer:");
femaleMarriageAligibility("Female", 27, "Malinda Gates:");
