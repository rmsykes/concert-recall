// IMPORT EXPRESS
const express = require('express')

// IMPORT BAND API
const bandApi = require('../models/band.js')

// CREATE ROUTER
const bandRouter = express.Router()


// REQUEST HANDLERS

// getAllCreatures()
bandRouter.get('/', (req, res) => {
  bandApi.getAllBands()
  .then((bands) => {
    res.json(bands)
  })
})

// getOneCreature()
bandRouter.get('/:bandId', (req, res) => {
  bandApi.getOneBand(req.params.bandId)
  .then((oneBand) => {
    res.json(oneBand)
  })
})

// createBand()
bandRouter.post('/', (req, res) => {
  bandApi.createBand(req.body)
  .then((newBand) => {
    res.json(newBand)
  })
})

// updateBand()
bandRouter.put('/:bandId', (req, res) => {
  bandApi.updateBand(req.params.bandId, req.body)
  .then((updatedBand) => {
    res.json(updatedBand)
  })
})

// deleteBand()
bandRouter.delete('/:bandId', (req, res) => {
  bandApi.deleteBand(req.params.bandId)
  .then((deletedBand) => {
    res.json(deletedBand)
  })
})



// EXPORT BAND ROUTER
module.exports = {
  bandRouter
}
