//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

const Euler = {
  multiples: () => {
    let array = new Array(999);
    for (let i = 0; i < 1000; i++) {
      array[i] = i;
    }

    let sum = 0;

    array.forEach(num => {
      if (num % 3 === 0 || num % 5 === 0 || num % 15 === 0) {
        sum += num;
      }
    });

    return sum;
  }
};

module.exports = Euler;
