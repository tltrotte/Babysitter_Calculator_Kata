import {time} from "./calculator";






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
