import Ajax from '../utils/ajax'

export const fetchProductList = () => {
  return Ajax.get('/product/list')
}
