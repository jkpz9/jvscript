class person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  hello () {
    return 'Hello' + this.name
  }
}

var jade = new person('jade', 26)

console.log(jade)
