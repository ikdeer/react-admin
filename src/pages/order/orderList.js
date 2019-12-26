import React from 'react'

import {
  Table,
  Divider,
  Tag,
  Row,
  Col,
  Card,
  Radio,
  Button,
  DatePicker,
  Form,
  Input,
  Select
} from 'antd'

const { Option } = Select
const { RangePicker } = DatePicker

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <span>Invite {record.name}</span>
        <Divider type="vertical" />
        <span>Delete</span>
      </span>
    )
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

class OrderList extends React.Component {
  submitFormHandle = e => {
    e.preventDefault()
    console.log('提交了表单')
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
    })
  }

  resetFormFields = () => {
    this.props.form.resetFields()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Row>
          <Col>
            <Card bordered={false}>
              <Form layout="inline" onSubmit={this.submitFormHandle}>
                <Form.Item label="订单号">
                  {getFieldDecorator('orderNo', {
                    rules: [
                      {
                        required: false,
                        message: '订单号只能为数字',
                        pattern: /\d/
                      }
                    ]
                  })(<Input placeholder="请输入订单号" />)}
                </Form.Item>
                <Form.Item label="运单号">
                  {getFieldDecorator('shipNo', {})(
                    <Input placeholder="请输入运单号" />
                  )}
                </Form.Item>
                <Form.Item label="收货人姓名">
                  {getFieldDecorator('receiveName', {})(
                    <Input placeholder="收货人姓名" />
                  )}
                </Form.Item>
                <Form.Item label="手机号">
                  {getFieldDecorator('receivePhone', {})(
                    <Input placeholder="收货人手机号" />
                  )}
                </Form.Item>

                <Form.Item label="订单状态">
                  {getFieldDecorator('orderStatus', {})(
                    <Select placeholder="选择" style={{ width: 160 }}>
                      <Option value="lucy">全部</Option>
                      <Option value="ami">已支付</Option>
                      <Option value="ami1">待支付</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label="下单时间">
                  {getFieldDecorator('orderTime', {})(<RangePicker />)}
                </Form.Item>

                <Form.Item>
                  <Button icon="search" type="primary" htmlType="submit">
                    查询
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    icon="reload"
                    onClick={this.resetFormFields}
                    type="primary"
                  >
                    重置
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="bg-whilte">
              <Card
                bordered={false}
                title={
                  <div>
                    <Radio.Group style={{ marginRight: 6 }} defaultValue="a">
                      <Radio.Button value="a">全部</Radio.Button>
                      <Radio.Button value="b">三日</Radio.Button>
                      <Radio.Button value="c">七日</Radio.Button>
                      <Radio.Button value="d">一个月</Radio.Button>
                    </Radio.Group>
                  </div>
                }
                extra={
                  <div>
                    <Button
                      style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                      type="dashed"
                      icon="download"
                    >
                      导出
                    </Button>
                    <Button
                      style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                      type="link"
                      icon="sync"
                      shape="circle"
                    />
                  </div>
                }
              >
                <Table columns={columns} dataSource={data} />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrappedOrderListFrom = Form.create({
  name: 'order_list_form'
})(OrderList)

export default WrappedOrderListFrom
