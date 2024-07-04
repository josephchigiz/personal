*<- Prev: [[OBJECTS]]*
# JavaScript Object Properties
- Object = Unordered collection of properties
- Properties = most important part of JavaScript objects

## Access object property:

```js
// 1. objectName.property
let age = person.age;

// 2. objectName['property']
let age = person["age"];

// 3. objectName[expression]
let age = person[x];
```

## Add new properties to existing object:

```js
person.favPie = "raspberry";
```

## Deleting properties:
The `delete` keyword deletes the property you want to get rid of:

```js
const person = {
    firstName: "Joe",
    secondName: "Johnson",
    age: 20,
    favPie: "raspberry"
};

delete person.favPie;
```

## Nested Objects
The property values inside an object can also be other projects:

```js
const person = {
    firstName: "Joe",
    secondName: "Johnson",
    age: 20,
    favPie: "raspberry",
    myPens: {
        pen1:"gel",
        pen2:"sharpy"
    }
};
```

Nested objects can also be accessed using the dot notation, or bracket notation

## For the complete [JavaScript Object Reference](https://www.w3schools.com/jsref/jsref_obj_object.asp)

*-> Next: [[JavaScript Object Methods]]*