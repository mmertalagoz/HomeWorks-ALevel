// homeWork2

// Javascript2 Function Methods Arrays Objects

// (((((((((((((((((******************HW1**********************)))))))))))))))))))
// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// console.log(vegetables.toString().replace(/,/g, " | "));

// or

// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// console.log(vegetables.join(" | "));

// (((((((((((((((((******************HW2**********************)))))))))))))))))))

// let bandit = "Вася,Петя,Вова,Олег";
// let banditArray = new Array("Вася", "Петя", "Вова", "Олег");
// console.log(banditArray);

// or;

// let bandit = "Вася,Петя,Вова,Олег";
// let banditArray = bandit.split(",");
// console.log(banditArray);

// (((((((((((((((((******************HW3**********************)))))))))))))))))))

// let hello2 = (name) => {
// 	if (name == null) {
// 		console.log("Hello " + "Guest");
// 	} else {
// 		console.log("Hello " + name);
// 	}
// };

// let x = prompt("enter your name pls");
// hello2(x);

// (((((((((((((((((******************HW4**********************)))))))))))))))))))

// let fruit = ["яблоко", "ананас", "груша"];
// let fruitUpperCase = fruit.toString().toLocaleUpperCase();
// fruitUpperCaseMassiv = fruitUpperCase.split(",");
// console.log(fruitUpperCaseMassiv);

// (((((((((((((((((******************HW5**********************)))))))))))))))))))

// function addOneForAll(...args) {
// 	return args.map((item) => {
// 		return item + 1;
// 	});
// }

// console.log(addOneForAll(1, 2, 3));

// or;

// function addOneForAll(args) {
// 	return args.map((item) => {
// 		return item + 1;
// 	});
// }

// console.log(addOneForAll([1, 2, 3]));

// (((((((((((((((((******************HW6**********************)))))))))))))))))))

// function getSum(...args) {
// 	let sum = 0;
// 	for (let arg of args) sum += arg;
// 	return sum;
// }
// console.log(getSum(1, 2, 3, 4));

// or
// its a not true , i have been to try this option
// function getSum(value) {
// 	if (!+value) {
// 		alert("Enter a Number Bro!");
// 	} else {
// 		let sum = 0;
// 		const arr = value.split(",");
// 		arr.forEach((item) => {
// 			sum = sum + +item;
// 		});
// 		console.log("sum", sum);
// 	}
// }
// const val = prompt("Enter a Number like that (1,2,45,12,54)");
// getSum(val);

// its a true its a teacher option

// function getSum(value) {
// 	let sum = 0;
// 	const arr = value ? value.split(",") : [];
// 	arr.forEach((item) => {
// 		sum += +item;
// 	});
// 	if (sum) {
// 		console.log("sum", sum);
// 	} else {
// 		console.log("Enter a Number Bro!");
// 	}
// }
// const val = prompt("Enter a Number like that (1,2,45,12,54)");
// getSum(val);

// (((((((((((((((((******************HW7**********************)))))))))))))))))))

// let takeNum = [1, "hello", 2, 3, 4, "5", "6", 7, null];
// let filtered = takeNum.filter((el) => typeof el === "number");
// console.log(filtered);

// or;

// let takeNum = [1, "hello", 2, 3, 4, "5", "6", 7, null];
// let filtered = takeNum.filter((el) => typeof el === Number(el));
// console.log(filtered);

// (((((((((((((((((******************HW8**********************)))))))))))))))))))

// function arrayTesting(args) {
// 	const arr = args.split(",");
// 	const checkToArr = arr.some((el) => el == true);
// 	console.log(checkToArr);
// }
// const takeAMassive = prompt("give a massive like that (1,0,4,null,undefined)");
// arrayTesting(takeAMassive);
