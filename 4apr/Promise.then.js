const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
  });

  //In case of Resolve
  promise1.then((value) => {
    console.log(value);
    // Expected output: "Success!"
});


const promise2 = new Promise((resolve, reject) => {
    reject('Success!');
  });

//In case of Reject it will show an error
promise2.catch((value) => {
    console.log(value);
});
