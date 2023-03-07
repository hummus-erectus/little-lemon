const express = require('express')
const router = express.Router()
const Order = require('../models/orderModel')

router.post('/create-order', async (req, res) => {
  const order = new Order({
    user: req.body.user,
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    total: req.body.total
  })

  try {
    const savedOrder = await order.save()
    res.status(200).send({ data: savedOrder })
  } catch (error) {
    res.status(400).send({ error: error })
  }
})

module.exports = router