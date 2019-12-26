import React from 'react'
import { Card, Row, Col } from 'antd'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilters from './components/VisibilityFilters'
import './todo.scss'

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card bordered={false}>
              <div className="todo-app">
                <AddTodo />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <VisibilityFilters />
              <TodoList />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TodoApp
