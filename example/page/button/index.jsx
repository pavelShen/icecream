import React from 'react'
import { Button, ButtonGroup } from '../../../src/component/basic/button/main'

require('./style.css')

class Grid extends React.Component {
  render() {
    return (
      <div className="main-box">
        <h3>类型 type</h3>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br />
        <Button type="info">信息按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
      </div>
    )
  }
}

export default Grid
