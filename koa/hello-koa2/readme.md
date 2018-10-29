### koa 入门

#### 创建 koa2 工程

首先，我们创建一个目录 `hello-koa` 并作为工程目录用 VS Code 打开。然后，我们创建 `app.js`，输入以下代码：

```
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';                // 设置 response 的 Content-Type
    ctx.response.body = '<h1>Hello, koa2!</h1>';    // 设置 response 的内容
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
```

每收到一个 http 请求，koa 就会调用通过 `app.use()` 注册的 async 函数，并传入 `ctx` 和 `next` 参数。

其中，参数 `ctx` 是由 koa 传入的封装了 `request` 和 `response` 的变量，我们可以通过它访问 `request` 和 `response` ，`next` 是 koa 传入的将要处理的下一个异步函数。

上面的异步函数中，我们首先用 `await next();` 处理下一个异步函数，然后，设置 `response` 的 Content-Type 和内容。

由 `async` 标记的函数称为异步函数，在异步函数中，可以用 `await` 调用另一个异步函数，这两个关键字将在 ES7 中引入。

##### 安装 koa2

现在我们遇到第一个问题：koa 这个包怎么装，app.js 才 能正常导入它？

方法一：可以用 npm 命令直接安装 koa。先打开命令提示符，务必把当前目录切换到 hello-koa 这个目录，然后执行命令：

```
 npm install koa@2.0.0
```

npm 会把 koa2 以及 koa2 依赖的所有包全部安装到当前目录的 node_modules 目录下。

方法二：在 hello-koa 这个目录下创建一个 `package.json` ，这个文件描述了我们的 hello-koa 工程会用到哪些包。完整的文件内容如下：

```
{
    "name": "hello-koa2",
    "version": "1.0.0",
    "description": "Hello Koa 2 example with async",
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    },
    "keywords": [
        "koa",
        "async"
    ],
    "author": "Michael Liao",
    "license": "Apache-2.0",
    "repository": {
        "type": "git",
        "url": "https://github.com/michaelliao/learn-javascript.git"
    },
    "dependencies": {
        "koa": "2.0.0"
    }
}
```

其中，`dependencies` 描述了我们的工程依赖的包以及版本号。其他字段均用来描述项目信息，可任意填写。

然后，我们在 hello-koa 目录下执行 `npm install` 就可以把所需包以及依赖包一次性全部装好：

```
npm install
```

很显然，第二个方法更靠谱，因为我们只要在 `package.json` 正确设置了依赖，npm 就会把所有用到的包都装好。

注意，任何时候都可以直接删除整个 node_modules 目录，因为用 `npm install` 命令可以完整地重新下载所有依赖。并且，这个目录不应该被放入版本控制中。

##### 启动 koa2 工程

可以直接用命令 `node app.js` 在命令行启动程序，或者用 `npm start` 启动。`npm start`命令会让 npm 执行定义在 `package.json` 文件中的 start 对应命令：

```
"scripts": {
    "start": "node app.js"
}
```

#### middleware （中间件）

让我们再仔细看看 koa 的执行逻辑。核心代码是：

```
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
```

我们可以对 `ctx` 操作，并设置返回内容。但是为什么要调用 `await next()` ？

原因是 koa 把很多 async 函数组成一个处理链，每个 async 函数都可以做一些自己的事情，然后用 `await next()` 来调用下一个 async 函数。我们把每个 async 函数称为 middleware（中间件），这些 middleware 可以组合起来，完成很多有用的功能。

例如，可以用以下 3 个 middleware 组成处理链，依次打印日志，记录处理时间，输出 HTML：

```
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印 URL
    await next(); // 调用下一个 middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个 middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
```

middleware 的顺序很重要，也就是调用 `app.use()` 的顺序决定了 middleware 的顺序。

此外，如果一个 middleware 没有调用 `await next()` ，会怎么办？ 答案是后续的 middleware 将不再执行了。这种情况也很常见，例如，一个检测用户权限的 middleware 可以决定是否继续处理请求，还是直接返回 403 错误：

```
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});
```

理解了 middleware，我们就已经会用 koa 了！

最后注意 `ctx` 对象有一些简写的方法，例如 `ctx.url` 相当于 `ctx.request.url`，`ctx.type`相当于 `ctx.response.type`。

#### 处理 URL

在 hello-koa 工程中，我们处理 http 请求一律返回相同的 HTML，这样虽然非常简单，但是用浏览器一测，随便输入任何 URL 都会返回相同的网页。

正常情况下，我们应该对不同的 URL 调用不同的处理函数，这样才能返回不同的结果。例如像这样写：

```
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = 'index page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/test') {
        ctx.response.body = 'TEST page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/error') {
        ctx.response.body = 'ERROR page';
    } else {
        await next();
    }
});
```

这么写是可以运行的，但是好像有点蠢。

应该有一个能集中处理 URL 的 middleware，它根据不同的 URL 调用不同的处理函数，这样，我们才能专心为每个 URL 编写处理函数。

##### koa-router

为了处理 URL，我们需要安装并引入 `koa-router` 这个 middleware，让它负责处理 URL 映射。
