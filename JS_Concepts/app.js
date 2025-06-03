

let a = true;
let b = false;

console.log(a && b);

function getName(name){
    return name;
}

let c = true;
let d = false;

console.log(c && getName("Yashasvi"));

console.log(d && getName("Yashasvi"));

console.log(a || b);
console.log(b || d);
console.log(a && c);

console.log(d || getName("Yashasvi"));

// template literals used for the concatenation 

let name1 = "Yashasvi";
let name2 = "Agrawal";

console.log(`${name1} ${name2}`);

let showRecipeOne = true;

function getRecipieOne(recipieName){
    return recipieName;
}

function getRecipieTwo(recipieName){
    return recipieName;
}

if(showRecipeOne){
    console.log(getRecipieOne("Pizza"));
}
else{
    console.log(getRecipieTwo("Coke"));
}

// condition ? statement1 : statement2

showRecipeOne ? console.log(getRecipieOne("Pizza")) : console.log(getRecipieTwo("Coke"));


// destructuring of object
const id = 1;
const productName = "Apple Watch";
const rating = 5;

const product = {
    id,
    productName,
    rating
};

console.log(product);

const product2 = {
    desc : 'Product 2',
    id,
    productName,
    rating
}

// const getProduct2Desc = product2.desc;
// console.log(getProduct2Desc);

// instead of accessing with the help of Objectname.key we can direcly access by destructuring the object

const {desc} = product2;
console.log(desc);


// destructuring of array
const arr = [1,2,3];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];

// console.log(first,second,third);

// instead of accessing the value by index we can destructuring the array
const [first,second,third] = arr;
console.log(first,second,third);

// default parameters, spread and rest operators

function mulOfTwoNumbers(num1=1,num2=2){ // here we have assigned thedefault values to the parameters they are default parameters 
    console.log(num1,num2);
    return num1*num2;
}

console.log(mulOfTwoNumbers(4*5)); // output would be 20;
console.log(mulOfTwoNumbers()); // if we dont pass the arguments while calling the function to the parameters then parameters will take the default values which we have assigned as a default parameters
console.log(mulOfTwoNumbers(5)); // we have pass only single argument so num2 will take default value

// spread operator
const arr2 = [2,3,4];
const arr3 = [6,7,9];

console.log([999, ...arr2,90, ...arr3,1000]);

// rest operator

