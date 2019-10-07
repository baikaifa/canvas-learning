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
        
        var x0=100;
        var y0=400;
        var maxHeight=300;
        var arrowWidth=10
        //绘制x轴
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.moveTo(x0,y0);
        ctx.lineTo(500,400);
        //往上面画箭头
        ctx.lineTo(500-arrowWidth,400-arrowWidth);
        ctx.moveTo(500,400)
        ctx.lineTo(500-arrowWidth,400+arrowWidth);
        ctx.stroke();
        //绘制y轴
        ctx.beginPath()
        ctx.strokeStyle="orange";   
        ctx.moveTo(x0,y0)
        ctx.lineTo(100,0);
        ctx.lineTo(100-arrowWidth,arrowWidth);
        ctx.moveTo(100,0)
        ctx.lineTo(100+arrowWidth,arrowWidth);
        ctx.stroke()
        //绘制线段
        var data=[.4,.5,.8,.7]
        var pointWidth=400/(data.length+1)
        ctx.beginPath()
        ctx.strokeStyle="blue";
        for(var i = 0;i < data.length; i++)
        {
            var x=x0+(i+1)*pointWidth
            var y=y0-data[i]*maxHeight;
            ctx.lineTo(x,y);
        }
        ctx.stroke()
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
