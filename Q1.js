#!/usr/bin/node
function sumMultiples(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
const limit = 1000;
const result = sumMultiples(limit);
console.log("The sum of multiples of 3 or 5 below", limit, "is:", result);

