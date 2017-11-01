import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const className = {
      type: this.props.type ? `ice-btn-${this.props.type}` : '',
    }

    return (
      <button type="button" className={`ice-btn ${className.type}`}>
        <span>{this.props.children}</span>
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['', 'primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']),
}

Button.defaultProps = {
  type: '',
}

export default Button
