//map();
//use ES5 syntax
//console.dir(Array());//use browser console
let arrMap = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let anotherArr = [];

for (let i = 0; i < arrMap.length; i++) {
    //anotherArr.push(arrMap[i] * arrMap[i]);
    console.log(anotherArr.push(arrMap[i] * arrMap[i]));
}
console.log(anotherArr);

//use function
function getSquare(item) {
    return item * item;
}


//console.log(arrMap.map(getSquare));
let newArrrMap = arrMap.map(getSquare);

console.log(newArrrMap);

//again
let newArrMap5 = arrMap.map(function (item) {
    return item * item;
});
console.log(newArrMap5);

//map 3 args
let newArrMapArgs5 = arrMap.map(function (item, index, fullArr) {
    console.log('Item : '+ item + ' and index: '+index+' Full Array : '+fullArr);
});

//console.log(newArrMapArgs5);




//use ES6 syntax
//const newArrMap = arrMap.map(item => item % 2 === 1);
//console.log(newArrMap);

//const newArrMap = arrMap.map(item => item * item);
//same code
const newArrMap = arrMap.map((item) => {
    return item * item;
});
//console.log(newArrMap);



/* ========================ES5 filter function======================= */

//ES5
// filter(); return true or false
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter(function (item) {
    return item % 2 == 0;
});

console.log(newArr);

//filter 3 args
let newArr5 = arr.filter(function (item, index, fullArr) {
    console.log('Item : '+ item + ' and index: '+index+' Full Array : '+fullArr);
});


//use ES6 syntax
//arrow function
//const newArrFilter = arr.filter(item => item % 2 == 0);
//const newArrFilter = arr.filter(item => item % 2 == 1);
//const newArrFilter = arr.filter(item => item % 2 === 1);
//same code
const newArrFilter = arr.filter((item) => {
    return item % 2 === 1;
});
console.log('This is filter function');
console.log(newArrFilter);


/* ========================ES5 reduce function======================= */
//ES5
let arrReduce = [1, 2, 3, 4];

// non initialized
// let total = arrReduce.reduce(function (sum, item) {
//     return sum += item;
// });

// initialized 0
// let total = arrReduce.reduce(function (sum, item) {
//     return sum += item;
// }, 0);


// initialized 10
let total = arrReduce.reduce(function (sum, item) {
    return sum += item;
}, 10);

console.log(total);

//reduce 4 args
let newTotal = arrReduce.reduce(function (sum, item, index, fullArr) {
    console.log('Item : '+ item + ' and index: '+index+' Full Array : '+fullArr+ ' sum : '+sum);
    return sum+= item;
}, 0);

console.log(newTotal);


//ES6
const  toL = arrReduce.reduce((sum, item)=> sum += item, 0);
console.log(toL);


//======================this keyword====================

