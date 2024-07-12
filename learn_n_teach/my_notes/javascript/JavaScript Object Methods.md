*<- Prev:[[JavaScript Object Properties]]*
# JavaScript Object Methods

A method is a **function definition** stored as a **property value**

```js
const person = {
    firstName: "Joe",
    secondName: "Johnson",
    age: 20,
    favPie: "raspberry",
    fullName: function() {
        return this.firstName + " " + this.secondName;
    }
};
```

`this` refers to the **person object**
Hence, it is appended before the properties **firstName** and **secondName**

## Access Object Methods

Object methods can be accessed as shown below:

```js
objectName.methodName()
```

If you access the `fullName` property without (), it will return the function definition.

## Add Method To Object

A new method can be added as follows:

```js
person.name = function() {
        return this.firstName + " " + this.secondName;
    };
```


*-> Next: [[JavaScript Display Objects]]*