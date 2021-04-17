// 1. [x] Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. [x] Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Also changed the existing console.logs to use template literals.


/////////Data 1////////
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

//.toFixed(2) rounds it to two decimal places before storing it in the variable.  So it does the calculations, uses the toFixed method on that result, and stores in the variable.
let markBMI = (massMark / (heightMark ** 2)).toFixed(2);
let johnBMI = (massJohn / (heightJohn ** 2)).toFixed(2);

console.log(`Mark BMI 1 = ${markBMI} and John BMI 1 = ${johnBMI}`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}




/////////Data 2////////
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

//.toFixed(2) rounds it to two decimal places before storing it in the variable.
markBMI = (massMark / (heightMark ** 2)).toFixed(2);
johnBMI = (massJohn / (heightJohn ** 2)).toFixed(2);

console.log(`Mark BMI 2 = ${markBMI} and John BMI 2 = ${johnBMI}`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
