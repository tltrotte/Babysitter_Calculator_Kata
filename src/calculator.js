

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
