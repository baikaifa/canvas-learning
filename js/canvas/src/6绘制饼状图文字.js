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

      //绘制一条0到30的弧
      //弧度和角度的转换公式 :rad=30*Math.PI/180
      //   ctx.moveTo(300, 300);
      //   ctx.arc(300, 300, 100, (0 * Math.PI) / 180, (30 * Math.PI) / 180, true);
      //   ctx.closePath();
      //   ctx.fill()
      //   ctx.stroke();
      //绘制扇形
      // ctx.moveTo(300,300)
      // ctx.fillStyle="red";
      // ctx.arc(300,300,100,(-90 * Math.PI) / 180, (30 * Math.PI) / 180)
      // ctx.fill()

      var data = [
        { value: .2, color: "red", title: "应届生" },
        { value: .3, color: "blue", title: "社会招生" },
        { value: .4, color: "green", title: "老学员推荐" },
        { value: .1, color: "#ccc", title: "公开课" }
      ];
  
      var tempAngle = -90; //绘制到那个角度了，起始角度是-90度
      ctx.moveTo(x0, y0);
      var x0 = 400,
      y0 = 400;
    var radius = 200;
      //从-90度开始绘制
      for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        //当前扇形的角度
        var angle = data[i].value * 360;
        ctx.fillStyle = data[i].color;
        //开始从tempAngle绘制
        var startAngle = (tempAngle * Math.PI) / 180;
        //从tempAngle绘制到我们自己的angle区域
        var endAngle = ((tempAngle + angle) * Math.PI) / 180;
        ctx.arc(x0, y0, radius, startAngle, endAngle);
        //绘制文字
        var txt = data[i].value * 100 + "%";
        var x, y;
        var txtAngle = tempAngle + (1 / 2) * angle;
        x = x0 + Math.cos((txtAngle * Math.PI) / 180) * (radius + 20);
        y = y0 + Math.sin((txtAngle * Math.PI) / 180) * (radius + 20);
        if (txtAngle > 90 && txtAngle < 270) {
          ctx.textAlign = "end";
        }
        console.log(txt); 
        console.log(x);
        console.log(y);
        ctx.fillText(txt, x, y);
        ctx.fill();
        tempAngle += angle; //下一次绘制的起始角度
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
