// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке
var inputStr = 'DDADSADASDAAADS';
var inputArr = inputStr.split('');
var uniqueSet = new Set(inputArr);
var uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr.join(''));
