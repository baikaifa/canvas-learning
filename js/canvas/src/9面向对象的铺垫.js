import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("textRef.current");

    //创建对象的方式
    //第一种:json的方式创建对象
    var o = { key: 'value' };
    var arrar = [1, 2, 4, {}];
    var o = {
      name: "itcast",
      age: 18,
      sayHi: function() {
        console.log("name:" + this.name + "" + this.age);
      }
      //缺点:不能把json对象当做一个模板，通过new来构造一个新对象
      //给json对象添加属性
    };
    o.color = "red"; //js一个动态语言
    o.show = function() {};
    //第二种:创建对象的方式
    var o2 = new Object(); //创建一个object对象
    o2.age = 19;
    o2.show = function() {};
    //第三种:创建对象的方式
    //Cat.prototype
    function Cat() {
      //cat:猫
      //this={} 让this指向一个空对象
      //   var t={}
      //   this=t
      //   t.__proto__=Cat.prototype

      this.age = 18;
      this.show = function() {
        console.log(this.age);
      };
      this.name = "1123"; //污染全局
      return this;
    }

    var cat = new Cat(); //通过构造函数 构造一个对象出来
    cat.show();
    var cat1 = new Cat();
    // cat===cat1 //false
    //new:内部的原理
    //第零步:在内存中开辟一块空间
    //第一步:创建一个新空对象
    //第二步:把this指向到这个空对象
    //第三步:把空对象的 内部原型 指向 构造函数的原型对象
    //第四步:当构造函数执行完成后，如果没有return，那么把当前空对象返回
    //如果构造函数有return
    function Bird() {
      this.age = 19;
      this.show = function() {};
      return {
        demo: "1234"
      };
    }
    var t= new Bird()
    console.log(t.demo);
  });
  return (
    <div className="App">
      {/* 设置canvas标签的狂傲是通过canvas标签的属性进行设置
        不要用css去设置会拉伸画布
        ie9以上才支持  不支持就是个div */}
      <canvas id="cavsElem" width="600px" height="600"></canvas>
    </div>
  );
}

export default App;
