console.log("Ready to launch, Captain!")

/**
 * Loops and Iteration
 */
// Basic Structure for For Loops 
// for (initialization; condition; afterthought) {
// 	statements
// }
// The afterthought (last rule) should always work towards making the condition evaulate to false.

for (let i = 0; i < 10; i++){
  console.log(i)
}

console.log("===============================")

for (let i = 50; i >= 5; i--) {
  console.log(i)
}

console.log("===============================")
console.log("Exercises")
// Exercise 1

for (let i = 10; i >= 1; i--) {
  console.log(i)
}

console.log("===============================")
// Exercise 2
for (let i = 1; i <= 10; i+=2){
  console.log(i)
}
console.log("===============================")
// Exercise 3
for (let i = 2; i <= 10; i+=2) {
  console.log(i)
}
console.log("===============================")
// Exercise 4
for (let i = 6; i <= 60; i++){
  if (i % 3 === 0){
    console.log(i)
  }
}
// for (let i = 6; i <= 60; i+=3) {
//   console.log(i)
// }
console.log("===============================")
// Exercise 5
let str = "#"
for (let i = 0; i < 7; i++){
  console.log(str)
  str = str + "#"
  // str += "#"
}
console.log("===============================")
// Exercise 6
for (let i = 1; i <= 20; i++){
  if (i % 2 === 0) {
    console.log(`${i}: even`)
  }

  if (i % 2 !== 0){
    console.log(`${i}: odd`)
  }

  if (i === 1 || i === 2 || i === 3){
    continue
  }
  let isPrime = true

  for (let j = 2; j < i; j++){
    if (i % j === 0) {
      // if this is true, it is NOT a prime number
      isPrime = false
      break
    }
  }

  if (isPrime === true) {
    console.log(`${i} is a prime number`)
  }


}


//Nested Loops
console.log("===============================")
console.log("NESTED LOOP BELOW")
for (let i = 0; i < 5; i++){
  console.log(`outer loop: ${i}`)
  for (let j = 0; j < 5; j++){
    console.log(`inner loop: ${j}`)
  }
}

//COME BACK TO THIS!!

//Looping through Iterables
console.log("===============================")

const phrase = "It's me! Hello World! This loop stuff is cool."

for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i])
}
console.log("===============================")
//For ...In Loop
//accesses the properties of an iterable like a string
const phrase2 = "2024-RTT-13 is terrific!"

for (let index in phrase2) {
  console.log(phrase2[index])
}
console.log("===============================")
// For ...Of Loop
//accesses the values associated with those properties.
const phrase3 = "I'm hungry"

for (let char of phrase3){
  console.log(char)
}

//Continue Statement in For Loops
console.log("===============================")
const phrase4 = "Life is cool"

for (let i = 0; i < phrase4.length; i++){
  if (phrase4[i] === "e" || phrase4[i] === "l"){
    continue
  }

  console.log(phrase4[i])
}
console.log("===============================")
const str2 = "Hello World";

for (const i in str2) {
	if (str2[i] === "l") {
		continue;
	}

	console.log(str2[i]);
}
console.log("===============================")
for (const c of str2) {
	if (c === "l") {
		continue;
	}

	console.log(c);
}

/**
 * While Loops
 */

let x = 30;
// (1 !== 0)// true

while (x > 0) {
	x /= 2; // x = x / 2
	x--; // x = x - 1
  // console.log(x)
	if ((x % 1) !== 0) { 
		break;
	}
	
	console.log(x);
}

console.log("===============================")
//Example 1

let a = 1

while(a <= 10) {
  console.log(a)
  a++ // afterthought
}

console.log("===============================")
//Example 2

let b = 1

while (b <= 7) {
  if (b % 2 === 0) {
    console.log(`${b}: is even`)
  } else {
    console.log(`${b}: is odd`)
  }
  b++ // without this line of code, we have an infinite loop. b will never get incremented, always be equaling to 1. afterthought progresses the loop's condition to eventually be false. 
}console.log("===============================")
// Exercise 1

let c = 45;

while (c >= 0) {
  console.log(c)
  c--;
}

console.log("===============================")
// Exercise 2
let d = 0;

while (d < 35) {
  console.log(d)
  d+=3
}

console.log("===============================")
// Exercise 3
let e = 2;

// while (e < 100) {
//   console.log(e)
//   e += 5
//   // e = e + 5
// }
//3-a

  while (e < 100){
    if (e % 5 === 0) {
      console.log(e)
    }
    e++
  }

console.log("===============================")
// Exercise 4
let j = 0;

while (j <= 20) {
  if (j % 2 === 0) {
    const product = j * 3
    console.log(`${j} * 3 = ${product}`)
  }
  j++
}

console.log("===============================")
// Bonus Logical Question

// let change = 10 - 4
// let quarter = 0
// while (change >= .25) {
    // quarter++
    // console. log(quarter)
    // change -= .25
    // }

    // console. log(quarter)

    const price = 4;
    let bill = 10;
    let quarters = 0;

    while (price < bill) {
        bill -= .25
        quarters++

    }

    console.log('Quarters: ${quarters}')
    console.log('Dollar Amount: ${quarters / 4}')



    /**
     * Do...While Loops
     */

    // Do while loops runs the code block FIRST and the condition SECOND
    let k = 10;

    do {
        k--;
        console.log(k);
}       while (k > 50);

