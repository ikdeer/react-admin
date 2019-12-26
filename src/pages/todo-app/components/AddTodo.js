import React from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { addTodo } from '../../../store/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <Input
          placeholder="请输入代办事项！"
          onPressEnter={this.handleAddTodo}
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <Button
          style={{ marginTop: 10 }}
          type="primary"
          onClick={this.handleAddTodo}
        >
          添加
        </Button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
