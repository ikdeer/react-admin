/**
 * 左侧菜单单独抽离作为资源，通常从后端根据角色拉取菜单
 */
const Menus = [
  {
    key: '/home',
    title: '工作看板',
    icon: 'dashboard'
  },
  {
    title: '商品管理',
    key: '/home/product',
    icon: 'shopping',
    subs: [
      { key: '/home/product/list', title: '商品列表' },
      { key: '/home/product/category', title: '商品分类' }
    ]
  },
  {
    title: '订单管理',
    key: '/home/order',
    icon: 'profile',
    subs: [
      { key: '/home/order/list', title: '订单列表' },
      { key: '/home/order/report', title: '订单报表' }
    ]
  },
  {
    title: '数据图表',
    key: '/home/data',
    icon: 'bar-chart',
    subs: [
      { key: '/home/data/g2', title: 'G2图表' },
      { key: '/home/data/chartjs', title: 'chartjs' }
    ]
  },
  {
    title: 'SSO应用',
    key: '/home/sso',
    icon: 'appstore',
    subs: [{ key: '/home/sso/application', title: '应用管理' }]
  }
]

export default Menus
