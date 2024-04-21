console.log("Arrays are cool!")

/**
 * Arrays
 */

//Creating an Array with the recommend best practice 
// Array Literal Syntax
const nums = [2, 4, 18]

// Movies
const movies = ["Scary Movie", "Interstellar", "Hereditary", "Tank Girl", "50 First Dates", "Toy Story"];

let firstMovie = movies[0]// Scary Movie
console.log(`First Index: ${firstMovie}`)

console.log(`Array Length: ${movies.length}`)

// Populating an Array by Index

movies[5] = "Batman"
movies[movies.length] = "The End"


movies[10] = "Shrek"

movies[8] // undefined

console.log(movies)

//Manipulating Array Length

movies.length = 50; // will expand the array and fill empty spots with undefined value.

console.log(movies)

movies.length = 4 // will shorten the array and permanently deletes the elements that are beyond the new length

console.log(movies) 

// Array Iteration
for (let i = 0; i < movies.length; i++){
  console.log(movies[i]) // movies[i] will return a string
}

console.log("=========================")

/**
 * Arrays Methods
 */

// concat()
let yourMovies = ["Nemo", "Hunger Games", "Cars"]
let myMovies = ["Prometheus", "Moonlight", "Black Panther"]

let ourMovies = myMovies.concat(yourMovies)

let yourMoviesManyTimes = yourMovies.concat(yourMovies,yourMovies, yourMovies)

console.log(yourMoviesManyTimes)


// Copying an array with concat

const yourMoviesCopy = yourMovies.concat()

console.log(yourMoviesCopy)


// - join()
let movieString = yourMovies.join(" , ")

console.log(movieString)
//split() STRING METHOD, NOT ARRAY METHOD

console.log(movieString.split(" , "))

const phoneNumber = "123-456-7890"

console.log(phoneNumber.split("-")) 


// Using Array Literal syntax (recommended best practice)
let num = [2, 4, 18];

// push () and unshift()
// adds to the end of an array, returns the new length of the array
movies.push ("Trading Places", "Forrest Gump")

console.log("movies array after push:", movies)
// adds to the front of an array, returns the new length of the array


movies.unshift("Star Wars")

console.log("movies array after unshift:", movies)

// pop() and shift ()
// removes the last element from the array and returns it

let lastMovie = movies.pop()
console.log("movie removed:", lastMovie, "array after pop:",movies)

//remove the first element of an array and return it
let startMovie = movies.shift()

console.log("movie removed:", startMovie, "array after shift:",
movies)

/**
 * The "longer" named methods add to an array (elongate).
unshift -> [...] <- push

The "shorter" named ones remove from the array (shorten).
shift <- [...] -> pop
 */

//splice( - Add/Remove Elements to/from  Anywhere in the Array
// order or arguments - array.splicestart, deleteCount, newItem1,
//newitem2...)
let coolMovies = ["Mean Girls", "Wonka", "Harlem", "My Cousin Vinny"]

let removedMovies = coolMovies.splice(3, 1, "Spaceballs", 
"Alien");
// This starts at element 3 (My Cousin Vinny), removes 1 element and adds Spaceballs and Alien
// removedMovies => ['Mean Girls', 'Wonka', 'Harlem']
// movies => ['Spaceballs', 'Alien']

console.log(coolMovies)
console.log("removed elements:", removedMovies)

removedMovies = coolMovies.splice(0, 3)

console.log(coolMovies)
console.log("removed elements:", removedMovies)
removedMovies = coolMovies.splice(1, 0, "The Sting")
// This starts at element 1 and does not remove anything, but adds The Sting.
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']
console.log(coolMovies)
console.log("removed elements: ", removedMovies)

// slice()
let sliceMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];


let middleMovies = sliceMovies.slice(1, 3)
console.log("middle movies: ", middleMovies)
console.log("original array: ", sliceMovies)


console.log(sliceMovies.slice(1))

// at()
let anothaMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// able to use negative indexes 
let myMovie = anothaMovies.at(-2) //Scarface

// Accessing the last element of an array
console.log(anothaMovies.at(-1))
// with bracket notation, instead of at() method
console.log(anothaMovies[anothaMovies.length - 1])


// reverse()
const reversed = anothaMovies.reverse()
console.log(reversed)


//Nested Arrays
let numArray1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(numArray1 [2] [0]) //7

let numArray2 = [
  [1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];
console.log(numArray2[2][1][1])

const twoD = numArray2.flat()
console.log(twoD)

const oneD = numArray2.flat(2)
console.log(oneD)

// sort()
let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
let movies3 = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo
console.log(numArray)
console.log(movies3)

//IndexOf() and lastIndexOf() - Search an Array


let movies4 = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', "Batman", 'The Count of Monte Cristo'];

let batmanIndex = movies4.indexOf('Batman');

let batmanLastIndex = movies4.lastIndexOf("Batman")

console.log(movies4.indexOf("The Sandlot"))

console.log(batmanIndex)
console.log (batmanLastIndex)


console.log(batmanIndex)
// check if value exist in array
if (movies4.indexOf("The Sandlot") === -1){
  console.log("Movie doesn't exist")
}

// includes()
console.log(movies4.includes("Alien"))

//forEach() - Iterate Over All of the Elements in an Array

movies4.forEach((movie) => {
  console.log(movie)
})

numArray.forEach((num) => {
  console.log(num)
})

const firstNames = ["Abigail", "Beverly", "Gabriel", "Annesha"]

firstNames.forEach((firstName, i) => {
  console.log(`${i}) ${firstName}`)
})

// for...of w/ Arrays
const coolerMovies = ["Men In Black", "Mask", "Transformers", "The Last Airbender","The Care Bears Movie", "Harry Potter"]

for (let movie of coolerMovies) {
  if (movie === "The Last Airbender") continue;
  console.log(movie)
}


// The Spread Operator
//copies an array into a new one

const coolerMoviesCopy = [...coolerMovies]

console.log(coolerMoviesCopy)

const moreMovies = ["Interstellar", ...coolerMovies, "Contact", firstNames[0]]

console.log(moreMovies)

// That's all folks!





