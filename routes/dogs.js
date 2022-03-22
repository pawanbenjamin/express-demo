const router = require('express').Router()
const dogs = require('../db/dogs')

router.get('/', (req, res, next) => {
  res.send(dogs)
})

router.post('/', (req, res, next) => {
  const body = req.body
  dogs.push(body)
  res.send(dogs)
})

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id
    const singleDog = dogs.filter((dog) => doge.id === +id)[0]
    res.send(singleDog)
  } catch (error) {
    next(error)
  }
})

module.exports = router
