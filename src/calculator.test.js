import {time} from "./calculator";






describe("time function", function(){
  //This test check's to make sure that the time is a number
  it('the type of time should equal a number', function() {
     expect(typeof(time('10:45'))).toEqual('number');
   });
});
