// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2
}

function sayHello(firstName) {
  if(firstName === "Will") {
  return `No more testing ${firstName}!`
} else {
  return `Hi there ${firstName}!`
}
}

function buildCar (color, type) {
  if (color === undefined && type === undefined) {
    return {}
  } else {
    return {color: color,
            type: type}
  }
}


module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
