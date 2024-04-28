/*
//Basic Hello World
let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is Fun!!');
//41 + 30 + 70; //This will not print in the console of the browser
console.log(41 + 30 + 70);

//Values and Variables
console.log('John');
console.log(23);

let firstName = 'Gurpreet';

console.log(firstName);

console.log(firstName);
console.log(firstName);

// let 3years = 'this is not possible';  Syntax Error not possible
//Practice Assignments of Values and Variables

let country = 'India';
let continent = 'Uttar Pradesh';
let population = 1000000;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
//Data Type

true;

console.log(true);

let javaScriptIsFun = true;
console.log("Value of Java Script is", javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'John');

//Dynamic typing
javaScriptIsFun = "Gurpreet";
console.log("Value of Java Script is", javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log("Value of year is", year);
console.log(typeof year);

year = 1993;
console.log("Value of year is", year);
console.log(typeof year);

console.log(typeof null)'

*/
//Basic Operator

/*
const now = 2037
const ageJohn = now - 1991;
const ageSarah = now - 2022;
console.log(ageJohn, ageSarah)

console.log(ageJohn * 2, ageJohn / 10, 2 ** 3)
//2 ** 3 means 2 to power 3, ie 2*2*2=8

const firstName = 'John'
const lastName = 'Singh'
console.log(firstName + ' ' + lastName);
*/

// Assignment Operator
/*
let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10

console.log(x);
x *= 4; // x = x * 4
console.log(x);

x++; // x = x+1
console.log(x);

x--; // x = x-1
console.log(x);
*/

//Comparison Operators
/*
console.log(ageJohn > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJohn + ageSarah) / 2;
console.log(ageJohn, ageSarah, averageAge);
*/

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
//const massMark = 78, heightMark = 1.69;
//const massJohn = 92, heightJohn = 1.95;
/*
const massMark = 95, heightMark = 1.88;
const massJohn = 85, heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/


//String and Template Literals
/*
const firstName = 'Gurpreet';
const job = 'teacher';
const birthYear = 1988;
const year = 2037;

const statment = "I'm " + firstName + " ,a " + (year - birthYear) + " year old " + job + "!";
console.log(statment);

const statmentTemplateLiterals = `I'm ${firstName} ,a ${year - birthYear} year old ${job}!`; //Template Literals examples
console.log(statmentTemplateLiterals);
console.log(`Just a random statement...`);

console.log("String with \n\Multiple line"); //Old way
console.log(`String with
Multiple line`); //Template way
*/

//Taking Decision: If/Else Statement 
/*
const age = 15;
if (age >= 18) {
    console.log("Sarah can start driving license :)")
} else {
    console.log(`Sarah will have to wait ${18 - age} year`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}