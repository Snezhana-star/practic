// Бинарный поиск
function binarySearch(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
const originalArr: number[] = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const filteredArr: number[] = originalArr.filter(num => num % 2 === 0 );
const sortedArr: number[] = filteredArr.sort((a: number, b: number) => a - b);
const targetNumber: number = 0;
const index: number = binarySearch(sortedArr, targetNumber);

console.log('Исходный массив:', originalArr);
console.log('Отфильтрованный (чётные числа) и отсортированный массив:', sortedArr);
console.log(`Искомое число ${targetNumber} найдено по индексу: ${index}`);
