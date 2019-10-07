import React, { useRef, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("textRef.current");
    //第一步拿到canvas标签
    var canvas = document.getElementById("demo");
    //第二步拿到canvas上下文
    var ctx = canvas.getContext("2d");
    //第三步绘制
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(100, 200);
    //设置线宽
    ctx.lineWidth = 4;
    ctx.closePath(); //闭合路径
    ctx.strokeStyle = "red"; //rgb() rgba()
    ctx.stroke(); //描边
ctx.fillStyle="green";
    //进行填充的工作
    ctx.fill();
  });
  return (
    <div className="App">
      {/* 设置canvas标签的狂傲是通过canvas标签的属性进行设置
        不要用css去设置会拉伸画布
        ie9以上才支持  不支持就是个div */}

      <canvas id="demo" width="600px" height="600"></canvas>
    </div>
  );
}

export default App;
