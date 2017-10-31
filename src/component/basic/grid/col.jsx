import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Col extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const colStyle = {
      margin: `0 ${this.props.gutter/2}px`,
      order: this.props.order
    }

    const className = {
      span: this.props.span ? `ice-col-span-${this.props.span}` : '',
      customClass : this.props.customClass,
    }

    return (
      <div 
        className={`ice-col ${className.span} ${className.customClass}` } 
        style={ colStyle }
      >
        { this.props.children }
      </div>
    )
  }
}

Col.propTypes = {
  span: PropTypes.number, // 栅格占位格数
  gutter: PropTypes.number, // row中获取，左右间距
  order: PropTypes.number, // flex 布局顺序
  customClass: PropTypes.string,
};

Col.defaultProps = {
  gutter: 0,
  order: 0,
  customClass : '',
};

module.exports = Col