//ES5
//
var Child5 = function (name, dob) {
    this.name = name;
    this.dob = dob;
}

var zawad = new Child5('selim', 2021);
console.log(zawad.name);
console.log(zawad.dob);

//enter new method
Child5.prototype.currentAgeMethod = function () {
    console.log(this.name + ' is '+ (1989 -this.dob) + ' years old.')
}

//call new method
zawad.currentAgeMethod();




//ES6
class Child6 {

constructor (name, dob)
    {
        this.name = name;
        this.dob = dob;
    }

//enter new method
currentAgeMethod() {
    console.log(`${this.name} is ${1989 -this.dob} years old.`);
}
}
const  zawad6 = new Child6('reza', 2021);


console.log(zawad6.name);
console.log(zawad6.dob);

//call new method
zawad6.currentAgeMethod();