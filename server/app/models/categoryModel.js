const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

let categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  categoryImage: String,
  categoryStatus: Boolean,
  categoryOrder: Number,
  slug: String,
});

// categorySchema.virtual("slug").get(function(){
//   return slugify(this.name, {lower: true})
// });

categorySchema.pre("save", function (next) {
  this.slug = slugify(this.categoryName, { lower: true });
  next();
});

categorySchema.virtual("subCategories", {
  ref: "subCategory",
  localField: "_id",
  foreignField: "parentCategory",
});

categorySchema.set("toJSON", {
  virtuals: true,
});

let categoryModel = mongoose.model("category", categorySchema);
module.exports = { categoryModel };
