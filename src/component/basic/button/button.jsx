import React, { Component } from 'react'

class Button extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <button type="button" className="ice-button">
        <span>{ this.props.children }</span>
      </button>
    )
  }
}

module.exports = Button