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

// Test Object Factory #1
//var obj = new objfac.MyObject(10);
//console.log(obj.plusOne());
//console.log(obj.plusOne());
//console.log(obj.plusOne());

// Test Object Factory #2
//var obja = objfac(10);
//console.log(obja.plusOne());
//console.log(obja.plusOne());
//console.log(obja.plusOne());
//
//var objb = objfac(20);
//console.log(objb.plusOne());
//console.log(objb.plusOne());
//console.log(objb.plusOne());

// Test Object Factory #3
var obja = objfac.createObject(10);
var objb = objfac.createObject(20);
var result = objfac.add(obja, objb);
console.log(result);
