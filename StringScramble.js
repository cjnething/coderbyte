//CODERBYTE: STRING SCRAMBLE
//MEDIUM
//COMPLETED 6/4/15
//POINTS: 5/10 (NONE FOR TIME)

/*
Have the function StringScramble(str1, str2) take both parameters being passed and return
the string true if a portion of str1 characters can be rearranged to match str2, otherwise
return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output
should return true. Punctuation and symbols will not be entered with the parameters.
*/

function StringScramble(str1,str2) { 
  var string1 = {};
  var canBeArranged = true;
  
  for (var i = 0; i<str1.length; i++) {
    if (!string1[str1.charAt(i)]) {
      string1[str1.charAt(i)] = 1; 
    } else {
      string1[str1.charAt(i)]++;
    }
  }

  
   for (var j = 0; j<str2.length; j++) {

    if (!string1[str2.charAt(j)] || string1[str2.charAt(j)] <= 0) {
      canBeArranged = false;
    } else {
      string1[str2.charAt(j)]--;
    }
  }
  
  
  
  // code goes here  
  return canBeArranged; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
