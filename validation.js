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

const validation = {
  rule: {
    field: 'mission',
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: '',
    crew: '',
    age: 34,
    position: 'Captain',
    mission: 45
  }
}

const dataValidate = (data) =>{
    const validationSchema = expressValidator.object({
        name:expressValidator.string().min(4).required(),
        github:expressValidator.string().min(4).required(),
        email:expressValidator.string().min(4).required().email(),
        mobile:expressValidator.num().min(4).required(),
        twitter:expressValidator.string().min(4).required(),
    })
    return validationSchema.validate(data)
}

// to export signup validation: username, email and password
module.exports.dataValidate = dataValidate
module.exports = validation
