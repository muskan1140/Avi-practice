let p = new Promise((resolve,reject) =>{
    let a= 1+1    //Condition is true here
    if(a ==2 ){
        resolve('Success')
    }    else {
            reject('Failed')
        }
    
})

p.then((message) => {
    console.log('This is in the then ' + message)

}).catch((message) => {
    console.log('This is in the catch' + message)

})

//in case condition is not true
let k = new Promise((resolve,reject) =>{
    let a= 1+3
    if(a ==2 ){
        resolve('Success')
    }    else {
            reject('Failed')
        }
    
})

k.then((message) => {
    console.log('This is in the then ' + message)

}).catch((message) => {
    console.log('This is in the catch ' + message)

})