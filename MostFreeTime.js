//CODERBYTE: MOST FREE TIME
//MEDIUM
//COMPLETED 6/8/15
//POINTS: 10/10

/*
Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter
being passed which will represent a full day and will be filled with events that span from time
X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, 
strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have 
to output the longest amount of free time available between the start of your first event and 
the end of your last event in the format: hh:mm. The start event should be the earliest event 
in the day and the latest event should be the latest event in the day. The output for the 
previous input would therefore be 01:30 (with the earliest event in the day starting at 
09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events 
and the events may be out of order. 
*/

function MostFreeTime(strArr) { 
  var intermediateBreak, longestBreak;
    
  for (var i = 0; i<strArr.length; i++) {
      if (strArr[i].charAt(5) === "P") {
          var newTime = Number(strArr[i].charAt(0) + strArr[i].charAt(1));
          if (newTime < 12) {
          newTime += 12;
          }
          strArr[i] = newTime.toString() + strArr[i].substr(2);
          console.log(strArr[i]);
      }
        if (strArr[i].charAt(13) === "P") {
            console.log('in sec', strArr[i])
          var secNewTime = Number(strArr[i].charAt(8) + strArr[i].charAt(9));
          if (secNewTime < 12) {
          secNewTime += 12;
          }
          strArr[i] = strArr[i].substr(0, 8) + secNewTime.toString() + strArr[i].substr(10);
          console.log(strArr[i]);
      }
  }
 
  strArr.sort();
  console.log('STR', strArr);
  
  for (var j = 0; j<strArr.length-1; j++) {
      
  intermediateBreak = (Number(strArr[j+1][0] + strArr[j+1][1]) * 60 + Number(strArr[j+1][3] + strArr[j+1][4])) - (Number(strArr[j][8] + strArr[j][9]) * 60 + Number(strArr[j][11] + strArr[j][12]));
  
  if (intermediateBreak > longestBreak || !longestBreak) {
      longestBreak = intermediateBreak;
  }
  }
  
  
      var hours = Math.floor(longestBreak/60);
      
      if (hours < 10) {
          hours = "0" + hours;
      }
      
      var minutes = longestBreak % 60;
      
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      longestBreak = hours.toString() + ":" + minutes.toString();
  
  return longestBreak; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MostFreeTime(readline());  