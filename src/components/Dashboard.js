import React, { Component } from 'react'
import Modal from './RegisterModal'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false})
    }

    render () {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <h5>Register below:</h5>
                    <form action="auth" method="POST" className="register">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="submit" placeholder="Register"/>
                    </form>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    Join today!
                </button>
            </div>
        )
    }
}

export default Dashboard;