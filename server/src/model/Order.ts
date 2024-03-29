import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  ],
  orderNumber: Number,
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "food",
    },
  ],
  totalPrice: Number,
  process: ["order", "complete"],
  createdDate: {
    type: Date,
    default: () => Date.now(),
  },
  district: String,
  khoroo: String,
  apartment: String,
});
const orderModel = mongoose.model("order", orderSchema);
export { orderModel };
