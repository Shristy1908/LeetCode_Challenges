var argumentsLength = function (...args) {
  return args.length;
};

var lengthOfArg = argumentsLength(2, 3, 4);
document.write("Argument Length " + lengthOfArg);
