import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const { SubMenu } = Menu

const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={item.key}>
      {item.icon && <Icon type={item.icon} />}
      <span>{item.title}</span>
    </Link>
  </Menu.Item>
)

const renderMenuItemGroup = item => (
  <Menu.ItemGroup key={item.key} title={item.title}>
    {item.subs.map(sub => renderMenuItem(sub))}
  </Menu.ItemGroup>
)

const renderSubMenu = item => (
  <SubMenu
    key={item.key}
    title={
      <span>
        <Icon type={item.icon} />
        <span>{item.title}</span>
      </span>
    }
  >
    {item.subs.map(item =>
      item.subs ? renderMenuItemGroup(item) : renderMenuItem(item)
    )}
  </SubMenu>
)

class SideMenu extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.collapsed !== state.collapsed) {
      const state1 = SideMenu.setMenuOpen(props)
      const state2 = SideMenu.onCollapse(props.collapsed)
      return {
        ...state1,
        ...state2,
        firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
        openKey: state.openKey || (!props.collapsed && state1.openKey)
      }
    }
    return null
  }

  static setMenuOpen = props => {
    const { pathname } = props.location
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    }
  }
  static onCollapse = collapsed => {
    return {
      collapsed,
      // firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    }
  }

  state = {
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: true // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  }
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    })
  }

  componentDidMount() {
    // this.setMenuOpen(this.props);
    const state = SideMenu.setMenuOpen(this.props)
    this.setState(state)
  }

  onOpenChange = v => {
    const uniqueOpened = !!this.props.uniqueOpend
    if (uniqueOpened) {
      this.setState({
        openKey: v[v.length - 1],
        firstHide: false
      })
    } else {
      this.setState({
        openKeys: v
      })
    }
  }

  render() {
    const { routes } = this.props
    const collapsed = this.props.collapsed
    const { selectedKey, openKey, firstHide } = this.state
    return (
      <Menu
        inlineCollapsed={collapsed}
        theme={this.props.themeType}
        menus={routes.menus}
        onClick={this.menuClick}
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={firstHide ? null : [openKey]}
        onOpenChange={this.onOpenChange}
      >
        {routes.map(route =>
          route.subs ? renderSubMenu(route) : renderMenuItem(route)
        )}
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  const { theme } = state
  return theme
}

export default connect(mapStateToProps)(withRouter(SideMenu))
