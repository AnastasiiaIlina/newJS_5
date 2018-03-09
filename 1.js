
let enAlphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let ruAlphabet = 'йцукенгшщзхъфывапролджэячсмитьбю.';
let uaAlphabet = 'йцукенгшщзхїфівапролджєячсмитьбю.';

const keyboard = {
    layouts: {
        en: {
            topRow: [enAlphabet.slice(0,12).split('')],
            middleRow: [enAlphabet.slice(12,23).split('')],
            bottomRow: [enAlphabet.slice(23,33).split('')]
        },
        ru: {
            topRow: [ruAlphabet.slice(0,12).split('')],
            middleRow: [ruAlphabet.slice(12,23).split('')],
            bottomRow: [ruAlphabet.slice(23,33).split('')]
        },
        ua: {
            topRow: [uaAlphabet.slice(0,12).split('')],
            middleRow: [uaAlphabet.slice(12,23).split('')],
            bottomRow: [uaAlphabet.slice(23,33).split('')]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

 document.querySelector('#btn1').onclick=function changeLanguage(){
 	let prom = prompt('Выберете язык: en-0, ru-1, ua-2');

 	switch(prom) {
 		case '0':keyboard.currentLang = 'en';
 		console.log('Вы выбрали английский язык');
 		break;

 		case '1':keyboard.currentLang = 'ru';
 		console.log('Вы выбрали русский язык');
 		break;

 		case '2':keyboard.currentLang = 'ua';
 		console.log('Вы выбрали украинский язык');
 		break;

 		case null:
 		console.log('Пользователь закрыл окно');
 		break;

 		default:
 		alert('Поле неккоректно заполнено');
 		changeLanguage();
 	}
 }

document.querySelector('#btn2').onclick=function getRandCharInAlph() {
	if (keyboard.currentLang === 'ru'){
		console.log(`Случайная буква из русского алфавита - ${ruAlphabet[Math.floor(Math.random()*33)]}`);
	}

	if (keyboard.currentLang === 'en'){
		console.log(`Случайная буква из английского алфавита - ${enAlphabet[Math.floor(Math.random()*33)]}`);
	}

	if (keyboard.currentLang === 'ua'){
		console.log(`Случайная буква из украинского алфавита - ${uaAlphabet[Math.floor(Math.random()*33)]}`);
	}
}

