//counter 2
//https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
// difficulty - Easy

var createCounter = function (init) {
  let presentVal = init;

  function increment() {
    presentVal++;
    return presentVal;
  }

  function decrement() {
    presentVal--;
    return presentVal;
  }

  function reset() {
    presentVal = init;
    return presentVal;
  }

  return { increment, decrement, reset };
};

const counter = createCounter(5);
let incrementedVal = counter.increment();
let resetVal = counter.reset();
let decrementedVal = counter.decrement();

document.write(incrementedVal, resetVal, decrementedVal);
