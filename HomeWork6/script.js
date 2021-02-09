// *************************-----------------HW-1-----------------*************************

// function Animal(name, age, color) {
// 	if (!new.target) {
// 		return new Animal(name, age, color);
// 	}
// 	this.name = name;
// 	this.age = age;
// 	this.color = color;
// }
// let bird = Animal("valeriya", 3, "yellow");
// let lion = new Animal("mert", 5, "orange");

// *************************-----------------HW-2-----------------*************************

// function Calculator() {
// 	this.read = function () {
// 		let value1 = prompt("Enter First Number");
// 		while (value1 === null || isNaN(value1) || value1 === "") {
// 			value1 = prompt("Enter First Number");
// 		}
// 		this.value1 = value1;
// 		let value2 = prompt("Enter Second Number");
// 		while (value2 === null || isNaN(value2) || value2 === "") {
// 			value2 = prompt("Enter second Number");
// 		}
// 		this.value2 = value2;
// 	};

// 	this.setAction = function () {
// 		let mathSymbols = prompt("Please Enter a Math Symbols +,-,/,* ");
// 		while (
// 			!(
// 				mathSymbols === "+" ||
// 				mathSymbols === "-" ||
// 				mathSymbols === "*" ||
// 				mathSymbols === "/"
// 			)
// 		) {
// 			mathSymbols = prompt(
// 				"Please just enter one of these Math Symbols '+,-,/,*' "
// 			);
// 		}
// 		this.mathSymbols = mathSymbols;
// 	};

// 	this.doAction = function () {
// 		this.sum = function () {
// 			this.result = this.value1 + this.value2;
// 			alert(this.result);
// 		};
// 		this.min = function () {
// 			this.result = this.value1 - this.value2;
// 			alert(this.result);
// 		};
// 		this.mul = function () {
// 			this.result = this.value1 * this.value2;
// 			alert(this.result);
// 		};
// 		this.splt = function () {
// 			this.result = this.value1 / this.value2;
// 			alert(this.result);
// 		};

// 		switch (this.mathSymbols) {
// 			case "+":
// 				this.sum();
// 				break;
// 			case "-":
// 				this.min();
// 				break;
// 			case "*":
// 				this.mul();
// 				break;
// 			case "/":
// 				this.splt();
// 				break;
// 			default:
// 				alert("not includes");
// 		}
// 	};
// }

// const calc = new Calculator();
// calc.read();
// calc.setAction();
// calc.doAction();

// *************************-----------------HW-3-----------------*************************

//это знаю чуть чуть неправильно но я этого не понял (

// function Nums(...args) {
// 	this.args = args[0].split(",");
// 	let takeNum = this.args
// 		.map((item) => parseInt(item))
// 		.filter((itemm) => !isNaN(itemm));
// 	console.log("Array and Filter", takeNum);

// 	let sum = 0;
// 	this.getSum = function () {
// 		takeNum.forEach((item) => {
// 			sum += item;
// 		});
// 		return "sum " + sum;
// 	};

// 	this.myFilterReverse = function () {
// 		const reserved = [];
// 		for (let i = takeNum.length; i > 0; i--) {
// 			reserved.push(takeNum.pop());
// 		}
// 		return reserved;
// 	};
// }

// const takeNum = new Nums(prompt("enter num "));
// const result1 = takeNum.getSum();
// const result2 = takeNum.myFilterReverse();
// console.log(result1);
// console.log(result2);

// *************************-----------------HW-4-----------------*************************

// let estMass = [1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 13, 13, 13, 12, 12, 4];
// Array.prototype.getUniqItems = function () {
// 	let unique = estMass.filter((item, i, ar) => ar.indexOf(item) === i);
// 	return unique;
// };
// console.log(estMass.getUniqItems());

// *************************-----------------HW-5-----------------*************************

// const estObj = { a: 1, b: 2, c: 3, d: false, e: 0, f: undefined, g: "ada" };

// Object.prototype.getKeySum = function () {
// 	let sum = 0;
// 	for (let key of Object.values(estObj)) {
// 		if (typeof key === "number") {
// 			sum += key;
// 		}
// 	}
// 	console.log(sum);
// };

// Object.prototype.reverseKey = function () {
// 	let newobj = {};
// 	for (const [key, value] of Object.entries(this)) {
// 		newobj[value] = key;
// 	}
// 	console.log(newobj);
// };

// // estObj.getKeySum();
// estObj.reverseKey();
