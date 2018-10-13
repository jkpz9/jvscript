var myObj = {
  num1: 2,
  num2: 3
}

var myFunc = function () {
  return this.num1 + this.num2
}

var add = myFunc.bind(myObj)

console.log(add())
