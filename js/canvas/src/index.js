import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './1canvas入门.js';
// import App from './2cancas绘制表格.js';
// import App from './7图片绘制.js';
// import App from './8绘制序列帧动画';
// import App from './9面向对象的铺垫';
//  import App from './10面向对象的使用';
import App from './11绘制坐标系';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
