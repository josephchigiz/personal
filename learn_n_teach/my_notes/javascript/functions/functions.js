// Parameters
// Parameters are the items listed between the parentheses of a function.

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
};

console.log(favoriteAnimal("Dog")); //Dog is my favorite animal

// By putting the animal as a parameter, we inform the func that 
// we will send some value.
// Then when we use the Dog ARGUMENT in the log method, it 
// is pased and used by the function

// ! AONYMOUS functions and arrow functions
// we can create functions without names

(function () {
  alert("Hello!");
});

//* This is common when a function expects to receive another function 
//* as a parameter. The parameter function is often passed as an anon func.

// This form of creating a function is called function expression, ulike 
// declaration, function expressions are not hoisted

//* Here is an example of an anonymous function in use

textBox.addEventlistener("keydown", function (event) {
  console.log(`You pressed "${event.key}"`)
});

//! Arrow functions
// Instead of writing an anonymous function as done above,
// We can use a different form called arrow functions:

textBox.addEventlistener("keydown", (event) => {
  console.log(`You pressed "${event.key}"`);
});

// if the func only takes one parameter, we don't need to use parantheses

textBox.addEventlistener("keydown", event => {
  console.log(`You pressed "${event.key}"`);
});

//! If your function contains only one line - a return statement, then 
// we don't need to have braces and just return the expression implicitly

const originals = [1, 2, 3, 4];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6, 8]

//* The code above is an equivalent of

function doubleItem(item) {
  return item * 2;
};


//* ==============================WORKING EXAMPLES ====================

//* HTML
// <input id = "textBox" type = "text" />
// <div id="output"></div>

//* JS
const textBox = document.getElementById("#textBox");
const output = document.getElementById("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


//! ============================FUNCTION SCOPE & CONFLICTS=============
// The top level outside all of your functions is called Global scope
// Variables defined outside a function/in the global scope is accessible
// from anywhere in the code

// This helps with security and also to avoid conflicts between variables
// defined within and outside the function, especially if they are similarly
// named.

//* Check the example used with the html file