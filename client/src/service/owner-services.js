import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: `${process.env.URLLOCAL}:${process.env.PORT}/api/`
    })
  }


  postRestaurant = (restaurant, user_id) => {
    return this.service.post('newRestaurant', restaurant, user_id)
      .then(res => res.data)
      .catch(err => console.log(err))
  }

  getOneCoaster = (user_id, name_restaurant) => {
    return this.service.get(`getRestaurant/${user_id}/${name_restaurant}`)
      .then(res => res.data)
      .catch(err => console.log('Error', err))
  }
}