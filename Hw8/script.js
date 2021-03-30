// HW1

// const textElement = document.createElement('p');
// textElement.setAttribute('id', 'clickElem');
// textElement.innerText = 'click me!';

// const showImage = function () {
// 	const imgEl = document.createElement('img');
// 	imgEl.style = 'width: 100px; height: 100px';
// 	imgEl.setAttribute(
// 		'src',
// 		'https://img.freepik.com/free-vector/hello-greeting-typography-style-vector_53876-56876.jpg?size=338&ext=jpg'
// 	);
// 	imgEl.setAttribute('class', 'image');
// 	textElement.after(imgEl);

// 	const sizeImg = function () {
// 		imgEl.style = 'width: 200px; height: 200px';
// 		const deleteImg = function () {
// 			this.remove();
// 		};

// 		imgEl.addEventListener('click', deleteImg);
// 	};

// 	imgEl.addEventListener('mouseover', sizeImg);
// };

// textElement.addEventListener('click', showImage);

// document.body.append(textElement);

// HW2;

// const numbersArr = [1, 2, 3, 0, 4, 5, 6];
// const afterZero = (arr) => {
// 	return arr.reduce((acc, item) => (item !== 0 ? acc + item : (acc = 0)));
// };
// const task2Res = afterZero(numbersArr);
// console.log(task2Res);

// HW3

// const numbersArr = [1, 2, 3, 0, 4, 5, 6];

// let result = 0;
// const value2 = numbersArr.reduce((previousValue, item, i) => {
// 	if (previousValue > 10) {
// 		result = i;
// 	} else {
// 		return previousValue + item;
// 	}
// });

// console.log(result);

// HW4

// const btn = document.getElementById('btn');

// const getInpValue = function () {
// 	const inpVal = document.getElementById('task4');
// 	console.log(inpVal.value);
// 	inpVal.value = '';
// };

// btn.addEventListener('click', getInpValue);

// HW5

// const link = document.getElementsByTagName('a');
// const href = (event) => {
// 	event.target.innerText = `${event.target.innerText} (${event.target.href})`;
// };
// for (const iterator of link) {
// 	iterator.addEventListener('mouseover', href);
// }

// HW6

// const btn = document.getElementById('btn6');
// btn.addEventListener('click', function () {
// 	const text = document.getElementById('text');
// 	text.classList.toggle('textOff');
// 	text.classList.toggle('textOn');
// });

// HW7

// const inp = document.getElementById('inp');
// const btn = document.getElementById('btn7');
// const circle = document.getElementById('circle');

// btn.addEventListener('click', () => {
// 	if (inp.value <= 1000 && inp.value >= 0) {
// 		circle.style.marginLeft = `${inp.value}px`;
// 		circle.style.transition = '3s';
// 	} else if (inp.value > 1000 || inp.value < 0) {
// 		inp.value = 'Error';
// 	} else {
// 		inp.value = '';
// 	}
// });
