import React, { Component } from 'react'
import PropTypes from 'prop-types'

// gutter 栅格元素左右间距 
class Row extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const cloneChild = this.props.children.map((child,index)=>{
      return React.cloneElement(child, {
        gutter: this.props.gutter,
        key: `${index}-row`
      })
    })

    const className = {
      type: this.props.type ? `ice-row-${this.props.type}` : '',
      justify: this.props.justify ? `ice-row-flex-${this.props.justify}` : '',
      align: this.props.align ? `ice-row-flex-${this.props.align}` : '',
      customClass : this.props.customClass
    }

    return (
      <div className={ `ice-row ${className.type} ${className.justify} ${className.align} ${className.customClass}` }>
        { cloneChild }
      </div>
    )
  }
}

Row.propTypes = {
  type: PropTypes.string, // 是否使用flex布局
  justify: PropTypes.oneOf(['','start','end','center','space-between','space-around']), // flex 水平排列方式
  align: PropTypes.oneOf(['','top','middle','bottom']), // flex 垂直排列方式
  customClass: PropTypes.string
};

Row.defaultProps = {
  type: '',
  justify: '',
  align: '',
  customClass : ''
};

export default Row
