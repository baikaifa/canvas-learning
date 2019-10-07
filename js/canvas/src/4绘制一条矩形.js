import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("textRef.current");
    (function() {
      var canvas = document.querySelector("#cavsElem");
      var ctx = canvas.getContext("2d");
      canvas.width = 600;
      canvas.height = 600;
      canvas.style.border = "1px solid #000";
        
      //前两个参数是:矩形的x,y坐标,后面两个参数:矩形的宽高
      //ctx.rect(x,y,w,h)
      ctx.stroke();
      //描边矩形
      ctx.strokeRect(200,200,100,150);
        //填充矩形
    

    })();
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
