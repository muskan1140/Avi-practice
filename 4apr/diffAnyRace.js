//Promise.any takes only Promises that are  resolved/ pass
//Promise.race takes only promises that are settled



//Promise.any()
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

//Promise.Race()
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise5, promise6]).then((value) => {
    console.log(value);
    // Both resolve, but promise6 is faster
  });
  // Expected output: "two"
  