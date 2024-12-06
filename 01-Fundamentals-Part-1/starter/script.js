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

//Data Type

true;

console.log(true);

let javaScriptIsFun = true;
console.log("Value of Java Script is", javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'John');

//Dynamic typing same variable javaScriptIsFun is now become string from boolean
javaScriptIsFun = "Gurpreet";
console.log("Value of Java Script is", javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log("Value of year is", year);
console.log(typeof year);

year = 1993;
console.log("Value of year is", year);
console.log(typeof year);

console.log(typeof null);
*/

// Basic Operator

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
console.log(isFullAge);
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
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//The .toFixed() method returns a string representing the number rounded to a specified number of decimal places.
const BMIMark = (massMark / (heightMark * heightMark)).toFixed(2);
const BMIJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
*/


// Type Converison and Coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(typeof Number(inputYear), typeof inputYear);
console.log(Number(inputYear) + 18);

console.log(String(1922));
console.log(Number('Gurpreet'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + 'year old');
console.log('I am ' + '23' + 'year old');
console.log('I am ' + String(23) + 'year old');

//Very importnt concept -,*,/ will start javascript to convert string into number and then do tha calculation
console.log('23' - '10' - 3);
console.log('10' + 3);
console.log('23' + '10' + 3);

console.log('23' * '2');
console.log('23' / '2');

let n = '1' - 1;
n = n - 1;
console.log(n);


let m = '1' + 1; //m = 11(String)
m = m - 1;
console.log(m);

console.log(2 + 3 + 4 + '5');



//Truthy and Faslsy Values

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Gurpreet'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Dont's spend it all :)");
} else {
    console.log("You should get a job!")
}

let height;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is UNDEINED");
}
*/

//Equality Operators == Vs ===

/*
const age = '18';
if (age === 18) {
    console.log('You just became an adult :D (strict)');
}
if (age == 18) {
    console.log('You just became an adult :D (loose)');
}

//Example:-
const favourite = Number(prompt("What is your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool 23 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log('Why not 23 ?');
}

*/

// Boolean Logic

//AND, OR & NOT Operators
//Logical Operators

/*
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //AND operator
console.log(hasDriversLicense || hasGoodVision); //OR operator
console.log(!hasDriversLicense); //NOT Operator

const isTired = true; //C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah can able to Drive');
} else {
    console.log('Someone else should drive');
}

*/

/*CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below.The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
/*
const scoreDolphins = (96+108+89) /3;
const scoreKoalas = (88+91+110) / 3;
console.log(`Average score of Dolphins is ${scoreDolphins}`);
console.log(`Average score of Koalas is ${scoreKoalas}`);

if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy");
}else{
    console.log("Both win the trophy");
}
*/

// The Switch Statement
/*
const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepared theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepared theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

//Statement and Expressions
/*
3 + 4
1991
true && false && !false

if (23 > 18) {
    const str = '23 is bigger';
}
let name = 'Gurpreet';
console.log(`I'm ${2007 - 1991} years old and name is ${name}`);
*/

//The Conditional (Ternary) Operator
/*
const age = 19;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');
// condition ? if part : Else part;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I lke to drink ${drink}`);
console.log(`I lke to drink ${age >= 18 ? 'wine' : 'water'}`);
//Disadvatage of if else of above same code
let drink1;
if (age >= 18) {
    drink1 = 'wine';
} else {
    drink1 = 'water';
}
console.log(drink1);
console.log(`I lke to drink ${drink1}`);
*/
/*
//CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

/*
const bill = 275;
const tip = (bill * (bill >= 50 && bill <= 300 ? 15 : 20) / 100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/