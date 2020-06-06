import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // use setState very important for ui
        this.setState(
            {
                count: this.state.count + 1  
            }, 
            () => {
                console.log('Callback value: ', this.state.count)
            }
        )
        console.log(this.state.count)       
    }

    incrementa() {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            })
        )
        console.log(this.state.count)
    }

    incrementFive() {
        this.incrementa()
        this.incrementa()
        this.incrementa()
        this.incrementa()
        this.incrementa()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
            </div>
        )
    }
}

export default Counter