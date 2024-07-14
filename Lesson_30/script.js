'use strict';
/* Затримки 
1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди. */
/* let setTimeoutTwoSecond = str => {
	setTimeout(() => {
		console.log(str);
	}, 2000);
};
setTimeoutTwoSecond('Hello World!'); */

// 2. Створіть таймер, який відлічує час у зворотному напрямку від 10 до 0. Виведіть кожне число затримкою у 1 секунду.
/* let timer = () => {
	let count = 10;
	let countDown = () => {
		console.log(count);
		count--;
		if (count >= 0) {
			setTimeout(countDown, 1000);
		}
	};
	countDown();
};
timer(); */

// 3. Створіть функцію, яка випадковим чином виводить одне з трьох повідомлень в консоль кожні 2 секунди.
/* let arr = ['hello', 'buy', 'good afternoon'];
let randomStr = array => {
	let randomElem = () => {
		let index = Math.floor(Math.random() * array.length);
		console.log(array[index]);
		setTimeout(randomElem, 2000);
	};
	randomElem();
};
randomStr(arr); */

// Завдвння зі статті
/* 1.Вивід кожної секунди
Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
Зробіть два варіанти рішення.
Використовуючи setInterval.
Використовуючи вкладений setTimeout */
/* let printNumbers = (from, to) => {
	let returnNumber = () => {
		console.log(from);
		from++;
		if (from <= to) {
			setTimeout(returnNumber, 1000);
		}
	};
	returnNumber();
};
printNumbers(2, 7); */
//
/* let printNumbers = (from, to) => {
	let intervalSet = setInterval(() => {
		console.log(from);
		if (from === to) {
			clearInterval(intervalSet);
		}
		from++;
	}, 1000);
};
printNumbers(2, 7); */

// 2.setTimeout запуститься лише після завершення поточного коду.
