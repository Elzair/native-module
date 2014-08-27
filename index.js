var hello     = require('./hello')
  , addon     = require('./addon')
  , callbacks = require('./callbacks')
  , factory   = require('./factory')
  , funfac    = require('./funfac')
  , objfac    = require('./objfac')
  ;

console.log(hello.hello());
console.log('This should be eight: ' + addon.add(3,5));

callbacks(function(msg) {
  console.log(msg);
});

var obj1 = factory('hello');
var obj2 = factory('world');
var obj3 = factory('factory');
console.log(obj1.msg + ' ' + obj2.msg + ' ' + obj3.msg);

var fn = funfac();
console.log(fn());

// Test Object Factory 
var obja = objfac.createObject(10);
var objb = objfac.createObject(20);
var result = objfac.add(obja, objb);
console.log('Object Factory Result: ' + result);
