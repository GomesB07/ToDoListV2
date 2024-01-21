import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import * as React from 'react'
import { toast } from 'react-toastify'

import { saveLocalOrder } from '../../services/LocalStorage'

const style = {
  width: `100%`,
  height: `100%`,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #000'
}

const deleteIconStyle = {
  color: '#f00',
  cursor: 'pointer',
  '&:hover': {
    color: '#c22828'
  }
}

const styleDisagree = {
  color: '#8052EC',
  '&:hover': {
    color: '#5a21df',
    backgroundColor: 'rgb(90, 33, 223, 0.2)'
  }
}

const styleDelete = {
  color: '#f00',
  alignSelf: 'flex-end',
  '&:hover': {
    backgroundColor: 'rgb(194, 40, 40, 0.2)'
  }
}

export default function AlertDialog({ order, orders, setOrders }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const removeOrder = (order) => {
    if (orders) {
      const filteredOrders = orders.filter((ord) => ord.id !== order.id)
      setOrders(filteredOrders)
      saveLocalOrder(filteredOrders)
      toast.success('Tarefa deletada!')
    }
  }

  return (
    <div>
      <DeleteIcon sx={deleteIconStyle} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={style}
      >
        <DialogTitle id="alert-dialog-title">
          {'Deseja deletar essa tarefa?'}
        </DialogTitle>
        <DialogActions>
          <Button sx={styleDisagree} onClick={handleClose}>
            Voltar
          </Button>
          <Button sx={styleDelete} onClick={() => removeOrder(order)} autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AlertDialog.propTypes = {
  order: PropTypes.object,
  orders: PropTypes.array,
  setOrders: PropTypes.func
}
