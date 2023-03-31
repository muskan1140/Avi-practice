function nme() {
    var name = "Ashish";   // name is a local variable created by nme 

    function displayName() { 

      // displayName() is the inner function, that forms the closure

      console.log(name);   // use variable declared in the parent function
    }
    displayName();
}
nme();