cconsole.log("Objects!")

// Object Syntax

const vehicle = {
  color: "blue",
  hp: 4000,
  year: 1989,
  "brand-name": "Alfa Romeo",
  "active registration": true
}

// Accesssing object keys
console.log(vehicle.hp)

let key = "color"

console.log(vehicle[key])

console.log(vehicle["brand-name"])

// Unique Keys

const borough =  {
  name: "Brooklyn",
  name: "The Bronx"
}

console.log(borough)// will only have 1 name property taking the value of the last value listed


//Changing Object Properties and Values
vehicle.color = "red" // changing an existing prop
vehicle.make = "stelvio" // adding a new key:value pair
delete vehicle["active registration"] // remove an existing prop

vehicle.doors = 2

vehicle.year = 2025

console.log(vehicle)

/**
 * Iterating through Objects
 */

const wizard = {
  name: "Gandalf the Grey",
  weapon: "staff",
  hair: "grey",
  power: 9001
}

for (let key in wizard) {
  console.log(`${key}: ${wizard[key]}`)
}


/**
 * Nested Objects
 */

const vehicle2 = {
  color: "blue",
  year: 1989,
  make: "Audi",
  engine: {
    cylinders: 6,
    hp: 4000,
    size: "3.2L"
  }
}

console.log(vehicle2.engine.size)

/**
 * Reference Types
 */

let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log(myMovies === yourMovies); // false

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle3 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1 === vehicle3); // false

const car = vehicle1
console.log(car === vehicle1)

console.log(1 === 1)
console.log({} === {})
console.log([] === [])


/**
 * Nested Objects
 */
const vehicle2  = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: "3.2"
	}
}
// Pass by Value
// Primitive types
//console.log(1 === 1) // true
//console.log("hello" === "hello") // true
//console.log(vehicle2.engine.size) //true


// Pass by Reference
//console.log({} === {}) // false
//console.log([] === []) // false



