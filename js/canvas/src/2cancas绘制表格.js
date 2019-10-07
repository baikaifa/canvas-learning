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
      var rectH = 10;
      var rectW = 10;
      //绘制表格
      //第一步:绘制横线
      for (var i = 0; i < canvas.width / rectH; i++) {
        ctx.moveTo(0, i * rectH); //如果不设置moveTo,当前画笔没有位置
        ctx.lineTo(canvas.width, i * rectH);
        //第二步:绘制竖线
        ctx.stroke();
        ctx.moveTo(i * rectW, 0);
        ctx.lineTo(i * rectW, canvas.height);
      }
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
