// ********************------------HW-1 -------------------------********************

// takeNumber = +prompt("Enter a Number");
// function calculate(par) {
// 	if (Number(par)) {
// 		let totaly = 0;
// 		for (let i = 1; i <= par; i++) {
// 			let one = i * i;
// 			totaly += one;
// 		}
// 		console.log(totaly);
// 	} else {
// 		alert("Enter a Number");
// 	}
// }
// calculate(takeNumber);

// ********************------------HW-2 -------------------------********************

// let massDefault = [3, 5, 12, 9, 23, 93, 17];
// let = massDefaultFiltered = massDefault.filter((item) => item > 2 && item < 20);
// console.log(massDefaultFiltered);

// ********************------------HW-3 -------------------------********************
// let mass = [
// 	[1, 6, 3, "6"],
// 	[10, 15, 13, "10"],
// ];
// let massToConcat = mass.flat(1);
// let concatToFilter = massToConcat.filter(
// 	(el) => typeof el === "number" && el % 2 === 0
// );
// let sum = 0;
// let eachPlus = concatToFilter.map((item) => (sum += item));
// console.log(sum);

// or

// let mass = [
// 	[1, 6, 3, "6"],
// 	[10, 15, 13, "10"],
// ];
// let massToConcat = mass.reduce((acc, val) => acc.concat(val), []);
// let concatToFilter = massToConcat.filter(
// 	(el) => typeof el === "number" && el % 2 === 0
// );
// let sum = 0;
// let eachPlus = concatToFilter.map((item) => (sum += item));
// console.log(sum);

// or

// let mass = [
// 	[1, 6, 3, "6"],
// 	[10, 15, 13, "10"],
// ];
// let massToConcat = mass.concat(...mass, []);
// let concatToFilter = massToConcat.filter(
// 	(el) => typeof el === "number" && el % 2 === 0
// );
// let sum = 0;
// let eachPlus = concatToFilter.map((item) => (sum += item));
// console.log(sum);

// ********************------------HW-4 -------------------------************

// let element = {};
// function objeElemanEkle() {
// 	let takeKey = document.getElementById("takeKey").value;
// 	let takeValue = document.getElementById("takeValue").value;
// 	if (takeKey in element) {
// 		alert("Element has a this key please enter a other keys");
// 	} else if (takeKey === "") {
// 		alert("Key can not be empty Please enter a Key");
// 	} else {
// 		element[takeKey] = takeValue;
// 	}
// 	console.log(element);
// }
