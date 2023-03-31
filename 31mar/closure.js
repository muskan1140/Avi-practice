function makeFunc() {
    const name = "Muskan";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
const myFunc = makeFunc();
myFunc();
