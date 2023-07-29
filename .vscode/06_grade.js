console.log("----------Assignment-3------------");
console.log("------------------------------------------");

function gradecalcalculator(marks) {
    var givenmarks = +marks;
    if (givenmarks<=0 || givenmarks > 100 || isNaN(givenmarks)) {
        console.log(`Please give the actual marks for the grading`);
    }
    if (givenmarks >=90 && givenmarks <= 100 ) {
        console.log(`Excellent Marks : ${marks}, your grade is A+, you are the best`);
    }
    if (givenmarks >= 75 && givenmarks < 90 ) {
        console.log(`Good Marks : ${marks}, your grade is A, you are good`);
    }
    if (givenmarks >= 50 && givenmarks < 75 ) {
        console.log(`Satisfactory Marks : ${marks}, your grade is B, need improvement`);
    }
    if (givenmarks >= 35 && givenmarks < 50 ) {
        console.log(`Marks : ${marks}, your grade is C, you need work hard`);
    }
}

gradecalcalculator(98);
gradecalcalculator(80);
gradecalcalculator(90);
gradecalcalculator(0);
gradecalcalculator(64);
gradecalcalculator(49);
gradecalcalculator(-7);
gradecalcalculator(35);
gradecalcalculator("Eighty");
gradecalcalculator(29);
gradecalcalculator(91);
gradecalcalculator(150);
gradecalcalculator(undefined);
gradecalcalculator(null);