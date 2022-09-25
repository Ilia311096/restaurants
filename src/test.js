const difficultCalculation = (() => {
  let memoMap = {};
  return (a) => {
    if (memoMap[a] !== undefined) {
      return memoMap[a];
    }

    memoMap[a] = a * a;
    console.log("calculate");
    return memoMap[a];
  };
})();

console.log(difficultCalculation(2));
console.log(difficultCalculation(2));
console.log(difficultCalculation(4));
console.log(difficultCalculation(2));
console.log(difficultCalculation(2));
console.log(difficultCalculation(4));
console.log(difficultCalculation(2));
console.log(difficultCalculation(2));
console.log(difficultCalculation(3));
console.log(difficultCalculation(2));
console.log(difficultCalculation(1));
console.log(difficultCalculation(2));
console.log(difficultCalculation(3));

const navigate = (event) => {
  event.preventDefault();

  const { target } = event;

  window.history.pushState({}, "", target.getAttribute("href"));
};
