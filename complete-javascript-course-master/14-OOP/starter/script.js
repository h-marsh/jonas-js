'use strict';
///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////////////// NOTES ////////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Constructor Functions and the new Operator //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* constructor functions should always start with a capital letter */
// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// adding methods to the objects (DONT DO IT THIS WAY, prototypes and prototypal inheritance are leveraged instead)
// this.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };
// };

// const bob = new Person('bob', 1984);
// console.log(bob);

// const jonas = 'jonas';

// console.log(jonas instanceof Person);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////////// Prototypes //////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// console.log(Person.prototype);

// console.log(bob.__proto__ === Person.prototype);
// bob.calcAge();
// console.log(Person.__proto__);
// console.log(Person.prototype.isPrototypeOf(bob));

// Person.prototype.species = 'Homo Sapien';
// console.log(bob);
// console.log(bob.species);
// console.log(bob.hasOwnProperty('firstName'));
// console.log(bob.hasOwnProperty('species'));

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Prototypal Inheritance on Built-in Objects //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const bob = new Person('bob', 1984);
// const jonas = new Person('jonas', 1988);

// Person.prototype.species = 'Homo Sapien';

// // console.log(jonas.__proto__ === Person.prototype);

// const arrPrototype = [3, 3, 3, 4, 5, 1, 1, 1, 4, 4, 6, 3, 6, 1];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arrPrototype.unique());

// console.log(arrPrototype.__proto__);
// console.log(arrPrototype.__proto__ === Array.prototype);

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////////// ES6 Classes /////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* class expression */
// const PersonClass = class {};

/* class declaration */
// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   /* methods defined this way are added to the .prototype property, same result as doing it manually above */
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// }

// const john = new PersonClass('john', 1957);
// john.calcAge();

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////// Setters and Getters  ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const account = {
//   owner: 'jonas',
//   movements: [100, 200, 300, 400, 500],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(movement) {
//     this.movements.push(movement);
//   },
// };

// account.latest = 50;
// console.log(account.movements);

// class PersonClass {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello, ${this.fullName}`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name, bruh.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const person = new PersonClass('Roger Daltry', 1969);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// Static Methods  ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log('Hello!!');
// };

// // Person.hey();

// class PersonClass {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello, ${this.fullName}`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name, bruh.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey = function () {
//     console.log('Hello!!');
//   };
// }

// PersonClass.hey();

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////////  Object.create  ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const PersonPrototype = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonPrototype);

// // these properties were only added this way for the sake of the exercise.  normally the object and its properties would be created programmatically.
// steven.name = 'steven';
// steven.birthYear = 1988;

// const sarah = Object.create(PersonPrototype);

// sarah.init('Sarah Smith', 1984);

// console.log(sarah);
// sarah.calcAge();

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////// Inheritance Between 'Classes': Constructor Functions ////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// mike.calcAge();

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Inheritance Between 'Classes': ES6 Classes //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.fullName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name, bruh.`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey = function () {
    console.log('Hello!!');
  };
}

class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    /* the super call always happens first  */
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////// Inheritance Between 'Classes': Object.create /////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const PersonPrototype = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPrototype);

const StudentPrototype = Object.create(PersonPrototype);

StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentPrototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentPrototype);
// jay.init('jay', 1969, 'music');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////// Another Class Example ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public interface of the object.
//   deposit(value) {
//     this.movements.push(value);
//   }

//   withdraw(value) {
//     this.deposit(-value);
//   }
// }

// const account1 = new Account('jonas', 'EUR', 1111);

// account1.deposit(250);
// account1.withdraw(100);
// console.log(account1.pin);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////// Encapsulation: Protected Properties and Methods ///////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    /* protected (not private) properties */
    this._pin = pin;
    this._movements = [];

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface of the object.
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }
}

const account1 = new Account('jonas', 'EUR', 1111);

account1.deposit(250);
account1.withdraw(100);
