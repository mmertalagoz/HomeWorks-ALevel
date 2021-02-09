///////////**********************HW1 *********************/////////////

// const items = ["1Vasya", "2Petya", "3Alexey", "4mert", "5valeriya", "6siddik"];

// const removeUser = (arr, i) => {
// 	let a = arr.slice(0, i - 1).concat(arr.slice(i, arr.length));
// 	console.log(a);
// };

// removeUser(items, 3);

///////////**********************HW2 *********************/////////////

// let divCnt = document.createElement("div");
// divCnt.className = "container";
// divCnt.style.border = "2px solid black";
// divCnt.style.height = "500px";
// divCnt.style.width = "500px";
// divCnt.style.position = "relative";

// document.body.append(divCnt);

// let div1 = document.createElement("div");
// div1.className = "bluecolor";
// divCnt.prepend(div1);
// div1.style.background = "rgb(126, 138, 235)";
// div1.style.height = "100px";
// div1.style.width = "100px";
// div1.style.position = "absolute";
// div1.style.top = "40%";
// div1.style.right = "40%";
// div1.style.zIndex = "5";

// let div2 = document.createElement("div");
// div2.className = "pinkcolor";
// divCnt.prepend(div2);
// div2.style.background = "rgb(255, 136, 136)";
// div2.style.height = "100px";
// div2.style.width = "100px";
// div2.style.position = "absolute";
// div2.style.top = "28%";
// div2.style.left = "30%";

// let div3 = document.createElement("div");
// div3.className = "greencolor";
// divCnt.prepend(div3);
// div3.style.background = "rgb(77, 239, 153)";
// div3.style.height = "100px";
// div3.style.width = "100px";
// div3.style.position = "absolute";
// div3.style.top = "52%";
// div3.style.left = "52%";

///////////********************** HW3 *********************/////////////

// let holderDiv = document.getElementsByClassName("holder"); // our container...
// for (let objHold of holderDiv) {
// 	objHold.style.display = "flex";
// 	objHold.style.border = "5px solid black";
// 	objHold.style.borderTopRightRadius = "45px";
// 	objHold.style.borderTopLeftRadius = "45px";
// 	objHold.style.overflow = "hidden";
// 	objHold.style.width = "98%";
// 	objHold.style.height = "450px";
// 	objHold.style.flexWrap = "wrap";
// }

// let div1 = document.createElement("div");
// div1.innerText = "1";
// div1.className = "item";
// div1.style.fontSize = "xxx-large";
// div1.style.textAlign = "center";
// div1.style.width = "50%";
// div1.style.background = "#FD644D";
// div1.style.alignItems = "center";
// let dv1 = document.getElementsByClassName("holder");
// for (let obj of dv1) {
// 	obj.append(div1);
// }

// let div2 = document.createElement("div");
// div2.innerText = "2";
// div2.className = "item";
// div2.style.fontSize = "xxx-large";
// div2.style.width = "50%";
// div2.style.textAlign = "center";
// div2.style.background = "#FDA429";
// let dv2 = document.getElementsByClassName("holder");
// for (let obj of dv2) {
// 	obj.append(div2);
// }

// let div3 = document.createElement("div");
// div3.innerText = "3";
// div3.className = "item";
// div3.style.textAlign = "center";
// div3.style.fontSize = "xxx-large";
// div3.style.width = "33.33%";
// div3.style.background = "#663797";
// let dv3 = document.getElementsByClassName("holder");
// for (let obj of dv3) {
// 	obj.append(div3);
// }

// let div4 = document.createElement("div");
// div4.innerText = "4";
// div4.className = "item";
// div4.style.fontSize = "xxx-large";
// div4.style.textAlign = "center";
// div4.style.width = "33.33%";
// div4.style.background = "#4983B2";
// let dv4 = document.getElementsByClassName("holder");
// for (let obj of dv4) {
// 	obj.append(div4);
// }

// let div5 = document.createElement("div");
// div5.innerText = "5";
// div5.className = "item";
// div5.style.fontSize = "xxx-large";
// div5.style.textAlign = "center";
// div5.style.width = "33.33%";
// div5.style.background = "#0E7F12";
// let dv5 = document.getElementsByClassName("holder");
// for (let obj of dv5) {
// 	obj.append(div5);
// }

///////////********************** HW4 *********************/////////////

// function sampleFunc () {
//     console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` );
// };

// function modificator (func) {
//     return func;
// };

// const testFunc = modificator(sampleFunc);

// testFunc('test', 'sample');

///////////********************** HW5 *********************/////////////

// const group = [
// 	{
// 		name: "Mert",
// 		surname: "Alagoz",
// 		age: 25,
// 		job: "Student",
// 		city: "Kharkov",
// 	},
// 	{
// 		name: "Kerem",
// 		surname: "Alagoz",
// 		age: 16,
// 		job: "Student",
// 		city: "Izmir",
// 	},
// 	{
// 		name: "Valeriya",
// 		surname: "Alagoz",
// 		age: 28,
// 		job: "Lawyer",
// 		city: "Kharkov",
// 	},
// 	{
// 		name: "Vlad",
// 		surname: "Teacherovich",
// 		age: 27,
// 		job: "Teacher",
// 		city: "Kharkov",
// 	},
// ];

// function getStudentsList(arrayOfStudents) {
// 	arrayOfStudents.forEach(function (item) {
// 		item.toString = function () {
// 			let str = "";
// 			for (key in this) {
// 				if (typeof this[key] !== "function") {
// 					str +=
// 						key.charAt(0).toUpperCase() +
// 						key.slice(1) +
// 						" - " +
// 						this[key] +
// 						", ";
// 				}
// 			}

// 			return str.substring(0, str.length - 2);
// 		};
// 		console.log(String(item));
// 	});
// }

// getStudentsList(group);

// ---------------------------------------- first Method

// function getStudentsList(arrFamily) {
// 	arrFamily.forEach((item) => {
// 		item.toString = function () {
// 			return `Name - ${this.name}, Surname - ${this.surname}, Age - ${this.age}, Job - ${this.job}, City - ${this.city}`;
// 		};
// 		console.log(item.toString());
// 	});
// }

// getStudentsList(group);

// ---------------------------------------- second Method
// function getStudentsList(arrFamily) {
// 	for (let keys of arrFamily) {
// 		let a = `(Name - ${keys.name}) , (Surname - ${keys.surname}) , (Age - ${keys.age}) ,(Job- ${keys.job}) , (City - ${keys.city})`;
// 		console.log(a);
// 	}
// }
// getStudentsList(group);

// ---------------------------------- third Method

// let getStudentsList = {
// 	toString() {
// 		let groupString = "";
// 		for (let item of group) {
// 			groupString += `Name - ${item.name}, LastName - ${item.surname}, Age - ${item.age}, Job - ${item.job}, City - ${item.city}\n`;
// 		}
// 		return groupString;
// 	},
// };
// console.log(String(getStudentsList));

//----------------------------------- forth Method

// let getStudentsList = {
// 	toString() {
// 		let groupString = "";
// 		for (let item of group) {
// 			groupString += `Name - ${item.name}, LastName - ${item.surname}, Age - ${item.age}, Job - ${item.job}, City - ${item.city}\n`;
// 		}
// 		return groupString;
// 	},
// };

// function studentsList(arg) {
// 	console.log(String(arg));
// }
// studentsList(getStudentsList);
