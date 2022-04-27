// Formula (3√3 s2)/2

const findAreaOfHexagon = (side) => {
  const answer = ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2);
  console.log(answer);
};

findAreaOfHexagon(6);
