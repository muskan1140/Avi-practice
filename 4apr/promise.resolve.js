const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});


//In this method, promise is always resolve
//Rejected Promises are not working in this method

const promise2 = Promise.reject(123);

promise2.then((value) => {
  console.log(value);
  // Expected output:Error
});
