///Function Declaration///
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



///Function expression///
// const age = function (year) {
//     return 2021 - year;
// }

// console.log(age(1988));



///Arrow Function///
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



///Functions Inside Other Functions///
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

function cutFruit(numFruit) {
    return numFruit * 4;  //i.e. pass in 2, it returns 8.  Then it is called into the fruit processor declaration
}

function fruitProcessor(numApples, numOranges) {
    const applePieces = cutFruit(numApples);
    const orangePieces = cutFruit(numOranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;

    return juice;
}

console.log(fruitProcessor(2, 3));