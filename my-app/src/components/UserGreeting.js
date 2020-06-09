import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        /*
        if (this.state.isLoggedIn) {
            return <div><p>Welcome Vishwas</p></div>
        } else {
            return <div><p>Welcome Guest</p></div>
        }
        */

        /*
        let message
        if (this.state.isLoggedIn) {
            message = <div><p>Welcome Vishwas</p></div>
        } else {
            message = <div><p>Welcome Guest</p></div>
        }

        return <div>{message}</div>
        */

        /*
        return this.state.isLoggedIn ? (
            <div><p>Welcome Vishwas</p></div>
        ) : (
            <div><p>Welcome Guest</p></div>
        )
        */

        return this.state.isLoggedIn && <div><p>Welcome Vishwas</p></div>
    }
}

export default UserGreeting