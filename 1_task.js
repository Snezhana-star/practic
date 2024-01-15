// let message: string = 'Hello World'
// console.log(message)
// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"
var inputStr = 'DDADSADASDAAADS';
var targetStr = 'DAS';
var uniqueSet = new Set();
// Преобразовать строку в массив символов и найти уникальные символы
var inputArr = inputStr.split('');
inputArr.forEach(function (item) {
    if (targetStr.includes(item)) {
        uniqueSet.add(item);
    }
});
var uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr.join(''));
