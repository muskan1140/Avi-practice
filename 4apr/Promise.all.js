let recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

let recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

let recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

//In case we want to run all these in parallel  at the same time so
//we dont have to wait for one before  we start the next we use promised at all here

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree

]).then((messages) =>{
    console.log(messages)
})