//Map is ES6 Map
//map is map() method
const zawad = new Map();

//set value
console.log(zawad.set('fullName', 'selim reza'));

//get value
console.log(zawad.get('fullName'))


//has value
console.log(zawad.has('fullName'));

//has value
console.log(zawad.has('lastName'));


//set new value
console.log(zawad.set('addName', 'swadhin'));

//has value
console.log(zawad.has('addName'));


//delete value
console.log(zawad.delete('addName'));


//has value
console.log(zawad.has('addName'));


//clear value
console.log(zawad.clear());

//show value
console.log(zawad);




//add multi value
const  favorite = new Map();

//set value
favorite.set('name', 'selim');
favorite.set('job', 'student');
favorite.set('color', 'blue');
favorite.set('os', 'ubuntu');
favorite.set('mobiles', 'android');

//show all value
console.log(favorite);


//count all value
console.log(favorite.size);

//loop
favorite.forEach((value, key)=>{
    console.log(`Key is: ${key} and the value is: ${value}`);
});

