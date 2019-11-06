// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// BAND SCHEMA
const BandSchema = new mongoose.Schema({
 name: String,
 genre: String
})



// BAND API
const BandCollection = mongoose.model('Band', BandSchema)




// CRUD FUNCIONS

const getAllBands = () => {
  return BandCollection.find()
}

const getOneBand = (bandId) => {
  return BandCollection.findById(bandId)
}

const createBand = (bandData) => {
  return BandCollection.create(bandData)
}

const updateBand = (bandId, bandData) => {
  return BandCollection.updateOne({_id: bandId}, bandData)
} 

const deleteBand = (bandId) => {
  return BandCollection.deleteOne({_id: bandId})
}


// EXPORT FUNCTIONS
module.exports = {
  getAllBands,
  getOneBand,
  createBand,
  updateBand,
  deleteBand
}
