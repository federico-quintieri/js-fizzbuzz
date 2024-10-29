const firstNum = 3,
  secondNum = 5;

const firstMessage = "Fizz",
  secondMessage = "Buzz";

let varStampa;

for (let i = 1; i <= 100; i++) {
  if (i % firstNum === 0 && i % secondNum === 0) {
    varStampa = `${i}. La ${i} è multipla di ${firstNum} e di ${secondNum} quindi: ${
      firstMessage + secondMessage
    }`;
  } else if (i % firstNum === 0) {
    varStampa = `${i}. La ${i} è multipla di ${firstNum} quindi: ${firstMessage}`;
  } else if (i % secondNum === 0) {
    varStampa = `${i}. La ${i} è multipla di ${secondNum} quindi: ${secondMessage}`;
  } else
    varStampa = `${i}. La i non è multipla nè di ${firstNum} nè di ${secondNum} quindi: ${i}`;

  console.log(varStampa);
}
