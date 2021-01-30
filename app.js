const express = require('express')
const url = require('./router/router')
const app = express()
const Port = 3300

app.use("/", url);
app.use(express.json())

app.listen(Port, () => {
  console.log('Server listening @' + Port)
})
