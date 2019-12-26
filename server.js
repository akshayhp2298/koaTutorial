const Koa = require("koa")
const app = new Koa()
const router = require("./src/routes")
const bodyParser = require('koa-bodyparser');
const errorMiddleware = require("./src/middleware/error.middleware")
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(errorMiddleware)
module.exports = app
