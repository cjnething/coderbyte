//CODERBYTE: LOOK SAY SEQUENCE
//MEDIUM
//COMPLETED 6/3/2015
//POINTS: 10/10

/*
Have the function LookSaySequence(num) take the num parameter being passed and return the
next number in the sequence according to the following rule: to generate the next number
in a sequence read off the digits of the given number, counting the number of digits in groups
of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ...
The 11 comes from there being "one 1" and the 21 comes from there being "two 1's" before it.
So your program should return the next number in the sequence given num.
*/

function LookSaySequence(num) { 
  var digitCounts = [];
  var str = num.toString();
  var first = str.charAt(0);
  var count = 1;
  var finalNum = "";
  
  for (var i = 1; i<str.length; i++) {
    if (str.charAt(i) === first) {
      count++;
    } else {
      digitCounts.push([count, first]);
      first = str.charAt(i);
      count = 1;
    }
  }
  digitCounts.push([count, first]);
  
  for (var j = 0; j<digitCounts.length; j++) {
     finalNum = finalNum.concat(digitCounts[j][0]);
     finalNum = finalNum.concat(digitCounts[j][1]);
  }
  finalNum = Number(finalNum);
  return finalNum; 
         
}
   
LookSaySequence(readline());                            
