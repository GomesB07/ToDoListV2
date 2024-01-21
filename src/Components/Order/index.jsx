import PropTypes from 'prop-types'
import React from 'react'

import { saveLocalOrder } from '../../services/LocalStorage'
import BoxDelete from '../BoxDelete'
import { Order as OrderDiv, RocketStyle } from './styles'

const Order = ({ order, orders, setOrders }) => {
  const checkOrder = (order) => {
    if (orders) {
      const findOrder = orders.map((ord) =>
        ord.id === order.id ? { ...order, completed: !order.completed } : ord
      )
      setOrders(findOrder)
      saveLocalOrder(findOrder)
    }
  }

  return (
    <OrderDiv key={order.id} orderColor={order.completed}>
      <RocketStyle onClick={() => checkOrder(order)} />
      {order.order}
      <BoxDelete order={order} orders={orders} setOrders={setOrders} />
    </OrderDiv>
  )
}
export default Order

Order.propTypes = {
  order: PropTypes.object,
  orders: PropTypes.array,
  setOrders: PropTypes.func
}
