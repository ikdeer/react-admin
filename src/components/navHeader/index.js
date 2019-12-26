import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon, Avatar, Menu, Dropdown, Drawer } from 'antd'
import { Link } from 'react-router-dom'
import ThemeSetting from '../theme-setting/ThemeSetting'

import './navHeader.scss'

const DropdownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/login">
        <Icon type="user" />
        <span style={{ marginLeft: 8 }}>个人中心</span>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">
        <Icon type="unlock" />
        <span style={{ marginLeft: 8 }}>修改密码</span>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">
        <Icon type="logout" />
        <span style={{ marginLeft: 8 }}>退出登录</span>
      </Link>
    </Menu.Item>
  </Menu>
)
class NavHeader extends React.Component {
  state = {
    visible: false,
    isFullScreen: false
  }

  showDrawer = () => {
    this.setState({
      visible: true
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  loginOut = () => {
    const { history } = this.props
    localStorage.removeItem('ant_token')
    history.push('/login')
  }

  fullScreenHandle = () => {
    console.log(this.state.isFullScreen)
    let elem = document.body
    if (!this.state.isFullScreen) {
      if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen()
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
      } else if (elem.requestFullScreen) {
        elem.requestFullscreen()
      }
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen
        ? document.webkitExitFullscreen()
        : ''
    }
    this.setState(state => ({
      isFullScreen: !state.isFullScreen
    }))
  }

  render() {
    return (
      <header
        className="main-header"
        id="main-header"
        style={{
          left: this.props.collapsed ? 80 : 256
        }}
      >
        <div className="nav-bar">
          <div className="toggle-nav-btn">
            <span
              className="z-global-header-trigger"
              onClick={this.props.toggleCollapsed}
            >
              <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-nav">
              <div>
                <Dropdown overlay={DropdownMenu}>
                  <div className="navbar-avatar">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span>管理员</span>
                  </div>
                </Dropdown>
              </div>

              <div>
                <span
                  onClick={this.fullScreenHandle}
                  className="z-global-header-trigger"
                >
                  <Icon
                    type={
                      !this.state.isFullScreen
                        ? 'fullscreen'
                        : 'fullscreen-exit'
                    }
                  />
                </span>
              </div>

              <div>
                <span
                  onClick={this.showDrawer}
                  className="z-global-header-trigger"
                >
                  <Icon type="setting" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <Drawer
          title="系统设置"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ThemeSetting />
        </Drawer>
      </header>
    )
  }
}

export default withRouter(NavHeader)
