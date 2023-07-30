console.log("----------Assignment-3------------");
console.log("------------------------------------------");

function gradecalculator(marks) {
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

gradecalculator(98);
gradecalculator(80);
gradecalculator(90);
gradecalculator(0);
gradecalculator(150);
gradecalculator(-7);
gradecalculator(35);
gradecalculator(29);
gradecalculator(64);
gradecalculator(49);
gradecalculator(91);
gradecalculator("Eighty");
gradecalculator(undefined);
gradecalculator(null);