#ifndef MYOBJ_H
#define MYOBJ_H

#include <node.h>
#include <node_object_wrap.h>

class MyObject : public node::ObjectWrap {
  public:
    static void Init();
    static void NewInstance(const v8::FunctionCallbackInfo<v8::Value>& args);
    inline double value() const { return value_; }
  
  private:
    explicit MyObject(double value = 0);
    ~MyObject();

    static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
    static v8::Persistent<v8::Function> constructor;
    double value_;
};

#endif
