const express = require('express')
const router = express.Router()

const User = require('../models/user.model')


router.post('/newRestaurant', (req, res) => {
  const { restaurant, user_id } = req.body
  User.update({ _id: user_id }, { $push: { restaurants: restaurant } })
    .then(data => res.json(data))
    .catch(error => console.log(error))
})


router.get('/getRestaurant/:restaurant_id/:restaurant_name/:table_id', (req, res) => {
  Coaster.findById(xxxx)
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
})





module.exports = router