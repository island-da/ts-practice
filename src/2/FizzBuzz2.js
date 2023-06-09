"use strict";
const getFizzBuzzString = (i) => {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        return 'Fizz';
    }
    else if (i % 5 === 0) {
        return 'Buzz';
    }
    else {
        return String(i);
    }
};
const sequence = (start, end) => {
    if (start > end)
        throw new Error('Parameter is <');
    const sequence = [];
    for (let i = start; i <= end; i++) {
        sequence.push(i);
    }
    return sequence;
};
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
