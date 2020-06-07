import React, { Component } from 'react'

// Class component
class Welcome extends Component{
    render() {
        const {name, heroName} = this.props
        //const {state1, state2} = this.state
        //console.log(state1, state2)
        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default Welcome