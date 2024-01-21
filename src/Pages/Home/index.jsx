import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'

import Order from '../../Components/Order'
import { saveLocalOrder, getLocal } from '../../services/LocalStorage'
import {
  Container,
  ContainerItems,
  ContainerInput,
  Input,
  Button,
  ContainerOrders
} from './styles'

const Home = () => {
  const [orders, setOrders] = useState([])

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    const getOrdersLocal = async () => {
      const responseOrders = await getLocal()
      if (responseOrders) {
        setOrders(responseOrders)
      }
    }
    getOrdersLocal()
  }, [])

  const onSubmit = (data) => {
    if (data.order.length !== 0) {
      const newOrder = {
        id: v4(),
        order: data.order,
        completed: false
      }
      setOrders([...orders, newOrder])
      saveLocalOrder([...orders, newOrder])

      toast.success('Tarefa cadastrada!')
      reset()
    } else {
      toast.error('Digite uma tarefa!')
    }
  }

  const updatedOrders = Array.isArray(orders)
    ? [
        ...orders.filter((order) => order.completed),
        ...orders.filter((order) => !order.completed)
      ]
    : []

  return (
    <Container>
      <ContainerItems>
        <ContainerInput>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="O que tenho que fazer..."
              {...register('order')}
            />

            <Button type="submit">Adicionar</Button>
          </form>
        </ContainerInput>

        <ContainerOrders>
          {Array.isArray(updatedOrders) &&
            updatedOrders.map((order) => (
              <Order
                key={order.id}
                order={order}
                orders={orders}
                setOrders={setOrders}
              ></Order>
            ))}
        </ContainerOrders>
      </ContainerItems>
    </Container>
  )
}

export default Home
