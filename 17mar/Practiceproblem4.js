let value = "How many vowels in a given sentence";
let valu= value.toLowerCase();


 function countvowelconsonantss() {
    let vowels = "aeiou";
    let vowel_count =0;
    let consonant_count =0;

    for(var mk of value )  {
        vowels.includes(mk) ? vowel_count++  :  consonant_count++; 
    }

    
    console.log(`vowelles =${vowel_count}`);
    console.log(`consonants=${consonant_count}`);}

countvowelconsonantss();