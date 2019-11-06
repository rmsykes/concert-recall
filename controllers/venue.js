// IMPORT EXPRESS
const express = require('express')

// IMPORT VENUE API
const venueApi = require('../models/venue.js')

// CREATE VENUE ROUTER
const venueRouter = express.Router()


// REQUEST HANDLERS

// getAllVenues()
venueRouter.get('/', (req, res) => {
  venueApi.getAllVenues()
  .then((venues) =>{
    res.json(venues)
  })
})

// getOneVenue()
venueRouter.get('/:venueId', (req, res) => {
  venueApi.getOneVenue(req.params.venueId)
  .then((oneVenue) => {
    res.json(oneVenue)
  })
})

// createVenue()
venueRouter.post('/', (req, res) => {
  venueApi.createVenue(req.body)
  .then((newVenue) => {
    res.json(newVenue)
  })
})

// updateVenue()
venueRouter.put('/:venueId', (req, res) => {
  venueApi.updateVenue(req.params.venueId, req.body)
  .then((updatedVenue) => {
    res.json(updatedVenue)
  })
})

// deleteVenue()
venueRouter.delete('/:venueId', (req, res) => {
  venueApi.deleteVenue(req.params.venueId)
  .then((deletedVenue) => {
    res.json(deletedVenue)
  })
})

// EXPORT VENUE ROUTER
module.exports = {
  venueRouter
}
