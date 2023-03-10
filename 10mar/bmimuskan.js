console.log("est")
var h=150;
var wgt=70;
var bmi = wgt/(h**2)
var output ="";
function bmii(bmi){
 
    if(bmi<1)
    {
         output="underweight";
    }
    else if(bmi = 1)
    {
         output="normalweight";
    }
    else{
         output="underweight";
    }
    return output
}
console.log(bmii(bmi));