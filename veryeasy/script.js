function min(firstNum, secondNum) {
  if (firstNum > secondNum) {
    return secondNum;
  } else {
    return firstNum;
  }
}

const minimalNumber = min(2, 3);

console.log(minimalNumber);
