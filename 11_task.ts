type KeyValueArr = [string, number][];

function objectToArr(obj: { [key: string]: number }): KeyValueArr {
    const result: KeyValueArr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(objectToArr({ a: 1, b: 2 }));
