// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE VENUE SCHEMA
const VenueSchema = new mongoose.Schema({
  venueName: String,
  location: String,
  capacity: Number
})


// CREATE VENUE API
const VenueCollection = mongoose.model('Venue', VenueSchema)


// CRUD FUNCTIONS FOR VENUE

const getAllVenues = () => {
  return VenueCollection.find()
}

const getOneVenue = (venueId) => {
  return VenueCollection.findById(venueId)
}

const createVenue = (venueData) => {
  return VenueCollection.create(venueData)
}

const updateVenue = (venueId, venueData) => {
  return VenueCollection.updateOne({ _id: venueId}, venueData)
}

const deleteVenue = (venueId) => {
  return VenueCollection.deleteOne({ _id: venueId })
}

// EXPORT VENUE CRUD FUNCTIONS
module.exports = {
  getAllVenues,
  getOneVenue,
  createVenue,
  updateVenue,
  deleteVenue
}
