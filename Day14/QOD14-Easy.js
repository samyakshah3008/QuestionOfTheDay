const objSwap = (obj) => {
  let temp = {};
  for (let i = 0; i < Object.keys(obj).length; i++)
    temp[Object.values(obj)[i]] = Object.keys(obj)[i];
  return temp;
};

console.log(
  objSwap({
    name: "Samyak",
    age: "18",
  })
);
