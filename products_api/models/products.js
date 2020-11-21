const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: "100" },
  image: { type: String },
  category: { type: String, default: "Category!" },
  subcategory: { type: String, default: "SubCategory!" },
  brand: { type: String },
  description: { type: String, default: "Best Product ever!" },
  inStock: { type: Boolean, default: true },
  quantity: [{type: Number, default: 0, min: [0, 'Out of Stock'] }],
  tags: [{ type: String }], 
  reviews: [{ type: String }]  
});

module.exports = mongoose.model("Product", productSchema);

//aligned Schema to input set up on New Form component
