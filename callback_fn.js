const getVar = ()=>{
    setTimeout(function () {
        console.log('A function that takes some time');
    }, 3000);
}

const printSomething = ()=>{
    console.log('Another function');
}

getVar();
printSomething();



//arguments
const getVarC = (callback)=>{
    setTimeout(function () {
        console.log('A function that takes some time callback');
        callback();
    }, 3000);
}

const printSomethingC = ()=>{
    console.log('Another function callback');
}

getVarC(printSomethingC);


