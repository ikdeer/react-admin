import React from 'react'
import ChartJs from '../../components/chart-js/ChartJs'
import SmallCard from '../../components/smallCard/index'
import { Statistic, Icon, Progress, Row, Col } from 'antd'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={24} md={6}>
            <SmallCard
              content={
                <div>
                  <Statistic title="日订单" value={112893} />
                  <Statistic
                    value={11.28}
                    precision={0}
                    valueStyle={{ color: '#3f8600', fontSize: 15 }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </div>
              }
              footer={' 总订单：10113121'}
            />
          </Col>

          <Col sm={24} md={6}>
            <SmallCard
              content={
                <div>
                  <Statistic title="今日新增商品数" value={20991} />
                  <Statistic
                    value={20}
                    precision={0}
                    valueStyle={{ color: '#3f8600', fontSize: 15 }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </div>
              }
              footer={'总商品数：10113121'}
            />
          </Col>

          <Col sm={24} md={6}>
            <SmallCard
              content={
                <div>
                  <Statistic title="任务进度" value={'7009/8080'} />
                  <Progress percent={30} />
                </div>
              }
              footer={'总任务数：80889'}
            />
          </Col>

          <Col sm={24} md={6}>
            <SmallCard
              content={
                <div>
                  <Statistic title="日取消订单数" value={70} />
                  <Statistic
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322', fontSize: 15 }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                  />
                </div>
              }
              footer={'8988'}
            />
          </Col>
        </Row>
        <Row>
          <ChartJs />
        </Row>
      </div>
    )
  }
}

export default Home
