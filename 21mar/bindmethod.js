//The bind() method returns a new function and allows passing in a this array and any number of arguments.

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

let sayWelcomeMuskan = sayWelcome.bind(per1);
let sayWelcomeAshish = sayWelcome.bind(per2);

sayWelcomeMuskan('hello');
sayWelcomeAshish('welcome');