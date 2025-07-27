const mongoose = require("mongoose");

let subCategorySchema = new mongoose.Schema({
  subCategoryName: {
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
  subCategoryImage: String,
  subCategoryStatus: Boolean,
  subCategoryOrder: Number,
});

subCategorySchema.virtual("subSubCategories", {
  ref: "subSubCategory",
  localField: "_id",
  foreignField: "parentSubCategory",
});

// subCategorySchema.set("toJSON", { virtuals: true });
// subCategorySchema.set("toJSON", { virtuals: true });
subCategorySchema.set("toJSON", { virtuals: true });

let subCategoryModel = mongoose.model("subCategory", subCategorySchema);
module.exports = { subCategoryModel };
