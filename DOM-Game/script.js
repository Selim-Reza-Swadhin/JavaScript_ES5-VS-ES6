// let selectABox = document.getElementById('box1');
// console.log(selectABox);
// console.dir(selectABox);

//add new p fresh element
//let newParagraph = document.createElement('p');
//console.log(newParagraph);

// add new p element
let newParagraph = document.createElement('p');
//console.log(newParagraph);

//add new div element
//let newDiv = document.createElement('div');
//console.log(newDiv);

//add just test or content in p, div element
//let chacchu = 'Zawad Ahmed';
//newParagraph.textContent = 'His name is: '+ chacchu +'!';
//console.log(newParagraph);
//console.log(newParagraph.textContent);


//add new html p tag in div element
let newDiv = document.createElement('div');
//console.log(newDiv);

//innerHTML
newDiv.innerHTML = '<p>DOM Manipulation is Fun !</p>';
console.log(newDiv);
//let addNewTag = newDiv;
//console.log(addNewTag);

//outerHTML
console.log(newDiv.outerHTML);

//innerText
//console.log(newDiv.innerText);

//add class in newDiv element
// <div class="new-div"></div>

newDiv.classList.add('new-div');
console.log(newDiv);

//add class in newDiv element for old browser
//newDiv.className = newDiv.className + ' old-new-div';
newDiv.className += ' old-new-div';
console.log(newDiv);

//show all class list
console.log(newDiv.classList);

//show all class name
console.log(newDiv.className);

//remove class
newDiv.classList.remove('new-div');
console.log(newDiv);

//remove class for old browser
newDiv.className = newDiv.className.replace(/old-new-div$/, '');
console.log(newDiv);

//remove class attribute
newDiv.removeAttribute('class');
//console.log(newDiv);


// ============================================ Attribute ==========================================
//add attribute
newDiv.setAttribute('data-attr', 'something');
console.log(newDiv);

//change  attribute value
newDiv.setAttribute('data-attr', 'someOtherThing');
console.log(newDiv);


//remove attribute
newDiv.removeAttribute('data-attr');
console.log(newDiv);


// ============================================ Style Game ==========================================
//style attribute
console.dir(newDiv.style);

//add style
newDiv.style.backgroundColor = '#000';
//console.log(newDiv);

//add color
newDiv.style.color = '#fff';
console.log(newDiv);

//enter style element
console.log(newDiv.style.color);

//change and add color
newDiv.style.backgroundColor = '#333';
console.log(newDiv);

//style remove
newDiv.style.textAlign = 'center';
console.log(newDiv);

//remove center
newDiv.style.textAlign = '';
console.log(newDiv);

