function sum_of_digit(m)
{
    if (m == 0)
    return 0;
    return (m % 10 + sum_of_digit(parseInt(m / 10)));
}
 
var number = 1234;
var result = sum_of_digit(number);
console.log( "Sum of digits in "+ number +" is "+result );
 
