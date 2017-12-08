import {time, beforeBedPay, bedTimePay, afterMidnightPay} from "./calculator";






describe("time function", function(){
  //This test check's to make sure that the time is a number
  it('the type of time should equal a number', function() {
     expect(typeof(time('10:45'))).toEqual('number');
   });
//This test makes sure that the time is returned as its self
  it('should return 10 when time is 10:00)', function() {
    expect(time('10:00')).toBe(10);
  });
  //This test make sure that number rounds up when there the minutes are not "00"
 it('should return 22:00 when time is 21:01', function() {
   expect(time('21:01')).toBe(22);
  });
});
//This test makes the calculation for pay before bed time
describe("beforeBedPay function", function(){
it('should return $36 if start time is 5pm and bedtime is 8pm', function() {
     expect(beforeBedPay(17, 20)).toBe(36);
  });
});
//This test makes the calculation for bed time hours
describe("bedTime function", function(){
it('should return 24 if start time is 6pm  and bedtime is 8pm and endTime 11pm', function() {
     expect(bedTimePay(18, 20, 23)).toBe(24);
  });
it('should return 16 if start time is 6pm  and bedtime is 6pm endTime 8pm', function() {
       expect(bedTimePay(18, 18, 20)).toBe(16);
  });
it('should return 24 if start time is 8pm  and bedtime is 6pm endTime 11pm', function() {
       expect(bedTimePay(20, 18, 23)).toBe(24);
  });
});
//This test makes the calculation for midnight pay hours.
describe('afterMidnightPay function', function(){
   it('should return 48 if start time is midnight and end is 3am', function() {
     expect(afterMidnightPay(0, 3)).toBe(48);
   });
});
