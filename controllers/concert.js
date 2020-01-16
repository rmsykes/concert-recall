// IMPORT EXPRESS
const express = require('express')

// IMPORT CONCERT API
const concertApi = require('../models/concert.js')

// CREATE CONCERT ROUTER
const concertRouter = express.Router()


// CONCERT REQUEST HANDLERS

// getAllConcerts()
concertRouter.get('/', (req, res) => {
  concertApi.getAllConcerts()
  .then((concerts) => {
    res.json(concerts)
  })
})


// getOneConcert()
concertRouter.get('/:concertId', (req, res) => {
  concertApi.getOneConcert(req.params.concertId)
  .then((oneConcert) => {
    res.json(oneConcert)
  })
})

// createConcert()
concertRouter.post('/', (req, res) => {
  concertApi.createConcert(req.body)
  .then((newConcert) => {
    res.json(newConcert)
  })
})

// updateConcert
concertRouter.put('/:concertId', (req, res) => {
  concertApi.updateConcert(req.params.concertId, req.body)
  .then((updatedConcert) => {
    res.json(updatedConcert)
  })
})

// deleteConcert
concertRouter.delete('/:concertId', (req, res) => {
  concertApi.deleteConcert(req.params.concertId)
  .then((deletedConcert) => {
    res.json(deletedConcert)
  })
})

//  EXPORT CONCERT ROUTER
module.exports = {
  concertRouter
}
