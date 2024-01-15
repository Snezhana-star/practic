//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'
var message = 'hello alexandr!';
var resultArr = [];
var messageArr = message.split(' ');
messageArr.forEach(function (item) {
    var result = item[0].repeat(item.length);
    resultArr.push(result);
});
console.log(resultArr.join(' '));
