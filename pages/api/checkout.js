import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require("stripe")(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }
  const { name, email, city, zipCode, streetAddress, country, cartProducts } =
    req.body;

  await mongooseConnect();

  const productsIds = cartProducts;

  const uniqueIds = [...new Set(productsIds)];

  const productsInfo = await Product.find({ _id: uniqueIds });

  let line_items = [];

  for (const productId of uniqueIds) {
    const productInfo = productsInfo.find(
      (p) => p._id.toString() === productId
    );

    if (!productInfo) {
      // Handle the case where productInfo is not found
      console.error(`Product info not found for product ID: ${productId}`);
      continue; // Skip to the next iteration
    }

    const quantity = productsIds.filter((id) => id === productId)?.length || 0;

    const totalPrice = productInfo.price;
    const formattedTotalPrice = Math.round(totalPrice.toFixed(2) * 100);

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: formattedTotalPrice,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    zipCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: orderDoc._id.toString(), test: 'OK' },
  });

  res.json({
    url: session.url,
  });
}
