const findSmallestNum = (array) => {
  let a = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < a) {
      a = array[i];
    }
  }
  console.log(a);
  return a;
};

const findLargestNum = (array) => {
  let b = array[0];
  for (let j = 0; j < array.length; j++) {
    if (array[j] > b) {
      b = array[j];
    }
  }
  console.log(b);
  return b;
};

const returnDifference3 = (array) => {
  return findLargestNum(array) - findSmallestNum(array);
};
console.log(returnDifference3([100, 20, 32, 50]));
