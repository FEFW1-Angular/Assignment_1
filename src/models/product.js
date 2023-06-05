
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    img: String,
   
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
