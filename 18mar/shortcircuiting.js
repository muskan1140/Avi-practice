//Short circuiting is the evaluation of an expression from left to right with || and && operators.


//using || operator
var person = {
    name : 'Muskan',
    age: 23
}
console.log(person.job || 'unemployed');
//since there is no job defined that means it returns the value undefined, so this condition is falsy.
//Now the ||operator checks the rest of the condition and return that value

//using && operator
var person = {
    name: 'john',
    age: 45
}
console.log(person.age >18 && 'driving allowed')

//Since johns age is greater than 18.we get true 
//in this case,Js has no false value so && operator returns last true value.