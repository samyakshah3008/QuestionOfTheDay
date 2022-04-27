// const array = ["apple", "ball", "cricket"];

// const returnArrayLength = (a) => {
//   console.log(a.length);
// };

// returnArrayLength(array);

// method 2

const getLength1 = (array) => {
  let len = 0;
  for (let i = 0; array[i] !== undefined; i++) {
    len++;
  }
  return len;
};
console.log(getLength1([1, 2, 3, 4, 5, 6]));

const getLength2 = (array1) => {
  let len = 0;
  for (let i = 0; array1[i] !== undefined; i++) {
    len++;
  }
  return len;
};
console.log(getLength2([1, 2, 3]));

const getLength3 = (array2) => {
  let len = 0;
  for (let i = 0; array2[i] !== undefined; i++) {
    len++;
  }
  return len;
  //   console.log(len, "final");
};

console.log(getLength3([1, 2]));
