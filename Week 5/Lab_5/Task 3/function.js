function applyFunction(numbers, func) {
    return numbers.map(func);
  }
  
  const numbers = [1, 2, 3];
  const doubleFunction = (x) => x * 2;
  const doubledNumbers = applyFunction(numbers, doubleFunction);
  console.log(doubledNumbers);
  