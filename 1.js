
const keyboard = {
    layouts: {
        en: {
            topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "'"],
            bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
        },
        ru: {
            topRow: ['й','ц', 'у', 'к','е', 'н','г','ш','щ','з','х','ъ'],
            middleRow: ['ф', 'ы', 'в','п', 'р', 'о', 'л', 'д', 'ж', 'э'],
            bottomRow: ['я', 'ч', 'с','и', 'т', 'ь', 'б', 'ю', '.']
        },
        ua: {
            topRow: ['й', 'ц', 'у','к', 'е','н', 'г','ш', 'щ', 'з', 'х', 'ї'],
            middleRow: ['ф', 'і', 'в','п', 'р', 'о', 'л','д', 'ж', 'є'],
            bottomRow: ['я', 'ч', 'с','и', 'т', 'ь', 'б','ю','.']
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

/*Написать скрипт который на старте спрашивает пользователя 
какой язык он хочет использовать на тренажере. Это обычный prompt
 в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 
 или 2, если введено другое значение то вывести alert о том что 
 был выбран не доступный язык и повторить prompt до того момента 
 пока не будет введено подходящее значание языка или нажат cancel
 . При cancel прекратить выполнение скрипта. 
 Результат выбора языка пользователем записать в обьект keyboard 
 в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
 Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала 
 случайную букву из выбраного пользователем алфавита.*/

 document.querySelector('#btn1').onclick=function changeLanguage(){
 	let prom = prompt('Выберете язык: en-0, ru-1, ua-2');

 	switch(prom) {
 		case '0':keyboard.currentLang = 'en';
 		console.log('Выбран английский язык');
 		break;

 		case '1':keyboard.currentLang = 'ru';
 		console.log('Выбран русский язык');
 		break;

 		case '2':keyboard.currentLang = 'ua';
 		console.log('Выбран украниский язык');
 		break;

 		case null:
 		console.log('false');
 		break;

 		default:
 		alert('Выбран недоступный язык');
 		changeLanguage();
 	}
 }

document.querySelector('#btn2').onclick=function getRandCharInAlph() {
	if (keyboard.currentLang === 'en'){
		console.log(`Случайная буква из английского алфавита - ${keyboard['layouts']['en'][Math.floor(Math.random()*12)]} `);
	}

	if (keyboard.currentLang === 'ru'){
		console.log(`Случайная буква из русского алфавита - ${keyboard['layouts']['ru']['topRow'][Math.floor(Math.random()*12)]}`);
	}

	if (keyboard.currentLang === 'ua'){
		console.log(`Случайная буква из украинского алфавита - ${keyboard['layouts']['ua']['topRow'][Math.floor(Math.random()*12)]}`);
	}

}





//  document.querySelector('#btn2').onclick=function getRandCharInAlph() {
// 	return console.log(`Случайная буква из всего алфавита - ${alphabet[Math.floor(Math.random()*33)]}`);
// }
