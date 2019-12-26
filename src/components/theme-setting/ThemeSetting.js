import React from 'react'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import { setMenuTheme } from '../../store/actions'

class ThemeSetting extends React.Component {
  onChange = e => {
    this.props.setMenuTheme(e.target.value)
  }

  render() {
    const props = this.props
    return (
      <div>
        <div>
          <h4>菜单主题</h4>
          <div>
            <Radio.Group
              onChange={this.onChange}
              defaultValue={props.themeType}
              buttonStyle="solid"
            >
              <Radio.Button value="light">Light</Radio.Button>
              <Radio.Button value="dark">Dark</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { theme } = state
  return theme
}

export default connect(
  mapStateToProps,
  { setMenuTheme }
)(ThemeSetting)
