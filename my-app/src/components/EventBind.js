import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        // NOT WORKING UNDEFINED
        this.setState({
            message: 'Goodbye'
        })
        console.log(this) // undefined
    }

    clickHandler2 = () => {
        this.setState({
            message: 'Godbye fourth approach'
        })
    }

    hyperloop() {
        for (let i = 0; i < 6; i++) {
            console.log(i)
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                <button onClick={() => this.clickHandler()}>Click second approach</button>
                <button onClick={this.clickHandler}>Click Third approach</button>
                <button onClick={this.clickHandler2}>Click Fourth approach</button>
                <button onClick={this.hyperloop}>test</button>
            </div>
        )
    }
}

export default EventBind