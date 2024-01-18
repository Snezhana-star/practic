//Реализуйте класс MyWorker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days


class MyWorker {
    name: string;
    surname: string;
    rate: number;
    days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(): number {
        return this.rate * this.days;
    }
}

const worker = new MyWorker ('Иван', 'Иванов', 2000, 30);
const worker2 = new MyWorker ('Петр', 'Петров', 1700, 30);

console.log(`Зарплата работника ${worker.name} ${worker.surname}: ${worker.getSalary()} рублей`);
console.log(`Зарплата работника ${worker2.name} ${worker2.surname}: ${worker2.getSalary()} рублей`);
