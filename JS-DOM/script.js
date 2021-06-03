//select document
//console.log(document);

//select element id
//console.log(document.querySelector('#box1'));

//select element id
//console.log(document.getElementById('box1'));

//variable
//let box1 = document.querySelector('#box1');
//console.log(box1);

//elementor property
//console.dir(document.querySelector('#box1'));

//select element class
//console.log(document.querySelector('.boxes'));

// ===================================== Multiple Element Select and NodeList ==========================================
//select single element id
//console.log(document.querySelectorAll('#box1'));

//select single element class
//console.log(document.querySelectorAll('.box0'));

//select common element class or id and first
//console.log(document.querySelector('.box'));


//same array but not array. NodeList
//console.log(document.querySelectorAll('.box'));


//same array but not array. Array to  NodeList
//let ArrayToNodeList = document.querySelectorAll('.box');

// let boxArray = Array.prototype.slice.call(ArrayToNodeList);
// console.log(boxArray);


//same array but not array. NodeList
//console.log(document.getElementsByClassName('box'));

//same array but not array. Array to  NodeList
//let clArrayToNodeList = document.getElementsByClassName('box');

// let clboxArray = Array.prototype.slice.call(clArrayToNodeList);
// console.log(clboxArray);

//select tags
console.log(document.getElementsByTagName('h4'));


//select multi tags
console.log(document.querySelectorAll('h4, p, ul'));


