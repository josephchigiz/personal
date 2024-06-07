*<- Prev: [[JavaScript Display Objects]]*
# JavaScript Object Constructors

At some point we might need to create objects of the same **type**. 
We use **object constructor functions** to create an **object type**.
**NOTE;** Preferably, use an uppercase first letter when naming [[constructor functions]].

### Example: Car Objects Type

```js
function Car(company, model, year, color) {
    this.carCompany = company;
    this.carModel = model;
    this.modelYear = year;
    this.color = color;
}
```

When the new object is created, it will become the value of `this`.

Use `new Car()` to create a new Car object. You can create multiple new ones.

```js
const defender = new Car("Land Rover", "Defender 90", "2021", "Pangea Green");
const porsche911 = new Car("Porsche", "911 GT3", "2022", "Crayon"); 
```


## Default Property Values

Values given to the properties will be the default values for any objects created using the constructors:

```js
function Car(company, model, year, color) {
    this.carCompany = company;
    this.carModel = model;
    this.modelYear = year;
    this.color = color;
    this.category = "favourite" // default for all objects by this constructor
}
```

## Add property to an object

You can do this with the usual syntax:

```js
defender.length = 180.4; //inches
```

This property will be added to the `defender` object and not any other **Car Objects**.

## Add a property to a constructor

You cannot add a new property directly to the object constructor.
Instead, you add it to the **constructor function prototype**:

```js
Car.prototype.length = 180.4;
```

## Methods in Constructor Functions

Constructor functions can also have **methods**:

```js
function Car(company, model, year, color) {
    this.carCompany = company;
    this.carModel = model;
    this.modelYear = year;
    this.color = color;
    this.category = "favourite";
    this.carName = function() {
        return this.carCompany + " " + this.carModel;
    };
}
```

## Add method to Object or Constructor

Similar to adding properties, you can also add a method to an object.

```js
porsche911.carName = function() {
    return this.carCompany + " " + this.carModel;
};
```

Remember that this only adds the function to `porche911` and not other **Car Objects**.

Adding a method to a method to a constructor, as in adding properties, requires the method to be added to the constructor prototype:

```js
Car.prototype.carName = function() {
    return this.carCompany + " " + this.carModel;
};
```

## JavaScript Built-in Methods

In JavaScript, all native objects have built-in constructors:

```js
new Object()     // New Object object
new Function()   // New Function object
new Map()        // New Map object
new Array()      // New Array object
new Set()        // New Set object
new Date()       // New Date object
new RegExp()     // New RegExp object
```

We, however, mostly don't use the syntax while creating the new objects, often, we use literals:

> Object literals `{}` instead of `new Object()`
> Array literals [] instead of `new Array()`
> Pattern literals `/()/` instead of `new RegExp()`
> Function expressions `() {}` instead of `new Function`


*-> Next: [[JavaScript Events]]*
