//The apply() method calls the function with a given this value and allows passing in arguments as an array (or an array-like object).

let per1= {
    firstName:'Muskan',
    lastName:'kapoor',
};

let per2={
    firstName:'Ashish',
    lastName:'Verma',
};

function sayWelcome(greeting){
      console.log(greeting + ' ' +this.firstName + ' ' +this.lastName);
}

sayWelcome.call(per1 , ['Welcome']);
sayWelcome.call(per2 , ['Welcome']);