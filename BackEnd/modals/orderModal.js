import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Grocery Process" },
  },
  {
    timestamps: true, // now in the options object
  }
);

const orderModal =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

export default orderModal;
