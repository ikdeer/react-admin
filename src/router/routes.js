import Home from '../pages/home/index'
import OrderList from '../pages/order/orderList'

import G2Chart from '../components/g2charts/g2Chart'
import ChartJs from '../components/chart-js/ChartJs'
import ProductList from '../pages/product/productList'
import ProductAdd from '../pages/product/productAdd'
import ProductCategory from '../pages/product/category'
import OrderReport from '../pages/order/report'
import SsoApplication from '../pages/sso/application'

const Menus = [
  {
    key: '/home',
    name: '首页',
    exact: true,
    component: Home
  },
  {
    title: '订单管理',
    key: '/home/order',
    subs: [
      { key: '/home/order/list', name: '订单列表', component: OrderList },
      { key: '/home/order/report', name: '订单报表', component: OrderReport }
    ]
  },
  {
    title: '商品管理',
    key: '/home/product',
    subs: [
      { key: '/home/product/list', name: '商品列表', component: ProductList },
      { key: '/home/product/add', name: '添加商品', component: ProductAdd },
      {
        key: '/home/product/category',
        name: '商品分类',
        component: ProductCategory
      }
    ]
  },
  {
    title: '数据报表',
    key: '/home/data',
    subs: [
      { key: '/home/data/g2', name: 'G2图表', component: G2Chart },
      { key: '/home/data/chartjs', name: 'chartjs图表', component: ChartJs },
      { key: '/home/data/list2', name: '订单列表', component: OrderList }
    ]
  },
  {
    title: 'SSO应用',
    key: '/home/sso',
    subs: [
      {
        key: '/home/sso/application',
        name: 'sso_application',
        component: SsoApplication
      }
    ]
  }
]

export default Menus
