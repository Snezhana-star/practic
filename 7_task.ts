//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getSeason(month: number): any {
    const seasons = [
        { name: 'Зима', months: [12, 1, 2] },
        { name: 'Весна', months: [3, 4, 5] },
        { name: 'Лето', months: [6, 7, 8] },
        { name: 'Осень', months: [9, 10, 11] }
    ];
    return seasons.find(season => season.months.includes(month));
}
const month: { min: number, max: number } = {
    min: 1,
    max: 12,
}
let randomMonth: number = getRandom(month.min, month.max);
console.log(`Месяц под номером ${randomMonth} соответствует поре года: ${getSeason(randomMonth).name}`);


// В переменной year лежит какой то год например 2022. Определите високосный это год или нет.

function getLeapYear(year:number): boolean{
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
const year: { min: number, max: number } = {
    min: 1800,
    max: 2024,
}
let randomYear: number = getRandom(year.min, year.max);

if (getLeapYear(randomYear)) {
    console.log(`${randomYear} год - високосный.`);
} else {
    console.log(`${randomYear} год - не високосный.`);
}