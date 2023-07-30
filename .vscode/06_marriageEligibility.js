console.log(`------------------Assignment 2-------------------------`);
function isEligibleForMarriage(gender, age) {
    if (gender === "male" && age >= 21) {
      return true;
    } else if (gender === "female" && age >= 18) {
      return true;
    } else if (gender === "other" && age >= 21) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test cases
  const applicants = [
    { gender: "male", age: 17 },
    { gender: "male", age: 25 },
    { gender: "female", age: 28 },
    { gender: "female", age: 16 },
    { gender: "other", age: 35 },
    { gender: "other", age: 41 }
  ];
  
  applicants.forEach((applicant) => {
    if (isEligibleForMarriage(applicant.gender, applicant.age)) {
      console.log(`${applicant.gender}, ${applicant.age} - Eligible for marriage.`);
    } else {
      console.log(`${applicant.gender}, ${applicant.age} - Not eligible for marriage.`);
    }
  });
