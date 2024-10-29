let varStampa;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    varStampa = `La ${i} è multipla di 3 e di 5 quindi: 'FizzBuzz'`;
  } else if (i % 3 === 0) {
    varStampa = `La ${i} è multipla di 3 quindi: 'Fizz'`;
  } else if (i % 5 === 0) {
    varStampa = `La ${i} è multipla di 5 quindi: 'Buzz'`;
  } else varStampa = `La i non è multipla nè di 3 nè di 5 quindi: ${i}`;

  console.log(varStampa);
}
