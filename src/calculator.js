

//We know the following variables for the application
 var payPerHour = {
   beforeSleep: 12,
   whenSleeping: 8,
   afterMidnight: 16
 };

 var shift = {
   start: 17,
   midnight:24,
   end: 4,
 };

 // var startTime = time(startTime);
 // var bedTime = time(bedTime);
 // var endTime = time(endTime);


 //This Function Formats the time correctly as well as set the expectaions of time returned on a 24 hour clock for this application.

 export function time(hour){
   if(hour.indexOf('00') === -1 ){
      hour = Number(hour.split(":").shift()) +1;
    } else {
       hour = Number(hour.split(":").shift());
      }
      if(hour <= 0 || hour > 24)
 		{
 			return false;
 		}else{
       return hour;
 	}
 }
 // This is the function used to calculate the hours before Bed.
 export function beforeBedPay(startTime, bedTime)
  {
    if(bedTime > startTime && bedTime < shift.midnight)
    {
      return ((bedTime - startTime) * payPerHour.beforeSleep);

    } else if(bedTime <= startTime){
      return 0;
    }
  }
