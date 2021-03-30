// hw1

// let prevNumber1 = 1;
// let prevNumber2 = 1;
// let currentNumber = 0;
// let arr = [prevNumber1, prevNumber2];

// for (let i = 0; i < 20; i++) {
// 	currentNumber = prevNumber1 + prevNumber2;
// 	prevNumber1 = prevNumber2;
// 	prevNumber2 = currentNumber;
// 	arr.push(currentNumber);
// }

// console.log(arr);

// function fi(x, y, n) {
// 	let acc = y + x;
// 	let first = y;
// 	console.log(acc);
// 	if (n === 1) {
// 		return acc + y;
// 	} else {
// 		return fi(first, acc, n - 1);
// 	}
// }

// const res = fi(1, 1, 20);
// console.log(res);

// hw2

// let n = 20;
// let num = 0;
// for (let i = 1; i < n; i++) {
// 	num += i;
// }
// console.log(num);

// function getNaturalSum(a, b, n) {
// 	let upperA = a + 1;
// 	let sum = a + b;
// 	if (n === 1) {
// 		return b;
// 	} else {
// 		return getNaturalSum(upperA, sum, n - 1);
// 	}
// }

// const result = getNaturalSum(1, 0, 20);
// console.log(result);

//HW3

// const func1 = (from, to) => {
// 	setInterval(() => {
// 		if (from < to) {
// 			console.log(from++);
// 		}
// 	}, 1000);
// };

// func1(0, 10);

// const func2 = (from, to) => {
// 	setTimeout(function func3() {
// 		if (from < to) {
// 			console.log(from++);
// 			setTimeout(func3, 1000);
// 		}
// 	}, 1000);
// };

// func2(0, 10);

//HW4

// let step = 0;
// const count = setInterval(() => {
// 	step++;
// 	console.log('Прошло ' + step + ' сек.');
// 	if (step === 5) {
// 		clearInterval(count);
// 	}
// }, 1000);

//HW5

// const sum = document.getElementById('sum');
// const inp = document.getElementById('inp');
// const li = document.getElementsByClassName('li');

// sum.addEventListener('click', function () {
// 	let result = 0;
// 	let arr = [];
// 	for (const i of li) {
// 		if (Number(i.innerText)) {
// 			arr.push(i.innerText);
// 			result += +i.innerText;
// 			inp.value = `${arr.join('+')} = ${result}`;
// 		}
// 	}
// });
