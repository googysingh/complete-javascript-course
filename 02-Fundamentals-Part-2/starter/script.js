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
