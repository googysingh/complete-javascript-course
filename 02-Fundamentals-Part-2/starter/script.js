// Activating Strict Mode

'use strict';
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const private = 53;
*/

//Functions
//Function decleration
/*
function logger() {
    console.log('My nameis Jonas');
}

//cslling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangesJuice = fruitProcessor(2, 3);
console.log(appleOrangesJuice);

const num = Number('23');
console.log(typeof num);
*/

//Function Declaration Vs Expression
/*
//Function declaration
console.log(calcAge1(2017));

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function Expression
//This function has to define first and then cal it. Like below one
const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const age = calAge(2018);
console.log(age);

*/

//Arrow Function
/*
const calAge1 = birthYear => 2037 - birthYear;
const age1 = calAge1(2019);
console.log(age1);


const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement1 = (birthYear, name) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${name} retirement in ${retirement}`;
}

console.log(yearsUntilRetirement1(1980, 'bob'));
console.log(yearsUntilRetirement1(1982, 'James'));

*/

//Function calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}


console.log(fruitProcessor(2, 3));
*/

//Reviewing the Funcion
/*
//birthYear is local variable here
const calAge = function (birthYear) {
    return 2037 - birthYear;
}

//birthYear is local variable here
const yearsUntilRetirement = function (birthYear, name) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    //Since funtion is already return this code will never executed
    console.log(`${name}  has already retired`);
}

console.log(yearsUntilRetirement(1991, 'Jones'));
console.log(yearsUntilRetirement(1950, 'Nike'));
*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
// Introduction to Array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Gurpreet';
console.log(friends[friends.length - 1]); //Here point to note is that we can change const declared array, because it is not a primitive value . Primitive values are distinct from objects in JavaScript, which are complex data types that can hold multiple values and have methods and properties. When you manipulate primitive values, JavaScript treats them as immutable, meaning that the original value remains unchanged, and any operations create new values rather than modifying the existing ones.

//friends = ['Bob', 'Singh'] //This is not possible


const firstName = 'Manpreet';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years1)); //This will not work

console.log(calcAge(years1[0]));
console.log(calcAge(years1[years1.length - 1]));

const ages = [(calcAge(years1[0])), (calcAge(years1[years1.length - 1]))];

console.log(ages);
*/

//Basic Array = Methods

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Add Element Method
let newlength = friends.push('Jay'); //Add a new element at the last and return current length of array

console.log(newlength);
console.log(friends);

newlength = friends.unshift('John'); //Add a new element at the start and return current length of array
console.log(newlength);
console.log(friends);

//Remove element Method
const lastelement = friends.pop(); //remove and return last element

console.log(lastelement);
console.log(friends);

let firstElement = friends.shift(); //Remove first and return the element
console.log(firstElement);
console.log(friends);

// Index of values
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Return -1 if element is not present 

//Search the elements
console.log(friends.includes('Steven')); //Return true
console.log(friends.includes('bob')); //Return false

if (friends.includes('Steven')) {
    console.log('YOu have a frined called Steven');
}
*/