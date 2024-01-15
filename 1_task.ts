// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке

const inputStr = 'DDADSADASDAAADS';
const inputArr = inputStr.split('');
let uniqueSet: Set<string> = new Set(inputArr);
let uniqueArr: string[] = Array.from(uniqueSet);
console.log(uniqueArr.join(''));
