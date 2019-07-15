import React from 'react'

// function Greet() {
//   return <h1>Hello saiprasad</h1>
// }

// This is another way of writing of above simple function i.e. arrow function
const Greet = (props) => {
    
    //Check the console on the browser log
    console.log(props)

    return <h1>Hello {props.name} aka {props.heroName}</h1>
}
export default Greet