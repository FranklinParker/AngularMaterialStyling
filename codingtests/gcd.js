"use strict";

/**
 * Find the greatest common divisor (GCD) of two positive integers.
 *
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 *
 * @return {number} The largest integer that evenly divides both numbers
 */
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {var temp = a; a = b; b = temp;}
  while (true) {
    console.log('a:' + a + ' b:' +b);

    if (b == 0) return a;
    a %= b;

    if (a == 0) return b;
    b %= a;
  }
};

console.log("gcd(60, 500) = 20:", gcd(60, 500));
console.log("gcd(3125, 100) = 25:", gcd(3125, 100));
console.log("gcd(32, 8) = 8:", gcd(32, 8));
console.log("gcd(4, 9) = 1:", gcd(4, 9));
console.log("gcd(3, 8) = 1:", gcd(3, 8));


