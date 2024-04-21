


// Part 1 FizzBuzz
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
  
  // Part 2 Prime Time 
  let n = 89
  let foundPrime = false
  let i = n + 1
  let nextPrime;
  
  outerLoop: while (!foundPrime) {
  
    for (let j = 2; j < i; j++){
      if (i % j === 0){
        // this is not a prime number, because it was divisible
        i++
        continue outerLoop
      }
    }
    // If I get to this line of the while loop, you have found a prime number
  
    nextPrime = i 
    foundPrime = true 
  }
  
  // console.log(nextPrime)
  
  // Part 3 Feeling Loopy
  
  
  let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
  // let csvStr = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
  
  
  let cell1 = "";
  let cell2 = "";
  let cell3 = "";
  let cell4 = "";
  let cell = 1
  // let row = 1
  
  for (let i = 0; i < csvStr.length; i++) {
  
    if (csvStr[i] === ','){
      cell++
      continue
    }
  
    if (csvStr[i] === "\n") {
      cell = 1
      cell1 = "";
      cell2 = "";
      cell3 = "";
      cell4 = "";
      continue
    }
  
    switch (cell) {
      case 1:
        cell1 += csvStr[i]
      break
      case 2:
        cell2 += csvStr[i]
      break
      case 3:
        cell3 += csvStr[i]
      break
      case 4:
        cell4 += csvStr[i]
      break
    }
  
    if (cell === 4 && csvStr[i + 1] === '\n' || i + 1 === csvStr.length) {
      console.log(cell1, cell2, cell3, cell4);
    }
  }
    









// Part 2 Prime Time
let n = 73
let foundPrime = false
let i = n + 1

while (!foundPrime) {

    for (let j = 2; j < i; j++){
        if (i % j === 0){
            // this is not a prime number, because it was divisible
            i++
            continue outerLoop
        }
    }
    // If i get to this line of the while loop, you have found a prime number

    nextPrime =1
    foundPrime = true

}

 // console.log(nextPrime)

//j is controlling the outer loop and i is controlling the inter loop

let csv$tr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell = 1

for (let i = 0; i < csv$tr.length; i++) {

    if (csv$tr[i] === ','){
        cell++
        continue
    }

    if (csv$tr[i] === "\n") {
        cell = 1
        cell1 = ""
        cell2 = ""
    }
}
}










