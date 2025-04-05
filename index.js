const express = require('express');
const app = express();
const port = 3000;
const pool = require('./config/db');

app.use(express.static('public'));

// 添加JSON解析中间件
app.use(express.json());

app.get('/', (req, res) => {
  res.send('最基本的Node.js后端服务');
});

const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

app.listen(port, () => {
  
  console.log(`服务器运行在:${port}`);
});