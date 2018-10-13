var myObj = {
    num: 2
}

var myFunc = function(x) {
    return this.num + x;
}

console.log(myFunc.call(myObj, 3));