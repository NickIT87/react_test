import React from 'react'

// Destructuring props and state
/*
const L12Greet = props => {
    console.log(props)
    return (
        <div className="less11">
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
        </div>
    )
}
*/
const L12Greet = props => {
    const {name, heroName} = props
    return (
        <div className="less11">
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}


export default L12Greet;