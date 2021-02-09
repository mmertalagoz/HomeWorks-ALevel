// ***************---------H1----------**********************

// const citiesAndCountries = {
// 	Киев: "Украина",
// 	"Нью-Йорк": "США",
// 	Амстердам: "Нидерланды",
// 	Берлин: "Германия",
// 	Париж: "Франция",
// 	Лиссабон: "Португалия",
// 	Вена: "Австрия",
// };

// const getCity = (obj) => {
// 	for (const [key, value] of Object.entries(obj)) {
// 		console.log(`Столица города ${key} Это ${value}`);
// 	}
// };

// let result = getCity(citiesAndCountries);
// ------------------------------------------------

// ***************---------H2----------**********************
// const namesOfDays = {
// 	ru: [
// 		"Понедельник",
// 		"Вторник",
// 		"Среда",
// 		"Четверг",
// 		"Птяница",
// 		"Суббота",
// 		"Воскресенье",
// 	],
// 	en: [
// 		"Monday",
// 		"Tuesday",
// 		"Wednesday",
// 		"Thursday",
// 		"Friday",
// 		"Saturday",
// 		"Sunday",
// 	],
// };

// const getNameOfDay = function (lang, day) {
// 	return day <= 6 && day >= 0
// 		? lang in this
// 			? this[lang][day - 1]
// 			: "there is no this language"
// 		: "On Week has a 7 days";
// };

// const dayOut = getNameOfDay.call(namesOfDays, "ru", 6);
// console.log(dayOut);

// ***************---------H3----------**********************
// const user = {
// 	name: "Anton",
// };

// const user1 = {
// 	age: 1,
// };

// const setProto = function (currentObj, protoObj) {
// 	currentObj.__proto__ = protoObj;
// };

// setProto(user1, user);
// console.log(user1);

// ***************---------H4----------**********************
// const person = {
// 	setName(name) {
// 		this.name = name;
// 	},

// 	setAge(age) {
// 		this.ageValidation(age) ? (this.age = age) : (this.age = "valid err");
// 	},

// 	ageValidation(age) {
// 		return age >= 18;
// 	},

// 	getName() {
// 		console.log(this.name);
// 	},
// 	getAge() {
// 		console.log(this.age);
// 	},
// };

// const person1 = {
// 	__proto__: person,
// };

// person1.setName("Антон");
// person1.setAge(19);
// person1.getName();
// person1.getAge();
