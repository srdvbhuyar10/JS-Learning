console.log("---Assignment-1---");
console.log(`--------------------------------------------`);

function monthOfYear(monthNumber) {
    var months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (typeof monthNumber !== "number" || isNaN(monthNumber) || !Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      console.log( `Month ${monthNumber}: ${months[monthNumber -1]}`);
      return;
    }
  
    console.log(`Month ${monthNumber} : ${months[monthNumber -1]}`);
  }
  
  // Test cases
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);
