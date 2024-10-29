let varStampa;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    varStampa = "FizzBuzz";
  } else if (i % 3 === 0) {
    varStampa = "Fizz";
  } else if (i % 5 === 0) {
    varStampa = "Buzz";
  } else varStampa = i;

  console.log(varStampa);
}
