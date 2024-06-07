*<- Prev: [[JavaScript Object Methods]]*

# JavaScript Display Objects

Displaying a JavaScript Object will output `[object Object]`:

```js
const person = {  
  name: "Joe",  
  age: 20,  
  city: "Bengaluru"  
};

document.getElementById("demo").innnerHTML = person; //[object Object]
```

This can however be **maneuvered** and solved with a couple of workarounds:

1. Display the Object properties by name
2. Display the Object Properties in  a Loop
3. Display the Object using Object.values()
4. Display the Object using JSON.stringify()

## Displaying Object Properties

Object properties can be displayed as a string:

```js
// create object
const person = {  
  name: "John",  
  age: 30,  
  city: "New York"  
};

// display properties
document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;
```

## Display Properties in a Loop

Object properties can also be collected in a loop. 
Here, we use an expression:

```js
// Create an Object
const person = {  
  name: "John",  
  age: 30,  
  city: "New York"  
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// Display the Text
document.getElementById("demo").innerHTML = text;
```

**NOTE:** You must use `person[x]` in the loop.
`person.x` will not work since `x` is the loop variable.

## With Object.values()

`Objects.values()` creates an array from the properties' values.

```js
const person = {  
  name: "John",  
  age: 30,  
  city: "New York"  
};

// create array
const personArray = Object.values(person);

// display the array using DOM
document.getElementById("demo").innerHTML = personArray;
```


## With Object.entries()

Using `Object.entries()` simplifies using objects in loops:

```js
const pens = {Blue:20, Black:22, Red:10};

let text = "";

for (let [pen, value] of Object.entries(pens)) {
    text += fruit + ": " + value + "<br>";
}

//display the count of each pen color
document.getElementById("demo").innerHTML = text;
```

## With JSON.stringify()

You can convert JavaScript objects into a string with the JSON method `JSON.stringify()`
This method is included in JavaScript and is also supported in most browsers, at least all the major ones.

```js
const person = {
  name: "John",  
  age: 30,  
  city: "New York"
};

// use JSON.stringify() method
let personString = JSON.stringify(person);

// display the output
document.getElementByID("demo").innerHTML = personString;
```

This method will output a string a string written in JSON notation:

```json
{"name":"John", "age":30, "city":"New York"}
```

*-> Next: [[JavaScript Object Constructors]]*
