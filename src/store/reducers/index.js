import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import theme from './theme'

export default combineReducers({ todos, visibilityFilter, theme })
