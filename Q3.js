#!/usr/bin/node
function largest_prime_factor(n){
  let largest_prime = -1;
  let i = 2;
  while ((i*i) <= n){
    while ((n % i ) === 0){
      largest_prime = i;
      n = n / i;
    }
    i = i + 1;
    if (n > 1){
      largest_prime = n;
    }
  }
  return largest_prime
}

let n = 600851475143
console.log(largest_prime_factor(n))
