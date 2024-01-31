#!/usr/bin/node
function sumEvenFibonacci(limit) {
    let sum = 0;
    let fib1 = 1;
    let fib2 = 2;
     nextFib = fib1+fib2;

    while (fib2 <= limit) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }

        fib1 = fib2;
        fib2 = nextFib;
        nextFib = fib1+fib2
        
    }

    return sum;
}

const limit = 4000000;
const result = sumEvenFibonacci(limit);
console.log("The sum of even Fibonacci numbers below", limit, "is:", result);

