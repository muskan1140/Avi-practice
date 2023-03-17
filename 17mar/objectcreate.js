let person = {
    isHuman: false,
    print: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  let me = Object.create(person);

  me.name = 'Muskan'; // muskan is human so that condition is true
  me.isHuman = true; 
  me.print();