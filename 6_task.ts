function fibSequence(n: number): number[] {
    let fibNumbers: number[] = [0, 1];

    while (fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2] <= n) {
        const nextNum = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
        fibNumbers.push(nextNum);
    }
    return fibNumbers;
}
const n = 200;
const fibNumbers = fibSequence(n);
console.log('Числа Фибоначчи до', n, ':', fibNumbers.join(', '));