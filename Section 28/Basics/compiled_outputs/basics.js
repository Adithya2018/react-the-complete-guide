// Primitives: Numbers, Strings, booleans
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
// core primitives are lowercase
var age = 23;
console.log(age);
var username = 'My Name';
console.log(username);
var val = true;
console.log(val);
// More Complex types: arrays, objects
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: "Max",
    age: 34
};
// array of objects
var people;
people = [
    {
        name: "n",
        age: 34
    },
    {
        name: "adithyan",
        age: 24
    }
];
console.log(person);
// Type Inference
var course = "React";
// will show error because of type inference
// course = 34;
// Union type
var test = 23;
// works because of union
test = "testing";
// Functions & Types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [2, 3, 4, 4];
var updatedArray = insertAtBeginning(demoArray, 1);
// This becomes an error due to generics
// updatedArray[0].split('');
var anotherArray = ['a, dsf', 'b', 'c'];
var updatedNewArray = insertAtBeginning(anotherArray, 'f');
updatedNewArray[0].split(',');
