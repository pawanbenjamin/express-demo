// * Example of custom auth middleware
// app.use((req, res, next) => {
//   const token = req.header('token')
//   if (!token) {
//     res.status(401).send('You are un-authorized!')
//     return
//   }
//   next()
// })

//* this will crash our server because it is a sync
// app.get('/', (req, res, next) => {
//   setTimeout(() => {
//     console.log('Async code example.')
//     throw new Error('Hello Error!')
//   }, 1000)
// })

//* Custom error handler
// app.use((error, req, res, next) => {
//   res.send({ sucess: false, message: error.message })
// })

//* Not technically error handling, but a 'catch all' route
// app.get('*', (req, res, next) => {
//   res.status(404).send("Sorry, we couldn't find that route!!")
// })
