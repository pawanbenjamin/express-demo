const express = require('express')
const volleyball = require('volleyball')
const PORT = 1234
const app = express()

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/dogs', require('./routes/dogs'))

app.listen(PORT, () => {
  console.log(`...ayyyyy we're up and running at ${PORT}`)
})
