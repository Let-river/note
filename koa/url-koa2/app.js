const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 提供post请求的body解析
const bodyParser = require('koa-bodyparser');

// 导入controller middleware:
const controller = require('./controller');

const app = new Koa();



// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

// 使用 middleware(中间件):
app.use(controller());

// add router middleware:
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');