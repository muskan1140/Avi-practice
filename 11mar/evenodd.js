let array=[1,2,3,4,5,6,7];
let sum=0;
for(i=0;i<array.length; i++)
{
    sum += array[i];
 
}
console.log(sum);

let num=0;
for (j=0; j< array.length; j++){
    if (array[j]%2==0)
    {
        num += array[j];
    }
}
console.log(num);

let number=0;
for (m=0; m< array.length; m++){
    if (array[m]%2!=0)
    {
        number += array[m];
    }
}
console.log(number);

 