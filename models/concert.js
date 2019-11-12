// IMPORT MONGOOSE
const mongoose = require('./connection.js')

// CREATE CONCERT SCEMA
const ConcertSchema = new mongoose.Schema({
  concertName: String,
  date: String,
  description: String,
  bandId: mongoose.Types.ObjectId,
  venueId: mongoose.Types.ObjectId,
  myConcertVideo: String
})

// CREATE CONCERT API
const ConcertCollection = mongoose.model('Concert', ConcertSchema)


// CRUD FUNCTIONS FOR CONCERT

// getAllConcerts()
const getAllConcerts = () => {
  return ConcertCollection.find()
}

// getOneConcert()
const getOneConcert = (concertId) => {
  return ConcertCollection.findById(concertId)
}

// createConcert()
const createConcert = (concertData) => {
  return ConcertCollection.create(concertData)
}

// updateConcert()
const updateConcert = (concertId, concertData) => {
  return ConcertCollection.updateOne({ _id: concertId }, concertData)
}

// deleteConcert()
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
