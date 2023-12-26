import { Category } from "@/models/Category";

import mongoose, { model, Schema, models } from "mongoose";
import { SSG_FALLBACK_EXPORT_ERROR } from "next/dist/lib/constants";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

const Product = models?.Product || model("Product", ProductSchema);

export { Product };
