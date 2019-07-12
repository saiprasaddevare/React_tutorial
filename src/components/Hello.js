
// This is require because JSX code i.e line 13 to 15 used it.
// How does it uses ? return from 13 to 15 line uses internally React.createElement function 
// which is part of React i.e we imported. So we need to import React when function or simple return
// is used 
import React from 'react'




// const Hello = () => {

// This is JSX code below 
// This ease JSX provide than JS. Can see below Hello function 

//   return (
//     <h1>Hello Saiprasad</h1>
//   )
// }



const Hello = () => {
  
  // This is simple JS code

  // There are 3 paramenter minimun 
  // first => Wrapper Elemenet
  // Second => Prop's of the Element
  // Third The UI to display

  return ( 
    React.createElement('div', null, React.createElement('h1', null, 'Hello Saiprasd'))
  )

}
export default Hello