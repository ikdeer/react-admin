import React from 'react'
import './login.scss'
import { Form, Icon, Input, Button, message } from 'antd'

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('ant_token', 'ant_token')
        message.success('登录成功！')
        history.push('/home')
      }
    })
  }

  componentDidMount() {}

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-wrapper">
        <div className="login-content">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)

export default WrappedNormalLoginForm
