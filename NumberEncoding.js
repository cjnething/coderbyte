//CODERBYTE: NUMBER ENCODING
//MEDIUM
//COMPLETED 6/3/15
//POINTS: 5/5


//Have the function NumberEncoding(str) take the str parameter and encode the message
//according to the following rule: encode every letter into its corresponding
//numbered position in the alphabet. Symbols and spaces will also be used in the input.
//For example: if str is "af5c a#!" then your program should return "1653 1#!".

var alphabet = {
    'a':1,
    'b':2,
    'c':3,
    'd':4,
    'e':5,
    'f':6,
    'g':7,
    'h':8,
    'i':9,
    'j':10,
    'k':11,
    'l':12,
    'm':13,
    'n':14,
    'o':15,
    'p':16,
    'q':17,
    'r':18,
    's':19,
    't':20,
    'u':21,
    'v':22,
    'w':23,
    'x':24,
    'y':25,
    'z':26
  }
  
  var encodedStr = "";
  var curr;
  
  for (var i = 0; i<str.length; i++) {
   curr = str.charAt(i);
   if (alphabet[curr]) {
     curr = alphabet[curr]; 
   }
   encodedStr = encodedStr.concat(curr);
  }
  return encodedStr; 
         
}
   
NumberEncoding(readline());  