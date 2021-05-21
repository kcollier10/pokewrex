import React, { Component } from 'react'
import '../css/register.css'
import { useState } from 'react'

export default class Dashboard extends Component {
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')

    render () {
        return (
            <div className="register">
                <h5>Join Pokewrex!</h5>
                <form action="auth" method="POST" className="register">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

    // constructor() {
    //     super();
    //     this.state = {
    //         show: false
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    // }
    //
    // showModal = () => {
    //     this.setState({ show: true })
    // }
    //
    // hideModal = () => {
    //     this.setState({ show: false})
    // }
