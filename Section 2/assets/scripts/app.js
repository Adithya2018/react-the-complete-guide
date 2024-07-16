// import { apiKey } from './util.js';
// // for react app due to the build process we can ommit the .js file extension
// // in vanila javascript you can't

// console.log(apiKey);

// import testing from './util.js';

// console.log(testing);

// import * as util from './util.js';

// console.log(util.default);
// console.log(util.whatIsThis);
// console.log(util.apiKey);
// console.log(util);

// // we can use 'as' for alias
// import { whatIsThis as thisWorks, testKey } from './util.js';

// function doesItWork() {
// 	console.log(thisWorks);
// 	console.log(testKey);
// }

// doesItWork();

// // Arrow functions

// const testArrowFunction = (arrow, func) => {
// 	console.log('testing arrow functions');
// 	console.log(arrow, func);
// };

// testArrowFunction(3, 4);

// // JavaScript Objects

// let user = {
// 	name: 'A',
// 	age: 34,
// 	premium: true,
// 	remove_premium() {
// 		this.premium = false;
// 	},
// 	add_premium() {
// 		this.premium = true;
// 	},
// };

// console.log(user);
// user.remove_premium();
// console.log(user);

// // Javascript classes

// class User {
// 	constructor(name, age, premium) {
// 		this.name = name;
// 		this.age = age;
// 		this.premium = premium;
// 	}

// 	remove_premium() {
// 		this.premium = false;
// 	}

// 	add_premium() {
// 		this.premium = true;
// 	}
// }

// let u = new User('adi', 24, true);

// console.log(u);
// u.remove_premium();
// console.log(u);

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies[0]);

// hobbies.push('Working');
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
// 	return item === 'Cooking';
// });

// const index2 = hobbies.findIndex((item) => item === 'Reading');

// console.log(index);
// console.log(index2);

// const edited_hobbies = hobbies.map((item) => ({ text: item + '!' }));
// console.log(edited_hobbies);

// const [test, val] = ['testing', 'destructuring'];

// console.log(test, val);

// // alias and destructuring
// const { name: username, age } = {
// 	name: 'adithyan',
// 	age: 23,
// };

// console.log(username);
// console.log(age);

// const hobbiesNow = ['Random', 'Walking', 'Yogas'];

// const newHobbies = ['Reading'];

// const combinedHobbies = [...hobbiesNow, ...newHobbies];

// console.log(`My current Hobbies are ${combinedHobbies}`);

// const extendedUser = {
// 	isAdmin: true,
// 	...user,
// };

// console.log(extendedUser);

// // const password = prompt('Your Password!!!');
// // console.log(password);

// // if (password === 'Hello') {
// // 	console.log('Hello Works');
// // } else if (password === 'hello') {
// // 	console.log('hello works');
// // } else {
// // 	console.log('Access Denied!');
// // }

function handleTimeout1() {
	console.log('Timed out!!!');
}

setTimeout(handleTimeout1, 2000);
setTimeout(() => {
	console.log('Anonymous function Timeout!');
}, 4000);
