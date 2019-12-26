const passwordValidator = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
)
const emailValidator = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
const nameValidator = new RegExp(/^[a-zA-Z ]{2,30}$/)

module.exports.validateName = ctx => {
  const { name } = ctx.request.body
  if (typeof name !== "string")
    return { message: "name is not valid", field: "name" }
  if (!name) return { message: "name not found", field: "name" }
  if (!nameValidator.test(name))
    return { message: "name is not valid", field: "name" }
  return null
}
module.exports.validatePassword = ctx => {
  const { password } = ctx.request.body
  if (typeof password !== "string")
    return { message: "password is not valid", field: "password" }
  if (!password) return { message: "password not found", field: "password" }
  if (!passwordValidator.test(password))
    return { message: "password is not valid", field: "password" }
  return null
}
module.exports.validateEmail = ctx => {
  const { email } = ctx.request.body
  if (typeof email !== "string")
    return { message: "email is not valid", field: "email" }
  if (!email) return { message: "email not found", field: "email" }
  if (!emailValidator.test(email))
    return { message: "email is not valid", field: "email" }
  return null
}
