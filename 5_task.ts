function isPrime(num: number): boolean {
    if (num < 2) {
        return false;
    }
    for (let i: number = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function PrimesArr(n: number): void {
    for (let i: number = 0; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
const n = 100;
PrimesArr(n);