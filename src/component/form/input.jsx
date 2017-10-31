import React, { Component } from 'react'
require ('./style.css')

class Input extends Component {
  render(){
    return (
      <input type="text" placeholder={ this.props.placeholder } /> 
    )
  }
}

module.exports = Input