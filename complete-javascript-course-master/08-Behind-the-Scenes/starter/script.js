'use strict';

// This function is defined in the global scope as it is top-level code.  It also creates its own scope.
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    add(1, 2);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
