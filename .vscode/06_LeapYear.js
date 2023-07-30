console.log(`-------------------Assignment 3--------------------------`);

var isLeapYear = function(year) {
    if (typeof year !== 'number' || isNaN(year) || !Number.isInteger(year)) {
      console.log(`${year} is not a valid year (a whole number).`);
      return false;
    }
   
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};

var inputValues = [2020, 1999, 1600, 2022, 1945, null, "twenty twenty", undefined];

inputValues.forEach((value) => {
  if (isLeapYear(value)) {
    console.log(`${value} is a leap year.`);
  } else {
    console.log(`${value} is not a leap year.`);
  }
});
