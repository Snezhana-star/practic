//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

function Palindrome(word: string): string {
    return word + word.split('').reverse().join('').substring(1);
}
let inputArr: string[] = ['дим', 'манек', 'рота'];
let resultArr: string[] = [];
inputArr.forEach(item=>{
    resultArr.push(Palindrome(item));
})
console.log(resultArr)
