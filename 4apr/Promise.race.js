//Promise.race is same as promise.all except for it"ll return as soon as the first
//one is completed instead of waiting for everything to complete and bcoz of that it will return only a 
//single message or a value in then

let recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

let recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

let recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree

]).then((messages) =>{
    console.log(messages)
})

//Promise.race() takes an iterable of promises as input and returns a single promise.

