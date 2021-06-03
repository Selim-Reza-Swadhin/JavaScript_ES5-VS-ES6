//create promise
//create Asynchronous promise
const  aPromiseWithData = control => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (control){
                resolve('This is a resolve Success');
            }else {
                reject('This is a reject Failure');
            }
        }, 3000);
    });
}

//call function
//aPromiseWithData(true);
//console.log(aPromiseWithData(true));

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
let promiseThenCatch = aPromiseWithData(true)
    .then((data)=>{
     console.log(data);
 })
    .catch((err)=>{
    console.log(err);
});

console.log(promiseThenCatch);