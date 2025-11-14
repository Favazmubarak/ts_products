import { Schema } from "mongoose";
import mongoose from "mongoose";

interface ProductDetails extends Document {
  name: string;
  price: number;
  quantity: number;
}

const ProductSchema = new Schema<ProductDetails>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const products = mongoose.model<ProductDetails>("products",ProductSchema);
