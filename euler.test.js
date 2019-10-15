const Euler = require("./euler");
test("Find the sum of all the multiples of 3 or 5 below 1000.", () => {
  expect(Euler.multiples()).toBe(233168);
});
