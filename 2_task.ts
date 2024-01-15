//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

let message: string ='hello alexandr!'
let resultArr: string[] = [];
let messageArr: string[] = message.split(' ');
messageArr.forEach(item => {
   let result: string = item[0].repeat(item.length);
    resultArr.push(result)
});
console.log(resultArr.join(' '))
