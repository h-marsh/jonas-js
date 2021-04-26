// Let's go back to Mark and John comparing their BMIs! 
// This time, let's use objects to implement the calculations! 

// Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

// This is a gross looking ternary operator used in building the string.
// console.log(`${mark.fullName}'s BMI (${mark.calcBMI().toFixed(2)}) is ${mark.calcBMI() > john.calcBMI() ? 'higher' : 'lower'} than ${john.fullName}'s BMI (${john.calcBMI().toFixed(2)})!`);

mark.calcBMI();
john.calcBMI();

// The reason this if-statement didn't work on its own (before calling the calcBMI for both names just above) is because the calcBMI methods were not called.  Therefore, there were no BMI properties to compare.  However, calling calcBMI first, then running the if-statement, will produce correct results because the BMI properties are created and defined before being compared in the conditional.
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI().toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.calcBMI().toFixed(2)})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI().toFixed(2)})!`);
}