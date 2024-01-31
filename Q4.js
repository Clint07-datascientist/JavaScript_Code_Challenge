#!/usr/bin/node
function isPalindrome(num) {
    // Convert number to string to check for palindrome
    const numStr = num.toString();
    const len = numStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (numStr[i] !== numStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function largestPalindromeProduct() {
    let largestPalindrome = 0;
    // Iterate through all products of two 3-digit numbers
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            const product = i * j;
            // Check if the product is a palindrome and update largestPalindrome if necessary
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return large
// Call the function to find the largest palindrome made from the product of two 3-digit numbers
console.log("The largest palindrome made from the product of two 3-digit numbers is:", largestPalindromeProduct());
