import React from 'react'
import { ConfigProvider, Icon } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { connect } from 'react-redux'
import './home/index.scss'
import SideMenu from '../components/sideMenu'
import NavHeader from '../components/navHeader'
import Menus from '../api/menus'
import ContentFooter from '../components/content-footer'
import CustomRouterView from '../router/CustomRouterView'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      themeClassNameMap: {
        light: 'theme-light',
        dark: 'theme-dark'
      }
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { themeType } = this.props
    const themeClassNames =
      'home-wrapper ' + this.state.themeClassNameMap[themeType]
    return (
      <div className={themeClassNames}>
        <ConfigProvider locale={zhCN}>
          <div
            style={{
              width: this.state.collapsed ? 80 : 256
            }}
            id="sidebar"
            className="sidebar"
          >
            <div className="sidebar-top sidebar-top-text">
              <Icon style={{ fontSize: 22 }} type="ant-design" />
              {!this.state.collapsed && (
                <span style={{ marginLeft: 6, fontSize: 18 }}> Lemon</span>
              )}
            </div>
            <section className="side-menu">
              <SideMenu
                routes={Menus}
                collapsed={this.state.collapsed}
                uniqueOpend={true}
              />
            </section>
          </div>
          <div className="main-container">
            <NavHeader
              collapsed={this.state.collapsed}
              toggleCollapsed={this.toggleCollapsed}
            />
            <div className="main-content">
              <CustomRouterView />
              <ContentFooter />
            </div>
          </div>
        </ConfigProvider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { theme } = state
  return theme
}
export default connect(mapStateToProps)(Home)
