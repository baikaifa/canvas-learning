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
//direction:方向
var dirIndex=0
var img=new Image()
img.src=require('./imgs/a.jpg')
img.onload = function() {
    var frameIndex = 0;
    setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, frameIndex * 40, dirIndex*65, 40, 65, 200, 200, 80, 65 * 2);
      frameIndex++; //添加到下一帧
      frameIndex %= 4; //取余数
    }, 1000 / 10);
    ctx.drawImage(img, 40, 65, 40, 65, 300, 300, 40, 65);
  };

      //绑定按钮的点击事件
      var btnLeft = document.getElementById("btn-dir-left");
      btnLeft.onclick = function() {
          dirIndex=1;
      };
    })();
  });
  return (
    <div className="App">
      {/* 设置canvas标签的狂傲是通过canvas标签的属性进行设置
        不要用css去设置会拉伸画布
        ie9以上才支持  不支持就是个div */}
      <canvas id="cavsElem" width="600px" height="600"></canvas>
      <div id="btn-dir-left">←</div>
      <div id="btn-dir-right">→</div>
      <div id="btn-dir-up">↑</div>
      <div id="btn-dir-left">↓</div>
    </div>
  );
}

export default App;
