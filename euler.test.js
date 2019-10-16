const Euler = require("./euler");
test("Find the sum of all the multiples of 3 or 5 below 1000.", () => {
  expect(Euler.multiples()).toBe(233168);
});
test("By considering the terms in the Fibonacci sequence whose values do not exceed four million find the sum of the even-valued terms.", () => {
  expect(Euler.fibonacci()).toBe(4613732);
});

test("highest prime factor", () => {
  expect(Euler.primeFactor(13195)).toBe(29);
});
test("largest palindrome made from the product of two 3-digit numbers", () => {
  expect(Euler.largestPalindrome()).toBe(906609);
});
