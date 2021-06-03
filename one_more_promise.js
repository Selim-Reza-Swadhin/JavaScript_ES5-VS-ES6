//create promise
//create Asynchronous promise



const  promise1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (true){
            resolve('Promise 1 resolve Success');
        }else {
            reject('Promise 1 reject Failure');
        }
    }, 3000);
});
const  promise2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (true){
            resolve('Promise 2 resolve Success');
        }else {
            reject('Promise 2 reject Failure');
        }
    }, 3000);
});

Promise.all();



//call function
//aPromiseMore(true);
console.log(aPromiseMore(true));

//Promise Handle
// =================================== then() =====================================
//add then() and success promise
// let promiseThen = aPromiseWithData(true)
//     .then((data)=>{
//     console.log(data);
// });
//
//  console.log(promiseThen);

// =================================== catch() =====================================
//add catch() and success promise
// let promiseCatch = aPromiseWithData(false).catch((err)=>{
//     console.log(err);
// });
//
// console.log(promiseCatch);


// =================================== use then() and catch() together =====================================
// let promiseThenCatch = aPromiseWithData(true)
//     .then((data)=>{
//      console.log(data);
//  })
//     .catch((err)=>{
//     console.log(err);
// });
//
// console.log(promiseThenCatch);