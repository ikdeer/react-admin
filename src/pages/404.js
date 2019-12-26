import React from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'

class NotFindPage extends React.Component {
  goBack = () => {
    const { history } = this.props
    history.push('/home')
  }
  render() {
    console.log(this.props)
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={this.goBack} type="primary">
            回首页
          </Button>
        }
      />
    )
  }
}

export default withRouter(NotFindPage)
