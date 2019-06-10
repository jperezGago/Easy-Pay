import React, { Component } from 'react'
import OwnerServices from '../service/owner-services'


class RestaurantForm extends Component {

    constructor() {
        super()

        this.state = {

            restaurant: {
                name: '',
                background: {
                    color: '',
                    image: {
                        imgName: '',
                        imgPath: '',
                    }
                },
                logo: {
                    imgName: '',
                    imgPath: '',
                },
                table: [
                    {
                        table_id: ''
                    }
                ]
            },

            show: false
        }

        this.services = new OwnerServices()
    }


    handleSubmit = e => {
        e.preventDefault()
        this.services.postRestaurant(this.state.restaurant)
            .then(x => window.location.href = "/coasters")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Nombre</label>
                        <input onChange={this.handlechange} value={this.state.coaster.title} type="text" className="form-control" id="title" name="title" />
                    </div>
                    <button type="submit" className="btn btn-dark">Enviar</button>
                </form>
            </div>
        )
    }
}


export default RestaurantForm