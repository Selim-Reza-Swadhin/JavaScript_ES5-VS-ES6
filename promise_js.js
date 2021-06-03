//create promise
//create Asynchronous promise
const  aPromise = control => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (control){
                resolve();
            }else {
                reject();
            }
        }, 3000);
    });
}

//call function
//aPromise(true);
//console.log(aPromise(true));

//Promise Handle
// =================================== then() =====================================
//add then() and success promise
// let promiseThen = aPromise(true).then(()=>{
//     console.log('This is success promise resolve use then keyword');
// });
//
// console.log(promiseThen);

// =================================== catch() =====================================
//add catch() and success promise
// let promiseThen = aPromise(false).catch(()=>{
//     console.log('This is error or reject promise use catch keyword');
// });
//
// console.log(promiseThen);


// =================================== use then() and catch() together =====================================
let promiseThenCatch = aPromise(true)
    .then(()=>{
     console.log('This is success promise resolve use then keyword');
 })
    .catch(()=>{
    console.log('This is error or reject promise use catch keyword');
});

console.log(promiseThenCatch);