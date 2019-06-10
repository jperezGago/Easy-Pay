const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  restaurant: [
    {
      name: String,
      background: {
        color: String,
        image: {
          imgName: String,
          imgPath: String
        }
      },
      logo: {
        imgName: String,
        imgPath: String
      },
      table:
      {
        quantity: Number,
        table_info: [
          {
            table_id: Number,
            qr_url: String,
            qr_image: {
              imgName: String,
              imgPath: String
            }
          }
        ]
      },
      menu: {
        starters: [
          {
            name: String,
            description: String,
            value: Number,
            currency_code: {
              type: String,
              default: "EUR"
            }
          }
        ],
        first_courses: [
          {
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
          }
        ],
        second_courses: [
          {
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
          }
        ],
        drinks: [
          {
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
          }
        ],
        desserts: [
          {
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
          }
        ]
      }
    }
  ]

}, {
    timestamps: true
  })

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant