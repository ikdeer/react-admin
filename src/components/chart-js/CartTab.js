import React from 'react'
import { Card,Icon } from 'antd'
import './cartTab.scss'

const tabListNoTitle = [
  {
    key: 'h5',
    tab: 'H5商城'
  },
  {
    key: 'app',
    tab: '小程序'
  }
]

const H5ListData = [
  {
    name: '苹果',
    saleNum: '1909'
  },
  {
    name: '橘子',
    saleNum: '1909'
  },
  {
    name: '香蕉',
    saleNum: '1909'
  },
  {
    name: '栗子',
    saleNum: '1909'
  },
  {
    name: '蜜柚',
    saleNum: '1909'
  },
  {
    name: '火龙果',
    saleNum: '1909'
  },
  {
    name: '蛇果',
    saleNum: '1909'
  },
  {
    name: '玉米',
    saleNum: '1909'
  },
  {
    name: '橙子',
    saleNum: '1909'
  }
]

const H5List = (
  <div>
    <ul className="ul-li-style-none c-cart-type-ul">
      {H5ListData.map((item, index) => (
        <li key={index} className="c-list-item">
          <div className="c-product-name">
            <span className="sale-num-icon">{index + 1}</span>
            {item.name}
          </div>
          <div className="sale-num">销量:{item.saleNum}</div>
        </li>
      ))}
    </ul>

    <div style={{ position: 'absolute', bottom: 0, left: 20 }}>
      <p style={{ fontSize: 12, color: '#dedede' }}> <Icon style={{marginLeft:5}} type="star" />热销水果排行</p>
    </div>
  </div>
)

const contentListNoTitle = {
  h5: H5List,
  app: H5List
}

class CardTab extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'h5'
  }

  onTabChange = (key, type) => {
    console.log(key, type)
    this.setState({ [type]: key })
  }

  render() {
    return (
      <Card
        style={{ width: '100%', height: 408, position: 'relative' }}
        bordered={false}
        tabList={tabListNoTitle}
        activeTabKey={this.state.noTitleKey}
        onTabChange={key => {
          this.onTabChange(key, 'noTitleKey')
        }}
      >
        {contentListNoTitle[this.state.noTitleKey]}
      </Card>
    )
  }
}

export default CardTab
