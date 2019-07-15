
import React, { Component } from 'react'


class Message extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Click me to subscribe'
    }
  }

  subscribe() {
    this.setState({
      message: 'Thankyou for subscribing'
    })
  }


  render() {
    return (
      <div>
        <span>{this.state.message}</span>
        <button onClick={() => this.subscribe()}>Click me</button>
      </div>
    )
  }
}


export default Message

