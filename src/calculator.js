//We know the following variables for the application
var payPerHour = {
  beforeSleep: 12,
  whenSleeping: 8,
  afterMidnight: 16
};

var shift = {
  start: 17,
  midnight: 0,
  end: 4
};

//This Function Formats the time correctly as well as set the expectaions of time returned on a 24 hour clock for this application.

export function time(hour) {
  if (hour.indexOf('00') === -1) {
    hour = Number(hour.split(":").shift()) + 1;
  } else {
    hour = Number(hour.split(":").shift());
  }
  if (hour <= 0 || hour > 24) {
    return false;
  } else {
    return hour;
  }
}
// This is the function used to calculate the hours before Bed.
export function beforeBedPay(startTime, bedTime) {
  if (bedTime > startTime && bedTime > shift.midnight) {
    return ((bedTime - startTime) * payPerHour.beforeSleep);

  } else if (bedTime <= startTime) {
    return 0;
  }
}
// This is the function used to calculate the hours during sleeping.
export function bedTimePay(startTime, bedTime, endTime) {
  if (bedTime > startTime && bedTime > shift.midnight && bedTime <= endTime) {
    return ((endTime - bedTime) * payPerHour.whenSleeping);

  } else if (bedTime === startTime && endTime >= shift.midnight) {
    return ((endTime - startTime) * payPerHour.whenSleeping);
  } else if (bedTime <= startTime && endTime < shift.midnight) {
    return ((24 - startTime) * payPerHour.whenSleeping);
  } else if (bedTime <= startTime && endTime >= shift.midnight) {
    return ((endTime - startTime) * payPerHour.whenSleeping);
  } else {
    return 0;
  }
}

//This is the Function that calculates the pay for hours after midnight.

export function afterMidnightPay(startTime, endTime) {
  if (startTime === 0 || startTime > shift.end && endTime <= shift.end) {
    return endTime * payPerHour.afterMidnight;
  } else {
    return 0;
  }
}
//This is the function that calculates the final pay for the Babysitter Calculator

export function finalPay(start, middle, end) {
  var startTime = time(start);
  var bedTime = time(middle);
  var endTime = time(end);
  return (beforeBedPay(startTime, bedTime) + bedTimePay(startTime, bedTime, endTime) + afterMidnightPay(startTime, endTime));
}
