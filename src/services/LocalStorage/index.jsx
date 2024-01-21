const saveLocalOrder = async (orders) => {
  await localStorage.setItem('orders', JSON.stringify(orders))
}

const getLocal = async () => {
  const sla = await localStorage.getItem('orders')
  return JSON.parse(sla)
}

export { saveLocalOrder, getLocal }
