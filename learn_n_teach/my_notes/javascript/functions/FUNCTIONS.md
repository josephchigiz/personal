# [[JavaScript Functions]]
A block of code designed to perform a specific task  
It is executed when something invokes it(calls it)

A [[function]] is defined with the `function` keyword, followed by a `name` then parentheses `()`.  

Function names follow the same rules as variables; They can contain letters, digits, underscores, and dollar signs.  

The parentheses enclose parameter names separated by commas.  
Then the code to be executed, by the function, is placed inside curly brackets as seen in the example;

```js
// function to compute the product of p1 and p2
funcion myFunction(p1, p2) {
  return p1 * p2;
}
```

The function parameters are listed within the parentheses `()` in the function definition.  
The `arguments` are the `values` that are requested/received by the function when it is invoked.  

The arguments behave as local variables inside the function.  

## Invoking a function  

The code within a function is executed when something invokes it:  
- When an event occurs, e.g when a user clicks a button  
- When it is called from JavaScript code  
- Automatically (self invoked)  

## "[[return]]"  

When JavaScript reaches a `return` statement, the function stops executing.  
The `return value` is returned to the 'caller'/'invoker':  

```js
// Function is called and the return value will be stored in `x`
let x = myProduct(4, 3);

function myProduct(a, b) {
  // the function will return the product of the two
  return a * b;
}
```

> **Why Functions?**
> With functions you can:
>- Reuse code 
>- Write code that can be used many times 
>- Use the code with different args, to produce diff results  

## () Operator  
When appended to the function name it invokes the function:  

```js
// convert fahrenheit to celcius
function toCelcius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelcius(77); //25
```

##### `toCelcius` refers to the function object
##### `toCelcius()` refers to the function result  

## Functions as Variable values
Functions can be used the same way as variable values:  

 ```js
let text = "The temperature is " + toCelcius(77) + " Celcius";
```
## [[Local Variables]]
Local variables are variables declared from within a JavaScript function.  
Local variables can only be accessed from within that function:  

```js
// carName variable cannot be used by code here  

function myCar() {
  let carName = "Volvo";
  // carName can be used by code here
}

// carName variable cannot be used by code here
```

**NOTE:** since local vars are only recognized inside the function, the same function name can be used in different functions  

Local vars are created vars when a function begins and deleted when a function is completed.
