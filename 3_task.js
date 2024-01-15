//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"
function Palindrome(word) {
    return word + word.split('').reverse().join('').substring(1);
}
var inputArr = ['дим', 'манек', 'рота'];
var resultArr = [];
inputArr.forEach(function (item) {
    resultArr.push(Palindrome(item));
});
console.log(resultArr);
