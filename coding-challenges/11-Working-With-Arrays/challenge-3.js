'use strict';

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
	const humanAges = ages.map((dogAge) =>
		dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
	);
	const adults = humanAges.filter((age) => age >= 18);
	const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
	return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

const calcAverageHumanAgeArrow = (ages) =>
	ages
		.map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
		.filter((age) => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
