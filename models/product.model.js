import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", productSchema);

export default product;
