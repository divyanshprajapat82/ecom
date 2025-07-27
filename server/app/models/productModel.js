const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  parentCategory: {
    type: mongoose.Types.ObjectId,
    ref: "category",
  },
  subCategory: {
    type: mongoose.Types.ObjectId,
    ref: "subCategory",
  },
  subSubCategory: {
    type: mongoose.Types.ObjectId,
    ref: "subSubCategory",
  },
  productMaterial: [
    {
      type: mongoose.Types.ObjectId,
      ref: "materia",
    },
  ],
  productColor: [
    {
      type: mongoose.Types.ObjectId,
      ref: "color",
    },
  ],
  productType: {
    type: String,
    enum: ["1", "2", "3"],
  },
  productBestSelling: Boolean,
  productTopRated: Boolean,
  productUpsell: Boolean,
  productActualPrice: Number,
  productSalePrice: Number,
  productStocks: Number,
  productDescription: String,
  productImage: String,
  productBackImage: String,
  productGalleryImage: Array,
  productStatus: Boolean,
  productOrder: Number,
  slug: String,
});

productSchema.pre("save", function (next) {
  this.slug = slugify(this.productName, { lower: true });
  next();
});

let productModel = mongoose.model("product", productSchema);
module.exports = { productModel };
