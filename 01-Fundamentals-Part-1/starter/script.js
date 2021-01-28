let js = "amazing";
console.log(40 + 8 + 23 - 10);


//ternary operator
const age = 15

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >=18) {
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

//with string literal
console.log(`I like to drink ${age>= 18 ? 'wine' : 'water'}`);