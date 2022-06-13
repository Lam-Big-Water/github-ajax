// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
});
// 4.监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})