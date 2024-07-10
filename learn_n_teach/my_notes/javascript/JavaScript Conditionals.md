## If...else
 ```js
 if (condition) {
 //code to be run
 } else {
 // code to be run if first confition is false
 }
```

Example:
```js
let diceNum = 12;
let makeMove;

if (diceNum <= 6) {
  makeMove = true;
} else {
  makeMove = false;
}
```


## ...else if
`else if` is used when we have more than two choices or outcomes.

```js
if (condition) {
 //code to be run
 } else if {
 // code to be run if first confition is false
 } else {
 // code to run if all previous statements are false 
 }
```


## Special boolean instances
When testing boolean **(true/false)** values, any value that isn't `false, undefined, null, 0, NaN` or an empty string `""` , return `true` when tested as a conditional statement. Therefore you can use a variable name on its own to test if it is `true` or that it exists. 

Example:

```js
let language = 'JavaScript';

if (language) {
  console.log('Learning JavaScript!')
} else {
  console.log('You're learning the wrong language!')
}


OR


let homeworkDone = true;
let watchTV;

if (homeworkDone) { //you don't have to explicitly write 'homeworkDone === true;'
  watchTV = true;
} else {
  watchTV = false;
  console.log('Finish your homework first!')
}
```


## Nesting if...else

You can put an `if...else` inside another .

Example:

```js
if (weather === 'sunny') {
  if (temp < 36) {
    console.log("Fine weather for a swim, innit?");
  } else if (temp >= 36) {
    console.log("The weather is quite hot. Apply sunscreen when going out. Better yet, keep indoors and turn on the AC");
  }
} ...
```


## [[Logical Operators]]

You can use conditionals if you want to test multiple conditions without nesting.

`&&` --> You can chain two or more conditions, so that each of them have to be **individually** `true` for the whole expression to return `true`
`||` --> You can chain together two of more conditions so that one or more of them individually evaluates to `true` for the whole expression to be `true`

Example of **AND**:

```js
if (weather === 'sunny' && temp < 36) {
  console.log("Fine weather for a swim, innit?");
} else if (weather === 'sunny' && temp >= 36) {
  console.log("The weather is quite hot. Apply sunscreen when going out. Better yet, keep indoors and turn on the AC");
}
```

So, the user will be advised to swim if the weather is fine - sunny and the temperature is lower than 36deg, otherwise, they should stay indoors if the second statement is true.

This way, a lot of code writing is saved.

Example with **OR**:

```js
if (defenderAvailable || porche911Available) {
  console.log('Chop that money!');
} else {
  console.log('Not worth your money.')
}
```

Using **!** **NOT**;

We shall use `!` NOT operator here to negate an expression. We can combine it with `OR` or `AND`;

```js
if (!(defenderAvailable || porche911Available)) {
  console.log('Not worth your money.');
} else {
  console.log('Chop that money!');
}
```

Here, if the **OR** statement returns `true`, the `!` operator negates it so that the overall expression becomes `false`

## the `OR` predicament

A very common mistake made when using `||` is stating the variable whose value you are checking once and then give a list of value that it could be `true` with, separated by `||` operator:

```js
if (x === 3 || 7 || 8 || 4) {
  //run my code
}
```

In such a case, the condition inside `if ()` will always evaluate to `true` since 7 or any other non-zero value evaluate to true.

Logically, this statement isn't what we want. To make it work, specify a complete test on each side of the `||` operator:

```js
if (x === 3 || x === 7 || x === 8 || x === 4) {
  //run my code
}
```

## [[switch]] statements

[[Switch]] statements are your friend when you have a large number of choices and you need one that matches the value in order to execute the corresponding code.

This is exactly what [[switch]] does, whereby it takes a single expression or value as an input and then looks through several choices, and runs corresponding code when it finds a choice that matches the value.

```js
switch (expression) {
  case choice1:
    //run this code
    break;
    
  case choice2:
    //run this code
    break;
    
  case choice3:
    //run this code
    break;
    
  default;
    //actually just run this code
    break;
}
```

The `break` statement: If the previous choice matches the expression/value, the browser stops executing the code block here and moves on to whatever comes after the switch statement.

The `default` keyword, represents what is to be run if other choices don't match. We don't need a `break` here since it's at the end of the `switch` statement anyway.

The `default` statement isn't compulsory but is a good addition to handle unknown cases.

## [[Ternary]] operator

Also the "**conditional** operator". It is a small bit of syntax that checks a condition and returns a value/expression if it is `true`, and another if it is false.

This really comes in handy sometimes, especially to take less code than an `if...else` statement when you have two choices chosen between using a `true/false` condition:

```js
condition ? run this code : run this code instead
```

An example of a place this can be used:

```js
// normal if..else statement
if (authenticated) {
  renderApp();
} else {
renderLogin();
}

//using ternary operators
authenticated ? renderApp() : renderLogin();

//If the condition is true, the app will be rendered, if false, the login will be rendered
```

### btw!

To embed code in a string, we use backticks. You then wrap the variable or expression inside `${ }` and the result will be included in the string.

```js
const name = "Joe";

const greeting = `Hello ${name}!`;
console.log(greeting); //Hello Joe!
```

You can use it to join two strings:

```js
const firstName = "Joseph";
const secondName = "Ochego";

const greeting = `Hello ${firstName} ${secondName}!`;
console.log(greeting); //Hello Joseph ochego!
```