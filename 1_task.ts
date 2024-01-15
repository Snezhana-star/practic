
// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

let inputStr: string = 'DDADSADASDAAADS';
let targetStr: string = 'DAS';
let uniqueSet: Set<string> = new Set();

// Преобразовать строку в массив символов и найти уникальные символы
let inputArr: string[] = inputStr.split('');
inputArr.forEach(item=>{
    if (targetStr.includes(item)){
        uniqueSet.add(item);
    }
});
let uniqueArr: string[] = Array.from(uniqueSet);
console.log(uniqueArr.join(''));
