const userAge = prompt('сколько вам лет?');
console.log(userAge);

if (userAge < 18) {
	const title = document.querySelector('h1');
	title.style.color = 'red';
	title.innerText = '!Доступ Заприщён!';

	const title2 = document.querySelector('h2');
	title2.style.color = 'black';
	title2.innerText =
		'Ксожалению Вам отказанно в доступе на сайт т.к Вам нет 18';
}

if (userAge >= 21) {
	const title3 = document.querySelector('h1');
	title3.style.color = 'Red';
	title3.innerText = 'ОГО Вам 21, для Вас супер приз';

	const title4 = document.querySelector('h2');
	title4.style.color = 'green';
	title4.innerText = '200.000 BYN';
}

if (userAge > 40) {
	const title5 = document.querySelector('h1');
	title5.style.color = 'Red';
	title5.innerText = 'Вам больше 40?';

	const title6 = document.querySelector('h2');
	title6.style.color = 'orange';
	title6.innerText = 'Увы этот сайт может вызвать инсульт покинте этот сайт';
}

const title7 = document.querySelector('h3');
title7.style.color = 'blue';
title7.innerText = 'Добро пожаловать в наше приложение!!';
