// hw1
// class ITCompany {
// 	create(worker) {
// 		if (worker === 'Programmer') {
// 			return new Programmer('Mert', 25);
// 		}
// 		if (worker === 'Tester') {
// 			return new Tester('Valeriya', 28);
// 		}
// 		throw new Error('This worker is not really');
// 	}
// }

// class Human {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getName() {
// 		console.log(`${this.name}`);
// 	}
// 	getAge() {
// 		console.log(`${this.age}`);
// 	}
// 	static getType() {
// 		return `Human`;
// 	}
// }

// class Programmer extends Human {
// 	constructor(name, age) {
// 		super(name, age);
// 		this.job = 'Programmer';
// 	}
// 	static getJob(job) {
// 		console.log(job);
// 	}
// }

// class Tester extends Human {
// 	constructor(name, age) {
// 		super(name, age);
// 		this.job = 'Tester';
// 	}
// 	static getJob(job) {
// 		console.log(job);
// 	}
// }

// const company = new ITCompany();

// const programmer = company.create('Programmer');
// const tester = company.create('Tester');
// Programmer.getJob(programmer.job);
// Tester.getJob(tester.job);
// console.log(programmer);
// console.log(tester);

// hw2
// const obj = {
// 	a: '1',
// 	b: '2',
// 	c: '3',
// 	e: '4',
// 	o: '5',
// };

// for (let key in obj) {
// 	if ('aeiouy'.includes(key.toLowerCase())) {
// 		Object.defineProperty(obj, key, {
// 			writable: false,
// 			configurable: false,
// 		});
// 	}
// }
// console.log(Object.getOwnPropertyDescriptors(obj));
