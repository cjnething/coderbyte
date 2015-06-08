//CODERBYTE: COUNTING MINUTES
//MEDIUM
//COMPLETED 6/8/15
//POINTS: 10/10

/*
Using the JavaScript language, have the function CountingMinutes(str) take the str 
parameter being passed which will be two times (each properly formatted with a colon 
and am or pm) separated by a hyphen and return the total number of minutes between the 
two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
*/


function CountingMinutes(str) { 
  var firstTime, secTime;

  if (str.charAt(4) === "a") {
      firstTime = Number(str.charAt(0)) 
      firstTime *= 60;
      firstTime += Number(str.charAt(2) + str.charAt(3));
  }
  if (str.charAt(5) === "a") {
       firstTime = Number(str.charAt(0) + str.charAt(1)) 
       if (firstTime === 12) {
           firstTime = 0;
       }
       firstTime *= 60;
      firstTime += Number(str.charAt(3) + str.charAt(4));
  }
  
    if (str.charAt(str.length-2) === "a") {
      if (str.charAt(str.length-8) === "-") {
          secTime = Number(str.charAt(str.length-7) + str.charAt(str.length-6));

      }
      if (str.charAt(str.length-7) === "-"){
          secTime = Number(str.charAt(str.length-6));
      }
      if (secTime === 12) {
          secTime = 0;
      }
          secTime *= 60;
          secTime += Number(str.charAt(str.length-4) + str.charAt(str.length-3));
  }
  
  
  
  if (str.charAt(4) === "p") {
      firstTime = Number(str.charAt(0));
      if (firstTime < 12) {
          firstTime += 12;
      }
      firstTime *= 60;
      firstTime += Number(str.charAt(2) + str.charAt(3));
  }
  if (str.charAt(5) === "p") {
      firstTime = Number(str.charAt(0) + str.charAt(1));
      if (firstTime < 12) {
          firstTime += 12;
      }
      firstTime *= 60;
      firstTime += Number(str.charAt(3) + str.charAt(4));
  }
  
  if (str.charAt(str.length-2) === "p") {
      if (str.charAt(str.length-8) === "-") {
          secTime = Number(str.charAt(str.length-7) + str.charAt(str.length-6));

      }
      if (str.charAt(str.length-7) === "-"){
          secTime = Number(str.charAt(str.length-6));
      }
      if (secTime < 12) {
              secTime += 12;
          }
          secTime *= 60;
          secTime += Number(str.charAt(str.length-4) + str.charAt(str.length-3));
  }
  
      
    if (secTime - firstTime < 0) {
        secTime += 24*60;
    }
  
  console.log('first', firstTime, 'sec', secTime);

  return secTime - firstTime; 
         
}