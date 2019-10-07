import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("textRef.current");
    //第三种创建对象方式
    // function Cat() {
    //     this.age = 18;
    //   }
    //   Cat.prototype.show=function (){
    //         console.log(this.age);
    //   }
    //   var cat = new Cat(); //通过构造函数 构造一个对象出来
    //   var cat1 = new Cat();
    //   cat.age=20
    //   cat1.age=23
    //   cat.show()
    //   cat1.show()
    //升级
    //   function Cat(age,x,y) {
    //     this.age = 18;
    //     this.x=x;
    //   }
    //   Cat.prototype.show=function (){
    //         console.log(this.age);
    //   }
    //   var cat = new Cat(); //通过构造函数 构造一个对象出来
    //   var cat1 = new Cat();
    //   cat.age=20
    //   cat1.age=23
    //   cat.show()
    //   cat1.show()
    //参数改造一下
    // function Cat(option) {
    //   this.age = option.age;
    //   this.x = option.x;
    // }
    // Cat.prototype.show = function() {
    //   console.log(this.age);
    // };
    // var cat = new Cat({
    //   x: 19,
    //   age: 18
    // });
//另一种
    function Cat(option) {
      this._init(option);
    }
    Cat.prototype = {
      _init: function(option) {
        this.age = option.age || "";
      },
      show: function() {
        console.log(this.age);
      }
    };
    var c = new Cat({
      x: 19,
      age: 18
    });
    console.log(c.show());
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
