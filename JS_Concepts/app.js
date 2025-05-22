

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
let first = arr[0];
let second = arr[1];
let third = arr[2];



