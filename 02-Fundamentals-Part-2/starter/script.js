'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3))



const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);

//Function declariation
function calcAge1(birthYear) {
    return 2037 - birthYear;
}


//Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

//Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));

