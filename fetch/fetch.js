// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装

// fetch 服务
app.all('/fetch-server', (request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    // 设置响应
    const data = {name:'atguigu'};
    response.send(JSON.stringify(data));
    //response.send('Hello JQuery AJAX');
});


// 4.监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})