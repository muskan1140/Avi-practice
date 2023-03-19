//constructor property method is a special method 
//of a class for creating and initializing an object instance of that class.
class Person {
 constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
 }
  
  const ellie = new Person("ellie");
  
  ellie.introduce();


 //A constructor enables you to provide any custom initialization that must be done 
 //before any other methods can be called on an instantiated object.
 //If you don't provide your own constructor, then a default constructor will be supplied for you.