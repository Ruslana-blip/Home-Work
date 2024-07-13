'use strict';
/* Затримки 
1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди. */
let setTimeoutTwoSecond = str => {
	setTimeout(() => {
		console.log(str);
	}, 2000);
};
setTimeoutTwoSecond('Hello World!');
