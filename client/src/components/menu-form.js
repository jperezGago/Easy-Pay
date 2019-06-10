import React, { Component } from 'react'
import OwnerServices from '../service/coaster-services'


class MenuForm extends Component {

    constructor() {
        super()

        this.state = {

            restaurant: {
                menu: {
                    starters: [
                        {
                            name: '',
                            description: '',
                            value: '',
                        }
                    ],
                    first_courses: [
                        {
                            name: '',
                            description: '',
                            value: '',
                            image: {
                                imgName: '',
                                imgPath: ''
                            }
                        }
                    ],
                    second_courses: [
                        {
                            name: '',
                            description: '',
                            value: '',
                            image: {
                                imgName: '',
                                imgPath: ''
                            }
                        }
                    ],
                    drinks: [
                        {
                            name: '',
                            description: '',
                            value: '',
                            image: {
                                imgName: '',
                                imgPath: ''
                            }
                        }
                    ],
                    desserts: [
                        {
                            name: '',
                            description: '',
                            value: '',
                            image: {
                                imgName: '',
                                imgPath: ''
                            }
                        }
                    ]
                }
            },

            show: false
        }

        this.services = new OwnerServices()
    }


    handleSubmit = e => {
        e.preventDefault()
        this.services.postMenu(this.state.restaurant.menu)
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


export default MenuForm