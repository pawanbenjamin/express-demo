const dogs = require('../db/dogs')

const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send(dogs)
})

router.post('/', (req, res, next) => {
  const body = req.body
  dogs.push(body)
  res.send(dogs)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  const singleDog = dogs.filter((dog) => dog.id === +id)[0]
  console.log('single dog====>', singleDog)
  res.send(singleDog)
})

module.exports = router
