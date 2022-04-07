// Creating Objects in
// different Ways
/*
    1. Using Object Literals
    2. Using Factory Function
    3. Using Constructor Function
    4. Using JS Classes
*/

// 1. Using Object Literals

let car1 = {
    color: "red",
    brand: "Audi",
    start: function() {
        console.log("started");
    }
};

let car2 = {
    color: "green",
    brand: "Tata",
    start: function() {
        console.log("started");
    }
};

let car3 = {
    color: "white",
    brand: "BMW",
    start: function() {
        console.log("started");
    }
};

// 2. Factory function (to create a object)
/*
A Factory function is any function that
returns a new object for every function call.
Note:
function name should follow camelCase notation.
here we are passinng object properties to function.
*/

function createCar(color, brand) {
    return {
        color: color,
        brand: brand,
        start: function() {
            console.log("started");
        }
    };    
}

let car4 = createCar("yellow", "Ferrari");
let car5 = createCar("orange", "Kia");

console.log(car4);
console.log(car5);

// simplified syntax
function createCar(color, brand) {
    return {
        //color: color,
        color,
        //brand: brand,
        brand,
        //start: function() {
        start() {
                console.log("started");
        }
    };    
}

let car6 = createCar("yellow", "Ferrari");
let car7 = createCar("orange", "Kia");

console.log(car6);
console.log(car7);

// 3. Constructor Function
/*
A regular function that returns a
new object on calling with new operator

The created new object is called an instance.

NOTE:
function name should follow Pascal Case naming conention.

When the function is called with new, it does
the following things.
    1. Creates an empty object and assigns to this.
        =====> this = {}; (implicitly)
    2. Return this.
        =====> return this; (implicitly)
*/

function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
        console.log("started");
    };
}

let car8 = new Car("Purple", "Nissan");
console.log(car8);

let car9 = new Car("Black", "Maruthi");
console.log(car9);

/*
Here
car8 - instance
car8.color & car8.brand - instance properties
car8.start() - instance method
*/

/*

Factory functions vs Constructor functions

1. Follows camelCase notation 
    vs 
1. Follows PascalCase notation

2. No need of new Operator for function calling 
    vs 
2. Need new Operator for function calling

3. Explicitly need to return the Object
    vs
3. Created object returns implicitly    

*/

/*
NOTE:
1. Functions are Objects.
2. Similar Objects functions also have properties and methods.
*/
