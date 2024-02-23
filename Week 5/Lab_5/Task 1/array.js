function reverseArray(arr) {
    const reversedArr = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  
    return reversedArr;
  }
  
  const myArray = [1, 2, 3];
  const reversedArray = reverseArray(myArray);
  console.log(reversedArray);
  