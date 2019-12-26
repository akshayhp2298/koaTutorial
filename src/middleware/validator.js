const blueBird = require("bluebird")

module.exports = validators => async (ctx, next) => {
  const errors = []
  const results = await blueBird.map(validators, async validator => {
    if (typeof validator !== "function") {
      throw new Error("Validator is not a function")
    }
    return await validator(ctx, next)
  })
  results.forEach(
    result =>
      result && errors.push({ message: result.message, field: result.field })
  )
  const properties = {
    reasons: errors.map(err => ({
      message: err.message,
      field: err.field
    }))
  }
  if (errors.length !== 0) {
    console.log("properties", properties)
    ctx.throw(400, "validation  failed", properties)
  }
  next()
}
