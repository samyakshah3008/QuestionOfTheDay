const maxFrequency = (arr) => {
  let freqObj = {};
  arr.forEach((i) => {
    if (freqObj[i]) {
      freqObj[i] += 1;
    } else {
      freqObj[i] = 1;
    }
  });
  console.log(freqObj);
  let maxVal = Number.MIN_VALUE;
  let maxKey = Number.MIN_VALUE;
  for (let [key, val] of Object.entries(freqObj)) {
    if (maxVal < val) {
      maxVal = val;
      maxKey = key;
    } else if (maxVal === val && maxKey < key) {
      maxKey = key;
    }
  }
  return maxKey;
};

console.log(maxFrequency([101, 84, 101]));
