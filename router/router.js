const express = require('express')
const router = express.Router()
const { dataValidate } = require("../validation")
const data = require('../data/internDetails')
const validation = require('../validation')
// const { check, validationResult } = require('express-validator')
const userSchema = require('../internSchema')


// get route
router.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Intern Information',
      status: "success",
      data: data
  })
})

// Post route
router.post('/validate-rule', (req, res) => {
  if(req.get('Content-Type') != 'application/json'){
    res.status(401).json('Invalid header format');
    return;
  }
  try{
      validator.validate(req.body, userSchema, {throwError: true})
  } catch(error){
    res.status(401).json('Invalid body format:' + error.message)
    return;
  } res.status(200).json('Valid request format')
})

module.exports = router;
