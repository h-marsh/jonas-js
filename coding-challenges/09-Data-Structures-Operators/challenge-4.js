// 1. Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// const camelCase1 = function (string) {
// const array = string.split('_');
// const replaced = array[1].replace(array[1][0], array[1][0].toUpperCase());
// console.log(array[0] + replaced);
// };

const camelCase = function () {
	const text = document.querySelector('textarea').value;
	const pairs = text.split('\n');
	// Now for the loop that converts each item in the array to camelCase
	for (const pair of pairs) {
		const array = pair.toLowerCase().trim().split('_');
		const replaced = array[1].replace(array[1][0], array[1][0].toUpperCase());
		console.log(array[0] + replaced);
	}
};

const jonasSolution = function () {
	const text = document.querySelector('textarea').value;
	const pairs = text.split('\n');
	// Now for the loop that converts each item in the array to camelCase
	for (const [i, pair] of pairs.entries()) {
		const [first, second] = pair.toLowerCase().trim().split('_');
		const output = `${first}${second.replace(
			second[0],
			second[0].toUpperCase()
		)}`;
		console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
	}
};

// Event handler on button
document.querySelector('button').addEventListener('click', jonasSolution);
