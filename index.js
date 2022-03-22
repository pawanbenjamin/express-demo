const express = require('express')
const volleyball = require('volleyball')
const PORT = 1234
const app = express()

app.use(volleyball)
app.use(express.json())

// * Example of custom auth middleware
app.use((req, res, next) => {
  const token = req.header('token')
  if (!token) {
    res.status(401).send('You are un-authorized!')
    return
  }
  next()
})

//* this will crash our server because it is a sync
// app.get('/', (req, res, next) => {
//   setTimeout(() => {
//     console.log('Async code example.')
//     throw new Error('Hello Error!')
//   }, 1000)
// })

app.use('/dogs', require('./routes/dogs'))

app.get('/error', (req, res, next) => {
  const err = new Error('Ooops')
  next(err)
})

app.use((error, req, res, next) => {
  res.send({ status: 'nope', message: error.message })
})

// app.get('*', (req, res, next) => {
//   res.status(404).send('That is not found!')
// })

app.listen(PORT, () => {
  console.log(`...ayyyyy we're up and running at ${PORT}`)
})
