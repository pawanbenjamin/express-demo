const express = require('express')
const PORT = 1234
const volleyball = require('volleyball')
const app = express()

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  const token = req.header('token')
  console.log('TOKEN->', token)
  if (!token) {
    res.status(404).send('You are un-authorized!')
    return
  }
  next()
})

app.use('/dogs', require('./routes/dogs'))

app.use((error, req, res, next) => {
  res.send({ sucess: false, message: error.message })
})

app.get('*', (req, res, next) => {
  res.status(404).send("Sorry, we couldn't find that route!!")
})

app.listen(PORT, () => {
  console.log(`...our server is listening on PORT ${PORT}`)
})
