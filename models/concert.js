// IMPORT MONGOOSE
const mongoose = require('./connection.js')

// CREATE CONCERT SCEMA
const ConcertSchema = new mongoose.Schema({
  concertName: String,
  date: String,
  description: String


  //  bandId: mongoose.ObjectId,
  //  venueId: mongoose.ObjectId

})

// CREATE CONCERT API
const ConcertCollection = mongoose.model('Concert', ConcertSchema)


// CRUD FUNCTIONS FOR CONCERT

const getAllConcerts = () => {
  return ConcertCollection.find()
}

const getOneConcert = (concertId) => {
  return ConcertCollection.findById(concertId)
}

const createConcert = (concertData) => {
  return ConcertCollection.create(concertData)
}

const updateConcert = (concertId, concertData) => {
  return ConcertCollection.updateOne({ _id: concertId }, concertData)
}

const deleteConcert = (concertId) => {
  return ConcertCollection.deleteOne({ _id: concertId })
}


// EXPORT CONCERT CRUD FUNCTIONS
module.exports = {
  getAllConcerts,
  getOneConcert,
  createConcert,
  updateConcert,
  deleteConcert
}
