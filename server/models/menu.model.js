const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
  type: {
    type: String,
    enum: [starters, first_courses, second_courses, drinks, desserts]
  },
  name: String,
  description: String,
  value: Number,
  currency_code: {
    type: String,
    default: "EUR"
  },
  image: {
    imgName: String,
    imgPath: String
  }

}, {
    timestamps: true
  })

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu