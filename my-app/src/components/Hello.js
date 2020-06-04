import React from 'react'
// jsx syntax
const Hello = () => {
//    return (
//        <div>
//            <h1>Hello Vishwas</h1>
//        </div>
//    )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'myhelloclass'}, 
        React.createElement('h1', null, 'Hello Vishwas')
    )

}

export default Hello