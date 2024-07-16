// Primitives: Numbers, Strings, booleans
// More complex types: arrays, objects
// Function types, parameters

// Primitives
// core primitives are lowercase

let age: number = 23;

console.log(age);

let username: string = 'My Name';

console.log(username);

let val: boolean = true;

console.log(val);

// More Complex types: arrays, objects

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// basic type for type alias
// type alias
type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: "Max",
    age: 34
};

// array of objects
let people: Person[];

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

let course = "React";

// will show error because of type inference
// course = 34;


// Union type

let test: number | string = 23;
// works because of union
test = "testing";

// Functions & Types

function add(a: number, b: number): number | string{
    return a + b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [2, 3, 4, 4];

const updatedArray = insertAtBeginning(demoArray, 1);

// This becomes an error due to generics
// updatedArray[0].split('');

const anotherArray = ['a, dsf', 'b', 'c'];

const updatedNewArray = insertAtBeginning(anotherArray, 'f');
updatedNewArray[0].split(',');