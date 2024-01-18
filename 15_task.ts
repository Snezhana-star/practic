//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
    reverse(inputStr:string) :string{
        return inputStr.split('').reverse().join('')
    }
    ucFirst(inputStr:string):string{
        return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
    }
    ucWords(inputStr: string): string {
        return inputStr.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}
const myString = new MyString();
console.log(myString.reverse('Мама мыла кружку'));
console.log(myString.ucFirst('мне нужна она'));
console.log(myString.ucWords('но Мне ее не отдали'));