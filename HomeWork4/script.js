// ----------------**************** hw1 *************----------------------------------
// const bindFunc = (fn , thisValue) =>{
//     return fn.bind(thisValue)
//   };

//   const testFunc = function(){
//       console.log('this: ' this );
//   };

//   const obj = {
//   name:'mert',
//   surname:'alagoz',
//   teacher:'vlad'
//   };

//   const result = bindFunc(testFunc , obj);

//   result();
// ----------------**************** hw2 *************----------------------------------
// const func = function () {
// 	let result = 0;
// 	for (key in this) {
// 		if (this[key] > 0) {
// 			result += this[key];
// 		}
// 	}
// 	return result;
// };

// const objectA = {
// 	a: 2,
// 	b: 7,
// 	c: -4,
// 	d: 1,
// 	e: 0,
// 	f: -59,
// 	g: 21,
// 	h: 3,
// };

// const result = func.call(objectA);
// console.log(result);

// ----------------**************** hw3 *************----------------------------------

// function getNewArray() {
// 	if (this.values) {
// 		return this.values.filter(
// 			(item) =>
// 				typeof item === "number" && item > 2 && item < 10 && item % 2 === 0
// 		);
// 	} else {
// 		return "Net";
// 	}
// }

// const valObject0 = {
// 	values: [1, "2", 4, 8, "8", 3, 10, null, false],
// };

// let result = getNewArray.call(valObject0);
// console.log(result);
