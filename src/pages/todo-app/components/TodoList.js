import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

import { getTodosByVisibilityFilter } from '../../../store/selectors'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />
        })
      : '数据是空的！'}
  </ul>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
