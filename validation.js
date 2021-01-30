// To validate inputs
const expressValidator = require('express-validator')
const { body, validationResult } = require('express-validator')

const validationRule = () => {
  return [
    body('field', 'Field is required')
    .isString(),
    body('data', 'Data is required')
    .isString()
    .notEmpty()
    .isArray()
  ]
}


module.exports = validationRule
