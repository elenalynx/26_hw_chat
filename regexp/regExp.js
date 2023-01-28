// Проверить что слово love встречается в строке:

let regexp = /.*love.*/;

const phrase1 = 'I love JavaScript';
const phrase2 = 'I JavaScript';
alert(`${phrase1} - ${regexp.test(phrase1)}`); // true
alert(`${phrase2} - ${regexp.test(phrase2)}`); // false


// Проверить что строка заканчивается на ing:

let regexp2 = /.ing$/;

const phrase3 = 'Good morning';
const phrase4 = 'Good morning!';

alert(`${phrase3} - ${regexp2.test(phrase3)}`); // true
alert(`${phrase4} - ${regexp2.test(phrase4)}`); // false