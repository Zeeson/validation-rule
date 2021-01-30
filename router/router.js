const express = require('express')
const router = express.Router()
const { dataValidate } = require("../validation")
const data = require('../data/internDetails')
const validation = require('../validation')
const { check, validationResult } = require('express-validator')

// get route
router.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Intern Information',
      status: "success",
      data: data,
      rule: validation
  })
})

// Post route
router.post('/validate-rule',
    [
      check('rule', 'Rule is required')
          .isString(),
      check('data', 'Data is required')
          .isString()
          .notEmpty()
          .isArray()
    ], (req, res) => {
  const error = validationResult(req).array();
  if (error){
    return res.status(200).json({
      status: 'error sending details'
    })
  } else {
      if(validation.rule.condition_value >= validation.data){
        return res.status(200).json('success')
      }
  }
})

module.exports = router;
