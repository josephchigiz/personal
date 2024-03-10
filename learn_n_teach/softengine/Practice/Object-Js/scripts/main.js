//An example of String and an Object
//When a method is added to a string, it becomes an object

// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

//Window is the global scope in browsers  with others like alert and navigator falling under it.
// console.log(window);

//navigator.appVersion should show me my system info
// console.log(navigator.userAgent);

//* The following codes are similar/////////////////////////////////////

// if (truthy) {
//     x=1
// } else {
//     x=2;
// }

//is the same as

// var x = truthy ? 1 : 2;

//* ////////////////////////////////////////////////////////////////////

//* Creating Objects ///////////////////////////////////////////////////
//!using literals (= {})

// const obj = {
//     car: 911,
//     model: 'Carrera',
//     year: 1998
// }

// //although we've used const, we can change the values later:

// obj['car'] = '240Z'

// console.log(obj['car']);

//! using constructor syntax 
// const obj = new Object();

// obj.car = '240z';
// obj.model = 'Datsun';

// console.log(obj.model);

//! using crate = Prototype Chain
// const organism = {
//     dna: Math.random()
// }

// const obj2 = Object.create(organism)
// console.log(obj2.dna)

//* ////////////////////////////////////////////////////////////////////

//!!! And so, it begins////////////////////////////////////////////////
                    //! OBJECTS BASICS//


const person = {
    name: ["Joe", "Graphic"],
    age: 21,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};
const myDataName = "Height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

//*we can use a simpler syntax for the functions in the object:
//instead of *bio: function ()*, You can just write *bio()*

const person2 = {
    name: ["Joe", "Graphic"],
    age: 21,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

//! //////////////////// DOT NOTATION ////////////////
//* Here you write the namespace first(the object's name)
//* followed by a dot and the item to be accessed:

person.age;
person.bio();

//! /////// Objects as Object Properties //////////////
//* An object property can be an object itself
//An example

const person3 = {
    name: {
        first: 'Joe',
        last: 'Graphic',
    },
    //...
};

//Now here, well chain the extra step with another dot:

person3.name.first;

//you'll also need to go through your method code to change any instance of this::

name[0];
name[1];

//to::

name.first;
name.last;

//! ///////////////// BRACKET NOTATION ////////////////
//* this gives you another way of accessing object properties
//instead of using dot notation like this::

person.age;
person3.name.last;

//use brackets::

person["name"];
person["name"]["last"];

//* This looks very similar to how we access items in an array, and it's basically the same thing::
//However, bracket notation is more succint and easier to read.

//* there are some cases where you have to use square brackets. For example, if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation. <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics>

//! ///////////// Setting Object Members ////////////////
//* Here we'll look at setting(update) the values of object members by declaring the member you want to set.::

person.age = 45;
person3["name"]["last"] = "Chigiz";

//Let's create new members

person["eyes"] = "Hazel";
person.farewell = function () {
    console.log("Bye Everybody!");
};

//*One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too. 

//Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs. We could get those values like this:

/*
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
*/

//Then add this new member name and value tot the 'person' object like this:  

// person[myDataName] = myDataValue;

//To try this, add the required lines into the code, just below the closing curly brace of the person object ☝️
//Test whether it worked with::

person.height;

//* This method of adding properties to objects isn't possible with dot notation.

//! //////////////// What's 'This' /////////////////////////
// In our method, we had the code below::

/*
    introduceSelf() {
        console.log(`Hi I'm ${this.name[0]}`);
    }
*/

//* `this` keyword refers to the current object the code is being written inside 

//* This is very useful when using 'CONSTRUCTORS' to create more than one object from a single object definition.

//! ///////// Introducing Constructors ///////////////////////
//* Using object literals is fine when creating one object, but seriously inadequate when creating several.

//* We would like a way to define the "shape" of an object. The set of methods and properties it can have and then create as many objects as we like, just updating values that are different.

//*Firstly, we can use a function::

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}  //so each time we call this function, it creates a new object

//'createPerson()' takes the parameter 'name', but the value of 'introduceSelf' is same for all objects created from this function. This is why 'this' is so useful.

//Now we can create as many objects as we like from that function::

const chigiz = createPerson("Chigiz");
chigiz.name;
chigiz.introduceSelf();

const graphic = createPerson("Graphic");
graphic.name;
graphic.introduceSelf();

//* An even more efficient way of doing all this is using a //CONSTRUCTOR//
//a constructor is just a function called using the 'new' keyword. WHen called, it will:
/*
- create a new object
- bind 'this' to the new object
- run the code in the constructor
- return the new constructor
*/

//* Constructors typically are named with a capital letter, and with a name for the type of object they create.
//* We can rewrite our example like this::

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

//*To call Person() as a constructor, use new.

const manchego = new Person("Manchego");
manchego.name;
manchego.introduceSelf();

