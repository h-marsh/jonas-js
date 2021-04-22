// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//     and height in meter).

//[x] 1. Store Mark's and John's mass and height in variables
//[x] 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
//[x] 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.



/////////Data 1////////
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);

console.log('Mark BMI 1 = ' + markBMI + ' and John BMI 1 = ' + johnBMI);

//Step 3//
let markHigherBMI = markBMI > johnBMI;
console.log('Mark\'s BMI is higher: ' + markHigherBMI);



/////////Data 2////////
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

console.log('Mark BMI 2 = ' + markBMI + ' and John BMI 2 = ' + johnBMI);

//Step 3//
markHigherBMI = markBMI > johnBMI;
console.log('Mark\'s BMI is higher: ' + markHigherBMI);
