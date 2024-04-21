console.log("Functions!!!!")
/**
 * Defining Functions
 */

// Three ways 
// sayHello()

// 1) Function Declaration
// Function declarations are hoisting to the top of their scope in runtime. 
function sayHello () {
  console.log('Hello!');
}

sayHello()

//Hoisting example
  // fnDeclaration();  // thank you function declarations :)
  // fnExpression();  // TypeError: fnExpression is not a function

  function fnDeclaration() {
    console.log("I'm coming from a function declaration.");
  }

  const fnExpression = function() {
    console.log("I'm coming from a function expression.");
  };

// 2) Function Expression DO NOT HOIST
const sayHola = function (name) {
  console.log("Hola " + name + " !")
}

sayHola("Isiah")

// 3) Arrow Functions DO NOT HOIST
// shorthand implicit return 
const add = (a, b) => a + b

// when you have curly brackets, you need to have a "return" keyword
const add2 = (a, b) => {
  return a + b;
}

// Calling Functions
const sum = add(25, 100) // returns 125
const sum2 = add2(100, 500)

console.log(sum2)

// Exercise 1

function areBothEven(n1, n2) {
  // Error Handling
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    console.log("Invalid Parameter Type")
    return
  }

  return !(n1 % 2) && !(n2 % 2)
}
// console.log is going to log to the console whatever "areBothEven" returns
console.log( areBothEven(8, 2) )

// Practice Activity 1
function computeArea (width, height) {
  let area = width * height
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

const area = computeArea(5, 10)
console.log(area)

// Practice Activity 2
const planetHasWater = function (planet) {
  //Error Handling 
  if (typeof planet !== "string"){
    return "Input must be a string"
  }

  if (planet.toUpperCase() === "EARTH" || planet.toUpperCase() === "MARS"){
    return true
  } else {
    return false
  }
}
console.log(planetHasWater("Earth"))


// If fewer arguments are passed than parameters defined, then the parameter variables without a matching argument would be set to undefined.

const addThree = (n1, n2, n3) => {
  return n1 + n2 + n3
}

// parameter "n3" will be undefined
console.log(addThree(9, 10)) // returns NaN because of not giving proper amount of arguments.

/**
 * Infinite Parameters
 */


// 1)arguments keyword
// NOT best practice
function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills
  };
}
const rodney = getDevObject("Rodney", "HTML", "CSS", "JS", "PHP", "React")

console.log(rodney)

// 2) Rest Parameters
// BEST practice
// give TRUE array

function getDeveloperObject(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills
  };
}

const dionte = getDeveloperObject("Dionte", "HTML", "CSS", "JS", "PHP", "React", "MongoDB")


console.log(dionte)

// Default Parameters
// OLD WAY 
// function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }

// console.log(0 || "this will return")

// const bike = {
//   brand: "Marin"
// }
// // setColor(bike, 'blue');  // sets color to blue

// setColor(bike);  // sets color to purple by default

// console.log(bike)

// NEW WAY, BEST PRACTICE
function setColor(bicycle, color = "purple") {
  bicycle.color = color 
}

const bike2 = {
  brand: "Marin"
}
// setColor(bike2, 'blue');  // sets color to blue

setColor(bike2, "red");  // sets color to purple by default

console.log(bike2)


/**
 * Functions as Arguments
 */

const colors = ["red", "green", "blue"];

const callbackFn = (color) => {
  console.log(color)
}

// colors.forEach(callbackFn)

// Anonymous function is given to the forEach method
colors.forEach((color) => {
  console.log(color )
})

// Gabriel's Q

const colorObj = {}

colors.forEach((color, i) => {
  colorObj[color] = color
})

console.log(colorObj)

// Example 

const names = ["Gabriel", "Hom", "Monika", "Shayla"]
const isCools = [true, true, true, true]
const jobs = ["Developer","Developer","Developer","Developer"]

const people = []

names.forEach((n, i) => {
  people.push(
    {
      name: n,
      isCool: isCools[i],
      occupation: jobs[i]
    }
  )
})

console.log(people)


/**
 * IIFE (iffy)
 */
(function () {
  const num = 1;
  console.log("hi")
})()

/**
 * Hoisting
 */

// var hoising
function hoist () {
    console.log(x)
    var x = 25
    console.log(x)
  }
  hoist()
 // var hoising
var x = "hello"
// Var is Type 2 Behavior
// function hoistVar () {
//   console.log(x)// outputs undefined, not a ReferenceError
//   var x = 25
//   console.log(x)
// }
// hoistVar()

function hoistLetOrConst () {
  console.log(x)
  let x = 25;
  console.log(x)
}

// hoistLetOrConst()

// Type 3 Behavior

// Example 1
// let x = 5;

// {
//   let y = 6
//   console.log(x)
// }

// console.log(y) // ReferenceError: y is not defined

// Example 2

// let x = 5;

// {
//   console.log(x)
//   let x = 6;
// }

/**
 * Hoisting Functions
 */
/** 
 * |THE CODE BELOW WILL NOT WORK IF COMMENT BACK IN|
 * 
  const val = { data: [...], type: ..., dateTime: ..., ... };
  const transformedData = populateValue(val);
  const response = sendRequest(data, {
    someValue: ...,
    otherConfigOption: ...,
  }, {
    moreData: ...
  });
  const success = processResponse(response);

  console.log(success);

  function populateValue(val) {
    /**
     * Do a bunch of logic in here.
    
  }

  function sendRequest(data, config, ...) {
    /**
     * More function logic.
    
  }

  function processResponse(res) {
    /**
     * Dozens of lines of code.
    
  }
*/

/**
 * Nested Functions
 */
function globalFn () {
  console.log("Mr. Worldwide")
}

function openNewAccount () {
  let acctNum = generateAcctNum()
  globalFn()// this works :)

  // this function is accessible from anywhere within it's SAME scope
  function generateAcctNum () {
    return Date.now()
  }
}

openNewAccount()
// generateAcctNum() // RefereenceError :( 


