import React from 'react'
import { Row, Col } from 'antd'

import Series1 from './Series1'
import Stackedcolumn from './Stackedcolumn'
import Stacked from './Stacked'

class G2Chart extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col id="h-chart1" className="card-padding" span={24}>
            <Series1 />
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={12} id="h-chart2" className="card-padding">
            <Stackedcolumn />
          </Col>
          <Col sm={24} md={12} id="h-chart3" className="card-padding">
            <Stacked />
          </Col>
        </Row>
      </div>
    )
  }
}

export default G2Chart
