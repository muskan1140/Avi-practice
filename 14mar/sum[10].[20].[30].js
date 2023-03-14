function mul(a)
{
    return function(b){
        return function(c){
            return function(d){
                return a*b*c
            }
        }
    }

}
console.log(mul(6) (88) (10) ())