const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

let subSubCategorySchema = new mongoose.Schema({
  subSubCategoryName: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 40,
  },
  parentCategory: {
    type: mongoose.Types.ObjectId,
    ref: "category",
  },
  parentSubCategory: {
    type: mongoose.Types.ObjectId,
    ref: "subCategory",
  },
  subSubCategoryImage: String,
  subSubCategoryStatus: Boolean,
  subSubCategoryOrder: Number,
  slug: String,
});

subSubCategorySchema.pre("save", function (next) {
  this.slug = slugify(this.subSubCategoryName, { lower: true });
  next();
});

let subSubCategoryModel = mongoose.model(
  "subSubCategory",
  subSubCategorySchema
);

module.exports = { subSubCategoryModel };
