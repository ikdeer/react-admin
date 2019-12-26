import React from 'react'
import { Card, Row, Col, Icon, Form, Input, Button, Drawer } from 'antd'

import AddAppForm from './add-app-form'
const { Meta } = Card

class Application extends React.Component {
  state = {
    applicationList: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 }
    ],
    visible: false
  }

  showDrawer = () => {
    this.setState({
      visible: true
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon
                        type="appstore"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                    placeholder="应用名"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="应用ID"
                  />
                </Form.Item>
                <Form.Item>
                  <Button icon="search" type="primary">
                    查询
                  </Button>
                  <Button
                    onClick={this.showDrawer}
                    style={{ marginLeft: 6 }}
                    icon="plus"
                    type="primary"
                  >
                    新增
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          {this.state.applicationList.map(item => (
            <Col key={item.id} span={6}>
              <Card
                bordered={false}
                hoverable
                actions={[
                  <Icon type="delete" key="edit" theme="filled" />,
                  <Icon type="setting" key="setting" />,

                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={<Icon type="appstore" theme="twoTone" />}
                  title="店铺"
                  description="店铺"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Drawer
          title="新建应用"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <AddAppForm />
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right'
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={this.onClose} type="primary">
              保存
            </Button>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Application
