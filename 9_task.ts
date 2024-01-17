//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4]
// и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

function bubbleSort(arr: number[]): number[] {

    for (let i: number = 0; i < arr.length - 1; i++) {
        for (let j: number = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const originalArr: number[] = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4]
const originalStrArr: string[] = ['one', 'two', 'three']
const sortArr: (string | number)[] = bubbleSort([...originalArr])
const resultArr: (string | number)[] = sortArr.concat(originalStrArr);
console.log('Отсортированный и объединенный массив:', resultArr);
