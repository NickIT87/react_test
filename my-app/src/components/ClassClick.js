import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Clicked btn')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>ClassClick</button>
            </div>
        )
    }
}

export default ClassClick