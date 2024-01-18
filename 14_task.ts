//Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.


class MyWorker {
    private name: string;
    private surname: string;
    private _rate: number;
    private _days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name;
        this.surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }
//новые геторы и сетторы для rate и day, тк их использование приведёт сразу к свойству, а не к вывову методов
    get rate(): number {
        return this._rate;
    }

    set rate(newRate: number) {
        if (newRate >= 0) {
            this._rate = newRate;
        } else {
            console.error(`Не валидное значение 'rate'`);
        }
    }
    get days(): number {
        return this._days;
    }

    set days(newDays: number) {
        if (newDays >= 0) {
            this._days = newDays;
        } else {
            console.error(`Не валидное значение 'day'`);
        }
    }

    getSalary(): number {
        return this._rate * this._days;
    }
}

const worker = new MyWorker ('Иван', 'Иванов', 2000, 30);
console.log(`Зарплата работника ${worker.getName()} ${worker.getSurname()}: ${worker.getSalary()} рублей`);
worker.rate = -20
worker.days = 5
console.log(`Зарплата работника ${worker.getName()} ${worker.getSurname()}: ${worker.getSalary()} рублей`);
