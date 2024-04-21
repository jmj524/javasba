//Intro to Javascript!!! Woot Woot!

/**
 * 
 * This is my multi-line/block comment
 * 
 */

console.log("JS is connected")

// Data Types

//Primitive Types
///////////////////////
// Numbers
100
524
5.8

//Strings 
"James is the Man"
"2024-RTT- equal the best"
"backtick are what these are called"

//Booleans
true;
false;

//Falsey types
null;
undefined;
////////////////////

//Objects & Arrays
{ } //key value pairs
[];// a list of values

//Variable Declaration
//var 
var myVariable = "Some Value"

//let
let mySecond = true;

// const
const PI = 3.14159263589793;


// USE camelCase!!!!  reference lines 41 & 44
//Other Cases
//snake_case
// kebob-case
//PascalCase

//Scope
let x = 10;
let y = 6;
y = 6.5;
console.log(y);

{
    //totally different scope
    let x = 2;
    console.log(x); //2


}
console.log(x);
//////////////////////
//////////////////////
//conts
const foo = 'bar';
// foo = 7; not allowed!!!
{
    // const foo = "whatever";
    console.log(foo); // bar
}
console.log(foo); //bar
// Why we don't use var

var counter = 1;
{
    var counter = 2;
    console.log(counter);
    2;
}

console.log(counter); // this will be 2
{
    leta = 135
}
{
    var a = 77;

}
{
    const a = 20;

}
console.log(a); //77, because var doesnt abide by block scoped

/////////////////////
let myVar = 'something';

console.log(typeof myVar);
////////////////////////

//Arithmetic Operators
// +
console.log(3 + 4); // 7
// -
console.log(3 - 2); // 1
// *
console.log(6 * 4); // 24
// /
console.log(16 / 8); // 2
// modulo, returns the remainder of the division
console.log(10 % 3); //1

// Arithmetic shortcuts
let newNumber = 9;
newNumber = newNumber + 1; //10
//newNumber += 1 // this is shorthand for the line above

newNumber *= 5; //50
newNumber++; // 51 // single increment
newNumber--; // 50 // single decrement
console.log(newNumber);

//// the two ways to use ++ and --

let currenNumber = newNumber++; // returns old value (50) and then after that it increments the newNumber variable.  The ++ after the variable will NOT return the incremented value

newNumber = 50;

currenNumber = ++newNumber; // this WILL return the incremented value


//>
console.log(currentNumber, newNumber);

// Comparison Operators
//>
console.log(3 > 4);
// <
console.log(5 < 10);
// >=
console.log(78 >= 78);
// <=
console.log(56 <= 44);
// == "loose equals"
console.log(10 != 20);

const ageRequirement = 18;
let userAge = 14;

console.log(userAge < ageRequirement);

// The loose equals behavior
console.log(3 == 3);
console.log(3 == '3');
console.log('3' == '3');
console.log(0 == false);

// === strictly equals,
console.log(3 === '3');
console.log(3 === 3);

// truthy and falsy
//falsy
0
""
false
null
undefined
NaN
// all other values are truthy

//Logical Operators
let thisLogic1 = 3 > 2 && 6 == 6 && 'this' == 'this';  // thisLogic is true
let thisLogic2 = 3 > 2 && 6 == 7;  // thisLogic is true
// ||
let thisLogic3 = 3 > 2 || 6 == 6; // thisLogic is true
let thisLogic4 = 3 > 2 || 6 == 7; // thisLogic is true

//!
let thisLogic5 = !(3 > 2 && 6 == 6); // thisLogic is false
let thisLogic6 = !(3 > 2 || 6 == 7); // thisLogic is false

//String Concatenation
console.log('Hello' + 'World');
console.log('This is' + ' a String');
console.log('The number is' + 5);
// console.log ('hello' - 'world'); // doesn't work, gives NaN
let firstName = 'James';
console.log('My name is' + firstName);

// String Access
let fullName = 'Inigo Montoya';

console.log(fullName[8]);
console.log('2024-rtt-13'[10])

fullName[2] = 'x';

console.log(fullName)
// Example of case sensitivity
console.log('I' === 'i');

//String Comparison
const al = 'a';
const b = 'b';

console.log('Hey' === 'hey'); // true
console.log('hey' == 'hey'); // false

// Long Literal Strings
const frost =
    "Nature’s first green is gold, " +
    "Her hardest hue to hold. " +
    "Her early leaf’s a flower; " +
    "But only so an hour. " +
    "Then leaf subsides to leaf. " +
    "So Eden sank to grief, " +
    "So dawn goes down to day. " +
    "Nothing gold can stay. ";

console.log(frost);

const frost2 =
    'Nature’s first green is gold,  \
 "Her hardest hue to hold.  \
 "Her early leaf’s a flower;  \
 "But only so an hour.  \
 "Then leaf subsides to leaf.  \
 "So Eden sank to grief,  \
 "So dawn goes down to day.  \
 "Nothing gold can stay. ';

console.log(frost2)

// Template Literals
const num1 = 5;
const num2 = 10;
console.log(
  "'num1' is assigned a value of \"" +
    num1 +
    '," and \'num2\' is assigned a value of "' +
    num2 +
    '."\n' +
    "Therefore, 'num1' plus 'num2' is equal to " +
    (num1 + num2) +
    '.'
);
const cost = 1000;

// Template literals, character sequence to insert JS expression: --> ${} <--
console.log(
  `"num1" is assigned a value of "${num1}," and 'num2' is assigned a value of ${num2}. 
Therefore, 'num1' plus 'num2' is equal to ${
    num1 + num2
  }. Made by ${firstName.toUpperCase()}. Lets make some money $$$. It's worth $${cost}`
);





