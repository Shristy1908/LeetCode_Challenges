let n = 10;

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

var callValue = createCounter(n);
document.write([callValue(), callValue(), callValue()]);
