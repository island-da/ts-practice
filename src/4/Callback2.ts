function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
    const result: U[] = [];
    for (const i of array) {
        result.push(callback(i));
    }
    return result;
}

const data2 = [1, -3, -2, 8, 0, -1];
const result2 = map2(data2, (x) => x >= 0);
console.log(result2);