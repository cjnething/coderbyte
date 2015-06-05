//CODERBYTE: LETTER COUNT
//MEDIUM
//COMPLETED 6/5/15
//POINTS: 10/10

/*
Have the function LetterCount(str) take the str parameter being passed and return the first
word with the greatest number of repeated letters. For example: "Today, is the greatest day 
ever!" should return "greatest" because it has 2 e's (and 2 t's) and it comes before "ever"
which also has 2 e's. If there are no words with repeated letters return -1. Words will be
separated by spaces.
*/


function LetterCount(str) { 
  var arrWords = str.split(" ");
  var word = "";
  var most = 0;
  
  var wordLetterCount = function(word) {
    var counts = {};
    var numRepeated = 0;
    
    for (var i = 0; i<word.length; i++) {
       if(!counts[word.charAt(i)]) {
         counts[word.charAt(i)] = 1; 
       } else {
         counts[word.charAt(i)]++; 
       }
    }
    
    for (var key in counts) {
      if (counts[key] > 1) {
        numRepeated++; 
      }
    }
    
    return numRepeated;
  }
  
  for (var j = 0; j<arrWords.length; j++) {
    if (wordLetterCount(arrWords[j]) > most) {
      most = wordLetterCount[arrWords[j]];
      word = arrWords[j];
    }
  }
  
  if (word === "") {
    word = -1; 
  }

  return word; 
         
}
   

LetterCount(readline());           
