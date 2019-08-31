// Fizzbuzz
const fizzbuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    //     console.log(i)
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(2, 15);
