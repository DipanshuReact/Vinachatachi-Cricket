const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/Cricket"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('connected to mongo')
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectToMongo;
