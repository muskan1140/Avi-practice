function count(array){
    let even_count =0;
    let odd_count=0;

    for(let i of array){
          if(i%2==0){
            even_count++;
          }
          else{
            odd_count++;
          }
    }
    console.log(even_count);
    console.log(odd_count);
}

array=[3,6,8,7,13,98,76];
count(array);