import React from 'react'
/*
function Greet() {
    return <h1>Hello Vishwas</h1>
}
*/

const Greet = (props) => {
console.log(props)
// props.name = 'Vishwas'  // ERROR, can not change props
return (
<div className="vishwas">
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    <p>Lorem ipsum dolor sit amet ... </p>
</div>
)
}

export default Greet;