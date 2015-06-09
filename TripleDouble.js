//CODERBYTE: TRIPLE DOUBLE
//MEDIUM
//COMPLETED 6/9/15
//POINTS: 10/10

/*
Using the JavaScript language, have the function TripleDouble(num1,num2) take both parameters being 
passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight 
double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, 
then return 1 because in the first parameter you have the straight triple 999 and you have a straight 
double, 99, of the same number in the second parameter. If this isn't the case, return 0. 
*/

function TripleDouble(num1,num2) { 
  var num1Str = num1.toString();
  var num2Str = num2.toString();
  
  for (var i = 0; i<num1Str.length-2; i++) {
      
    if (!double && (num1Str.charAt(i) === num1Str.charAt(i+1)) && (num1Str.charAt(i+1) === num1Str.charAt(i+2))) {
     var double = num1Str.charAt(i) + num1Str.charAt(i);
    }
  }
  
  if (num2Str.indexOf(double) !== -1) {
    return 1;
  } else {
   return 0; 
  }
  
}