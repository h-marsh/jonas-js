///***Function Declaration***///


//    function fruitProcessor(numApples, numOranges) {
//     // console.log(numApples, numOranges);
//     const juice = `Juice with ${numApples} apples and ${numOranges} oranges!`;
//     return juice;
// }

// // console.log(fruitProcessor(1, 2));
// // console.log(fruitProcessor('4', '5'));

// function logFive(message) {
//     console.log(message);
//     console.log(message);
//     console.log(message);
//     console.log(message);
//     console.log(message);
// }

// // logFive(fruitProcessor(1, 2));
// // logFive(fruitProcessor(40, 50));
// // logFive(fruitProcessor(6, 7));
// // logFive(fruitProcessor(300, 700));

// const appleJuice = fruitProcessor(5, 0);
// const orangeJuice = fruitProcessor(0, 5);
// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleJuice);
// console.log(orangeJuice);
// console.log(appleOrangeJuice);


//==========================================================================================================================================//
///***Function expression***///


// const age = function (year) {
//     return 2021 - year;
// }
// console.log(age(1988));


//==========================================================================================================================================//
///***Arrow Function***///


// const age1 = year => 2021 - year;
// console.log(age1(1987));

// let currentYear = 2021
// const yearsRetire = (firstName, birthYear) => {
//     const age = currentYear - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsRetire('Hunter', 1988));
// console.log(yearsRetire('Mia', 1978));


//==========================================================================================================================================//
///***Functions Inside Other Functions***///


// function cutFruit(numFruit) {
//     return numFruit * 4;  //i.e. pass in 2, it returns 8.  Then it is passed into the fruit processor
// }

// function fruitProcessor(numApples, numOranges) {
//     const juice = `Juice with ${numApples} apples and ${numOranges} oranges!`;
//     return juice;
// }

// //Since fruitProcessor needs two arguments, cutFruit needs to be called twice to fill each one
// console.log(fruitProcessor(cutFruit(1), cutFruit(2)));
// console.log(fruitProcessor(cutFruit(0), cutFruit(3)));

//Another way is to call cutFruit inside the fruitProcessor declaration instead of passing function calls as arguments like above.  The first function can be used when creating another function.  

// function cutFruit(numFruit) {
//     return numFruit * 4;  //i.e. pass in 2, it returns 8.  Then it is called into the fruit processor declaration
// }

// function fruitProcessor(numApples, numOranges) {
//     const applePieces = cutFruit(numApples);
//     const orangePieces = cutFruit(numOranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));


//==========================================================================================================================================//
///***Function Review***///


// const yearsRetire = (firstName, birthYear) => {
//     const age = currentYear - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

//To convert to a more normal function, get rid of the arrow and add the function keyword.  This is now just a regular function expression.
// const yearsRetire = function (firstName, birthYear) {
//     const age = currentYear - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

//The age calculations can be turned into its own function, then that function is called within the yearsRetire function

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;  //2037 is the current year.  The more years that pass (i.e. the higher the number), the closer to retirement
// }


// function yearsRetire(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement < 0) {
//         return 9999;
//     } else {
//         return retirement;
//     }
// }

// console.log(yearsRetire(1991, 'j'));
// console.log(yearsRetire(1970, 'm'));  //This returns a negative value when calculating the retirement value in yearsRetire, so a conditional will be used to account for it.



//==========================================================================================================================================//
///***Introduction to Arrays***///


// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// //Given an array of birth years, and wanting to calculate the ages for some of them

// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);



//==========================================================================================================================================//
///***Methods for Arrays***///


//push and unshift add elements to an array.  push to the end, unshift to the beginning
//pop and shift remove elements from an array.  pop to the end, shift to the beginning

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(years);
// const removedItem = years.pop();
// console.log(years);
// console.log(removedItem);

// const arrayCheck = function (year) {
//     if (years.includes(year)) {
//         console.log(`${year} is in the array`);
//     } else {
//         console.log(`${year} is not there.`);
//     }
// }

// arrayCheck(1990);
// arrayCheck(1);
// arrayCheck(2002);
// arrayCheck(2018);


//==========================================================================================================================================//
///***Dot vs Bracket Notation***///

// const hunter = {
//     firstName: 'hunter',
//     lastName: 'marsh',
//     age: 2020 - 1988,
//     job: 'student',
//     friends: ['steven', 'zee', 'zoey']
// };

