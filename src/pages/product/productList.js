import React from 'react'
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Table,
  Select,
  DatePicker,
  Tag
} from 'antd'

import { fetchProductList } from '../../api/product'

const { Option } = Select
function onChange(date, dateString) {
  console.log(date, dateString)
}

class ProductList extends React.Component {
  state = {
    productData: [],
    pagination: {
      defaultCurrent: 1,
      total: 50,
      pageSize: 10,
      showSizeChanger: true
    },
    loading: true,
    columns: [
      {
        title: '商品名',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <div>
            <span>{text}</span>
          </div>
        )
      },
      {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
        render: (text, record) => (
          <div>
            {record.tag === 1 && <Tag color="red">热销</Tag>}
            {record.tag === 2 && <Tag color="green">新品</Tag>}
            {record.tag === 3 && <Tag color="purple">普通</Tag>}
          </div>
        )
      },
      {
        title: '商品类目',
        dataIndex: 'category',
        key: 'category'
      },
      {
        title: '主图',
        key: 'masterUrl',
        render: (text, record) => (
          <img
            style={{ width: 30, height: 30 }}
            alt=""
            src={record.masterUrl}
          />
        )
      },
      {
        title: '商品数量',
        dataIndex: 'num',
        key: 'num'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <div>
            {record.tag === 1 && (
              <Button onClick={() => this.actionHandle(record)} type="dashed">
                上架
              </Button>
            )}
            {record.tag === 2 && (
              <Button onClick={() => this.actionHandle(record)} type="dashed">
                审核
              </Button>
            )}
            {record.tag === 3 && (
              <Button onClick={() => this.actionHandle(record)} type="dashed">
                下架
              </Button>
            )}
            <Button
              style={{ marginLeft: 10 }}
              onClick={() => this.actionHandle(record)}
              type="dashed"
            >
              查看
            </Button>
          </div>
        )
      }
    ]
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
    fetchProductList().then(res => {
      const { data } = res
      this.setState({
        productData: data,
        loading: false
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  searchProductList = () => {
    this.getProductList()
  }

  tableChange = pagination => {
    console.log(pagination)
    this.getProductList()
  }

  addProduct = () => {
    const { history } = this.props
    history.push('/home/product/add')
  }

  getProductList = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000)
  }

  actionHandle = product => {
    console.log(product)
  }

  render() {
    const { getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched('username') && getFieldError('username')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')

    return (
      <div>
        <Row>
          <Col>
            <Card bordered={false}>
              <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                  validateStatus={usernameError ? 'error' : ''}
                  help={usernameError || ''}
                >
                  <Input type="password" placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <Input type="password" placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <Input type="password" placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <Select placeholder="选择" style={{ width: 160 }}>
                    <Option value="lucy">Lucy</Option>
                    <Option value="ami">ami</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <Input type="password" placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <Input type="password" placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  <DatePicker placeholder="选择日期" onChange={onChange} />
                </Form.Item>
                <Form.Item>
                  <Button
                    icon="search"
                    type="primary"
                    onClick={this.searchProductList}
                    htmlType="submit"
                  >
                    查询
                  </Button>
                  <Button
                    style={{ marginLeft: 10 }}
                    icon="plus"
                    onClick={this.addProduct}
                    type="primary"
                  >
                    新增
                  </Button>
                </Form.Item>
              </Form>
              <Table
                rowKey="id"
                loading={this.state.loading}
                columns={this.state.columns}
                onChange={this.tableChange}
                pagination={this.state.pagination}
                dataSource={this.state.productData}
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const WrappedProductListForm = Form.create({ name: 'productList_form' })(
  ProductList
)
export default WrappedProductListForm
