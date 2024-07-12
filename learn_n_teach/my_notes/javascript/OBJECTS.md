# [[JavaScript Objects]]
## Real Life Objects, Properties, and Methods

In real life a car is an [[object]].  
It has `properties` like weight and color, and `methods` like start and stop:  

All cars have the same `properties`, but the property `values` differ from car to car  
The same applies to the cars' `methods`, which are the same but are performed `at different times`.  

As learnt before, JS [[variables]] are containers for data values.  
[[Objects]] are [[variables]] too. But [[objects]] can contain many values.  

The code below assigns `many values` (Fiat, 500, white) to a [[variable]] named car:  

```js
const car = {type:"Fiat", model:"500", color:"white"};
```

The values are written in `name:value` pairs (name and value separated by colon).

> It is a common practice to declare objects with the [[const]] keyword.

## JavaScript Object Definition

JS can be defined in the following ways:  
- Using an [[object literal]]
- Using the `new` keyword
- Using an **Object Constructor**  

### JavaScript [[Object Literal]]
An [[object literal]] _(also - **object initializers**)_ is a list of [[name:value]] pairs inside curly braces`{}`  

```js
{firstName:"John", lastName:"Doe", age:"23", nationality:"New World"}
```

### Creating A JavaScript Object
Here, we create a JS object with 4 properties:

```js
const brandOne = {firstName:"The", lastName:"Joernal", age:1, brandColor:"Blue"}

// object initializers can span multiple lines with spaces and line breaks
```

Then, here, we create an empty object and add properties after:

```js
// create object
const brandOne = {};

// add properties
brandOne.firstName = "The";
brandOne.secondName = "Joernal";
brandOne.age = 1;
brandOne.brandColor = "Blue";
```

### Using `new` [[keyword]]
We can also use the `new Object()`, to create a new object:

```js
const brandOne = new Object();

brandOne.firstName = "The";
...
```

Although the two methods above do the same thing, for simplicity, readability and execution speed, use the **[[object literal]]** method.

## Object Properties

These are the named values in JavaScript objects.

Eg. `firstName - (property)` and `The - (value)`,

### Accessing Object Properties
You can access them in two ways:
1. objectName.propertyName
2. objectName["propertyName"]

```js
// example 1
brandOne.firstName

//example 2
brandOne["firstName"]
```

## JavaScript Object [[Methods]]
_'Methods'_ are **actions** that can be performed on objects. They are ***function definitions***, stored as property values.


| Property   | Value                                                      |
| ---------- | ---------------------------------------------------------- |
| firstName  | The                                                        |
| secondName | Joernal                                                    |
| age        | 1                                                          |
| brandColor | Blue                                                       |
| fullName   | function(){return this.firstName + ' ' + this.secondName;} |

Above, `this` refers to the **brandOne object**, hence:
- this.firstName is 'firstName' in 'brandOne' object
- this.secondName is 'secondName' in 'brandOne' object

```js
//to get the full Name, we'll use the `fullName` property/function
brandOne.fullName() // 'The Joernal'
```


## Understanding Objects is KEY

**NOTE** that understanding Objects in JavaScript, helps a lot in working well with JavaScript as a whole.

Objects:
- are **Objects**
- **Maths** are **Objects**
- **Functions** are **Objects**
- **Dates** are **Objects**
- **Arrays** are **Objects**
- **Maps** are **Objects**
- **Sets** are **Objects**

All JavaScript values, except [[primitives]], are objects.


## JavaScript Objects are Mutable
JS objects are mutable: This is because they are addressd by reference, not by value.

If person is an abject, the following statement doesn't create a copy of person:

```js
const x = person;
```

The object x is not a copy of person. Object x is person.
Object x and person object share a memory address. Any changes to x, change person:

```js
// create person object
const person = {
    firstName:"Joe",
    lastName:"Johnson"
};

// create x
const x = person;

x.age = 10;
```


Next: [[JavaScript Object Properties]]