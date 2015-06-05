//CODERBYTE: DISTINCT LIST
//MEDIUM
//COMPLETED 6/3/15
//POINTS: 10/10


//Have the function DistinctList(arr) take the array of numbers stored in arr
//and determine the total number of duplicate entries. For example if the input is
//[1,2,2,2,3] then your program should output 2 because there are two duplicates of 
//one of the elements.


function DistinctList(arr) { 
  var count = 0;
  var allNumbers = {};
  for (var i = 0; i<arr.length; i++) {
   if (allNumbers[arr[i]]) {
     count++;
   } else {
     allNumbers[arr[i]] = true;
   }
  }
  return count; 
         
}
   
DistinctList(readline());  