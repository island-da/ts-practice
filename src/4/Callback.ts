function map(array: number[], callback: (value: number) => number): number[] {
    const result: number[] = [];
    for (const i of array) {
        result.push(callback(i));
    }
    return result;
}

const data1 = [1, 1, 2, 3, 5, 8, 13];
const result1 = map(data1, (x) => x * 10);
console.log(result1);