


let sbiBank={
    bankName : "SBI Bank",
    location:"Pune",
    AccountNumber: "123456789",
    InterestRate: "5.25",
    showDetails() {
        console.log(sbiBank);
    
    }
}
let axisBank={
    bankName : "Axis Bank",
    location:"Nashik",
    AccountNumber: "998876543499",
    InterestRate: "6.25",
    showDetails() {
        console.log(axisBank);
    }
}
let hdfcBank={
    bankName : "HDFC Bank",
    location:"Mumbai",
    AccountNumber: "12345679807",
    InterestRate: "7.25",
    showDetails() {
        console.log(hdfcBank);
    }
}
let yesBank={
    bankName : "Yes Bank",
    location:"Nagpur",
    AccountNumber: "12345678659",
    InterestRate: "7.25",
    showDetails() {
        console.log(yesBank);

    }
}

axisBank.showDetails();
yesBank.showDetails();
sbiBank.showDetails();
hdfcBank.showDetails();
