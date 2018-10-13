var myObj = {
  num: 2
}

var myFunc = function (y, z) {
  return this.num + y + z
}

console.log(myFunc.apply(myObj, [3, 5]))
