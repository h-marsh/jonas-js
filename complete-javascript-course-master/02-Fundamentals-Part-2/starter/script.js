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

const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1988,
    job: 'teacher',
    friends: ['Michael', 'zee', 'zoey'],
    hasLicense: true,
    calcAge: function () {
        return 2020 - this.birthYear;
    },
    // getSummary: function () {
    //     if (this.hasLicense) {
    //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has a driver's license.`
    //     } else {
    //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has no driver's license.`
    //     }
    // }

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(Jonas.getSummary());