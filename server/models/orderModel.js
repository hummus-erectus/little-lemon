const mongoose = require('mongoose')
const orderSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
      },
      orderItems: [
        {
          name: { type: String, required: false },
          amount: { type: Number, required: false },
          imageUrl: { type: String, required: false },
          price: { type: Number, required: false },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
          },
        },
      ],
      shippingAddress: {
        street: { type: String, required: false },
        city: { type: String, required: false },
        tel: { type: String },

        // postalCode: { type: String, required: false },
        // country: { type: String, required: false },
      },
      paymentMethod: {
        type: String,
        required: false,
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
      taxPrice: {
        type: Number,
        required: false,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: false,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: false,
        default: 0.0,
      },
      isPaid: {
        type: Boolean,
        required: false,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        required: false,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
    {
      timestamps: false,
    }
  )

  module.exports = mongoose.model("Order", orderSchema)