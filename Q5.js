#!/usr/bin/node
function smallestMultiple() {
    let number = 20; 
    while (true) {
        let div = true;
       
        for (let i = 2; i <= 20; i++) {
            if (number % i !== 0) {
                div = false;
                break; 
            }
        }
        if (div) {
            return number; 
        }
        number += 20;
    }
}


console.log("The smallest positive number divisible by all numbers from 1 to 20 is:", smallestMultiple());
