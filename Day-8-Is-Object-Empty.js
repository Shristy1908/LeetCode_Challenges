let obj = {
//   name: "Shristy",
//   age: 23,
};

var isEmpty = function (obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  } else {
    return false;
  }
};
let res = isEmpty(obj);
document.write(res);
