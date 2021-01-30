const jsonValidator = require('jsonschema').Validator;
var validator = new jsonValidator()

const userSchema = {
  title: 'rule-validator',
  type: "object",
  required: ["rule", "data"],
	rule: {
      field: {
          type: 'string'
        },
      condition: {
        type: 'string'
        },
      condition_value: {
          type: 'integer'
        },
      },
  data: {
      name: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      crew: {
        type: 'string'
      },
      age: {
        type: 'integer'
      },
      position: {
        type: 'string'
      },
      missions: {
        type: 'string'
      }
    }
}
validator.addSchema(userSchema)
module.exports = userSchema
