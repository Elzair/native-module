#include <node.h>
#include "myobj.h"

using namespace v8;

Handle<Value> CreateObject(const Arguments& args) {
  HandleScope scope;
  return scope.Close(MyObject::NewInstance(args));
}

void InitAll(Handle<Object> exports, Handle<Object> module) {
  //MyObject::Init(exports);
  MyObject::Init();
  module->Set(String::NewSymbol("exports"),
      FunctionTemplate::New(CreateObject)->GetFunction());
}

NODE_MODULE(objfac, InitAll)
