#include <node.h>
#include "myobj.h"

using namespace v8;

void InitAll(Handle<Object> exports) {
  MyObject::Init(exports);
}

NODE_MODULE(objfac, InitAll)
