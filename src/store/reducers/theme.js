import { SET_MENU_THEME } from '../actionTypes'

const initialState = {
  themeType: 'light'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_THEME: {
      const { themeType } = action

      return {
        ...state,
        themeType
      }
    }

    default:
      return state
  }
}
