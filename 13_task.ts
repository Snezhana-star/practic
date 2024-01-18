//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.


class MyWorker {
    private name: string;
    private surname: string;
    private rate: number;
    private days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }

    getRate(): number {
        return this.rate;
    }

    getDays(): number {
        return this.days;
    }

    getSalary(): number {
        return this.rate * this.days;
    }
}

const worker = new MyWorker ('Иван', 'Иванов', 2000, 30);
const worker2 = new MyWorker ('Петр', 'Петров', 1700, 30);

console.log(`Зарплата работника ${worker.getName()} ${worker.getSurname()}: ${worker.getSalary()} рублей`);
console.log(`Зарплата работника ${worker2.getName()} ${worker2.getSurname()}: ${worker2.getSalary()} рублей`);
