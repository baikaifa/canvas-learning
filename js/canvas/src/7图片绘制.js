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

      //   var img2=document.getElementById('imgDemo');
      //第一步:创建图片dom对象
      var img = new Image();
      img.src = require("./imgs/a.png");

      img.onload = function() {
        //图片加载完成后，把图片绘制到canvas上
        // ctx.drawImage(img,100,100);
        // for(var i = 0;i < 10; i++)
        // {
        //     ctx.drawImage(img,100+20*i,100+i*20,);
        // }
        var ow = img.width;
        var oh = img.height;
        ctx.drawImage(img, 100, 100, 400, (400 * oh) / ow);
      };
      //绘制指定的裁剪图片
      var img2 = new Image();
      img2.src = require("./imgs/大文件.jpg");
      img2.onload = function() {
        var frameIndex = 0;
        setInterval(function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, frameIndex * 40, 0, 40, 65, 200, 200, 80, 65 * 2);
          frameIndex++; //添加到下一帧
          frameIndex %= 4; //取余数
        }, 1000 / 10);
        ctx.drawImage(img2, 40, 65, 40, 65, 300, 300, 40, 65);
      };
    })();
  });
  return (
    <div className="App">
      {/* 设置canvas标签的狂傲是通过canvas标签的属性进行设置
        不要用css去设置会拉伸画布
        ie9以上才支持  不支持就是个div */}
      <canvas id="cavsElem" width="600px" height="600"></canvas>
      {/* <img src="" id="imgDemo" alt=""/> */}
    </div>
  );
}

export default App;
