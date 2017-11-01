import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from '../src/component/basic/grid/main'

require('../src/component/common')

class App extends React.Component {
  render() {
    return (
      <div style={{ width:"50%" }}>
        <h3>栅格</h3>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <hr />

        <h3>gutter内边距</h3>
        <Row gutter={16}>
          <Col span={6} order={2}>col-6</Col>
          <Col span={6} order={1}>col-6</Col>
        </Row>
        <hr />

        <h3>flex布局 order</h3>
        <Row type="flex">
          <Col span={6} order={3}>1 | col-6</Col>
          <Col span={6} order={4}>2 | col-6</Col>
          <Col span={6} order={2}>3 | col-6</Col>
          <Col span={6} order={1}>4 | col-6</Col>
        </Row>
        <hr />

        <h3>flex布局 justify</h3>
        <p>子元素向左排列</p>
        <Row type="flex" justify="start">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
        <p>子元素向右排列</p>
        <Row type="flex" justify="end">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
        <p>子元素居中排列</p>
        <Row type="flex" justify="center">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
        <p>子元素等宽排列</p>
        <Row type="flex" justify="space-between">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
        <p>子元素分散排列</p>
        <Row type="flex" justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <hr />
        
        <h3>flex布局 align</h3>
        <p>顶部对齐</p>
        <Row type="flex" justify="center" align="top">
            <Col span={4}><p style={{ height: "80px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "30px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "100px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "60px" }}>col-4</p></Col>
        </Row>
        <p>底部对齐</p>
        <Row type="flex" justify="center" align="bottom">
            <Col span={4}><p style={{ height: "80px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "30px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "100px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "60px" }}>col-4</p></Col>
        </Row>
        <p>居中对齐</p>
        <Row type="flex" justify="center" align="middle">
            <Col span={4}><p style={{ height: "80px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "30px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "100px" }}>col-4</p></Col>
            <Col span={4}><p style={{ height: "60px" }}>col-4</p></Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)