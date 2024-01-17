//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
// добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его

type twoArr = number[][];
type oneArr = number[];

const twoArr: twoArr = [[1, 4, 5], [1, 3, 4], [2, 6]];
const oneArr: oneArr = twoArr
    .flatMap(row =>row)
    .sort((a:number, b:number)=>a-b);

console.log('Отсортированный массив:', oneArr);