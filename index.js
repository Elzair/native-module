var hello = require('./hello')
  , addon = require('./addon')
  , factory = require('./factory')
  , funfac = require('./funfac')
  , objfac = require('./objfac')
  ;

console.log(hello.hello());
console.log(addon.add(1,2));

var obj1 = factory('hello');
var obj2 = factory('world');
console.log(obj1.msg + ' '+obj2.msg);

var fn = funfac();
console.log(fn());

var obj = new objfac.MyObject(10);
console.log(obj.plusOne());
console.log(obj.plusOne());
console.log(obj.plusOne());
