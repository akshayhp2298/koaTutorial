const { createUser, login } = require("../controller/user.controller")
const {
  validateEmail,
  validatePassword,
  validateName
} = require("../validator/user.validator")
const validate = require("../middleware/validator")
module.exports = Router => {
  const router = new Router({
    prefix: `/user`
  })

  router.post("/login", validate([validateEmail, validatePassword]), login)

  router.post(
    "/create",
    validate([validateEmail, validatePassword, validateName]),
    createUser
  )
  
  return router
}
