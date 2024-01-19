//создать класс calculation , в котором будет одна переменная calculationLine.
//методы: setterCalculationLine который будет к переменной приравнивать значение которое передается,
//setLastSymbolCalculationLine который будет в конец строки прибавлять символ, gettercalCulationLine который будет выводить переменную,
//lastSymbol получение последнего символа, deleteLastSymbol удаление последнего символа из строки
type calculationType = string

class Calculation {
    constructor(
        private calculationLine: calculationType = ''
    ) {}
    setterCalculationLine(newLine: calculationType): void {
        this.calculationLine = newLine
    }
    setLastSymbolCalculationLine(symbol: calculationType): void {
        this.calculationLine += symbol;
    }
    gettercalCulationLine(): calculationType {
        return this.calculationLine;
    }
    lastSymbol(): calculationType {
        return this.calculationLine.charAt(this.calculationLine.length - 1);
    }
    deleteLastSymbol(): calculationType {
        return this.calculationLine = this.calculationLine.slice(0, -1);
    }
}

const line = new Calculation();
console.log(line.gettercalCulationLine())
line.setterCalculationLine('100 + 36 + 10')
console.log(line.gettercalCulationLine()) //100 + 36 + 10
line.setLastSymbolCalculationLine(' / 100')
console.log(line.gettercalCulationLine()) //100 + 36 + 10 / 100
console.log(line.lastSymbol()) // 0
console.log(line.deleteLastSymbol()) //100 + 36 + 10 / 10