// let whichName = prompt('Which name?  First or last?');

// console.log(hunter[whichName + 'Name']);    //Don't forget, this is bracket notation, not dot notation.

// whichName = prompt('Which name?  firstName or lastName?');

// console.log(hunter[whichName]);    //Or it could be done to get the entire property name via prompt.  This could also recieve the full property name of any of the others to return that information (age, job, friends)

// const whichProperty = prompt('Select which property: firstName, lastName, age, job, or friends');

// console.log(hunter[whichProperty]);    //A more generalized one that will select any property if it is defined.


// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2020 - 1988,
//     job: 'student',
//     friends: ['Michael', 'zee', 'zoey']
// };

// //Small challenge:  Write "Jonas has 3 friends, and his best friend is Michael." without hard coding any of the values.  This assumes the first friend in the array is the best friend.

// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is ${Jonas.friends[0]}.`);

// Jonas.friends.unshift('Charlie');

// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is ${Jonas.friends[0]}.`);

// Jonas.friends.pop();
// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is ${Jonas.friends[0]}.`);




//==========================================================================================================================================//
///***Object Methods***///


// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1988,
//     job: 'student',
//     friends: ['Michael', 'zee', 'zoey'],
//     hasLicense: true,
//     calcAge: function () {
//         return 2020 - this.birthYear;
//     }
// };

// console.log(Jonas.calcAge());

//Write a method called getSummary that returns a string that summarized the data about jonas.

// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1988,
//     job: 'teacher',
//     friends: ['Michael', 'zee', 'zoey'],
//     hasLicense: true,
//     calcAge: function () {
//         return 2020 - this.birthYear;
//     },
//     // getSummary: function () {
//     //     if (this.hasLicense) {
//     //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has a driver's license.`
//     //     } else {
//     //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has no driver's license.`
//     //     }
//     // }

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(Jonas.getSummary());


//==========================================================================================================================================//
///***Looping Arrays: Breaking and Continuing***///

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2020 - 1988,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     // Reading from jonasArray
//     console.log(jonasArray[i]);

//     // Filling the new types array
//     types[i] = typeof jonasArray[i];
// }

// console.log(types);
// // Add another item into the original array
// jonasArray.push(true);

// for (let i = 0; i < jonasArray.length; i++) {
//     // Reading from jonasArray
//     console.log(jonasArray[i]);

//     // Filling the new types array
//     types[i] = typeof jonasArray[i];
// }

// // Printing the types array with the new addition from adding an element to the jonasArray
// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// for (let i = 0; i < years.length; i++) {
//     console.log(2020 - years[i]);        // Don't forget to use i as an index, instead of i by itself.  It isn't 2020-i, but 2020-years[i]
// }

// What if the new values are to be stored in an array.

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2020 - years[i]);
// }

// console.log(ages);



//==========================================================================================================================================//
///***Looping Backwards and Loops in Loops***///


// Looping backwards
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2020 - 1988,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {   //i should be greater than zero because the loop runs as long as this is true.  
//     console.log(i, jonasArray[i]);
// }

// Looping inside of a loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Starting exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}, rep ${rep}`);
//     }
// }



//==========================================================================================================================================//
///***While loops***///

// A basic for-loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Weight repetition #${rep}`);
// }

// The same loop but as a while-loop.  Note the counter variable declared outside of the loop and the iteration counter at the end of the codeblock
// let reps = 1;
// while (reps <= 10) {
//     console.log(`WHILE: Weight repetition #${reps}`);
//     reps++;
// }

// A while-loop that does not depend on a counter.
// I.e. rolling a die until a certain number is rolled.  The number of times the loop should be run is not known beforehand.

// Math.random generates a decimal between 0 and 1.  Multiply by 6 to get numbers between 0 and 5.  Trunc to remove the decimal and give whole numbers between 0 and 5.  Add 1 to have it give numbers between 1 and 6.
let dice = Math.trunc(Math.random() * 6) + 1;

//  When a 6 is finally rolled, the loop stops and exits before the console.log line, so it won’t say a 6 is rolled, it will only exit.
//  The if-statement was added so it will still give feedback even when a 6 is rolled and the loop is about to end. 
while (dice !== 6) {
    console.log(`A ${dice} was rolled.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Roll was a six, loop is ending...')
    }
}