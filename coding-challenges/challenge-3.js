// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. [x] Calculate the average score for each team, using the test data below
// 2. [x] Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

console.log(`=========================`)

console.log(`The Dolphins average is: ${avgDolphins}`);
console.log(`The Koalas average is: ${avgKoalas}`);

if (avgDolphins === avgKoalas) {
    console.log(`A tie!`);
} else if (avgDolphins > avgKoalas) {
    console.log(`Dolphins Win!`)
} else {
    console.log(`Koalas Win!`)
}

console.log(`=========================`)

const bonusDolphins1 = (97 + 112 + 101) / 3;
const bonusKoalas1 = (109 + 95 + 123) / 3;

console.log(`The Bonus 1 Dolphins average is: ${bonusDolphins1}`);
console.log(`The Bonus 1 Koalas average is: ${bonusKoalas1}`);

if (bonusDolphins1 === bonusKoalas1) {
    console.log(`A tie!`);
} else if (bonusDolphins1 > bonusKoalas1 && bonusDolphins1 >= 100) {
    console.log(`Dolphins Win!`)
} else if (bonusKoalas1 > bonusDolphins1 && bonusKoalas1 >= 100) {
    console.log(`Koalas Win!`)
}

console.log(`=========================`)

const bonusDolphins2 = (97 + 112 + 101) / 3;
const bonusKoalas2 = (109 + 95 + 106) / 3;

console.log(`The Bonus 2 Dolphins average is: ${bonusDolphins2}`);
console.log(`The Bonus 2 Koalas average is: ${bonusKoalas2}`);

if (bonusDolphins2 === bonusKoalas2 && bonusDolphins2 >= 100 && bonusKoalas2 >= 100) {
    console.log(`A tie!`);
} else if (bonusDolphins2 > bonusKoalas2 && bonusDolphins2 >= 100) {
    console.log(`Dolphins Win!`)
} else if (bonusKoalas2 > bonusDolphins2 && bonusKoalas2 >= 100) {
    console.log(`Koalas Win!`)
}