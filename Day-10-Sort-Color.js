let colors = [0, 1, 1, 2, 0, 2, 0, 2];

const sortClr = () => {
  let zero = 0;
  let ones = 0;
  let two = 0;
  for (var i = 0; i < colors.length; i++) {
    if (colors[i] === 0) {
      zero++;
    } else if (colors[i] === 1) {
      ones++;
    } else {
      two++;
    }
  }

  for (var i = 0; i < colors.length; i++) {
    if (i < zero) {
      colors[i] = 0;
    } else i;
  }
};

console.log(sortClr(colors));
