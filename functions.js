function myFunc(...parameters) {
  // rest operator
  console.log("Hello, " + parameters.join(", "));
}

myFunc(
  "Manikant Sharma",
  "Welcome to the world of JavaScript!",
  "Have a great day!"
);

// When we call a function , whatever we put inside the brackets is called arguments
// When we define a function , whatever we put inside the brackets is called parameters

// This keyword , this refers to the current context
const obj = {
  name: "Manikant",
  greet: function () {
    console.log("Hello, I'm " + this.name); // Here this refers to obj
  },
};
obj.greet();

// this of global context is window in browsers and global in nodejs which is {}
console.log(this);

// But in Function this is not accessible
function showName() {
  const name = "Manikant";
  console.log(this);

  console.log("Hello, I'm " + this.name); // Here this.name is undefined
}

showName();

// Arrow functions
const add = (a, b) => a + b; // Implicit return
console.log("add: ", add(2, 3));

const subtract = (a, b) => ({ subtraction: a - b }); // Implicit return of object
console.log("subtract: ", subtract(5, 2));

const multiply = (a, b) => {
  // Explicit return
  return a * b;
};
console.log("multiply: ", multiply(2, 3));

// IIFE - Immediately Invoked Function Expression
// This type of function is invoked immediately after its declaration , and is used mainly to avoid polluting the global scope and to remain unaffected by global scope changes

// Normal IIFE example
(function () {
  console.log("IIFE");
})(); // Always end with semicolon to continue the code after it.

//Named IIFE example
(function namedIIFE() {
  console.log("Named IIFE");
})();

// Arrow function IIFE example , also known as unnamed IIFE
(() => {
  console.log("Arrow function IIFE");
})();

// Parameterized IIFE example
((name) => {
  console.log("Hello, " + name);
})("Manikant Sharma");
