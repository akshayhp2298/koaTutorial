const Router = require("koa-router")

const router = new Router({
  prefix: "/api"
})
const userRouter = require("./user.routes")(Router)
const routes = [userRouter]
routes.forEach(route => router.use(route.routes()))
router.get("/", ctx => {
  ctx.body = "hello"
})
module.exports = router
