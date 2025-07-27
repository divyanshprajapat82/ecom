const { categoryModel } = require("../../models/categoryModel");
const { colorModel } = require("../../models/colorModel");
const { materialModel } = require("../../models/materialModel");
const { productModel } = require("../../models/productModel");
const { subCategoryModel } = require("../../models/subCategoryModel");
const { subSubCategoryModel } = require("../../models/subSubCategoryModel");

let productInsert = async (req, res) => {
  // console.log(req.body);
  // console.log(req.files);

  let obj = { ...req.body };
  if (req.files) {
    if (req.files.productImage) {
      obj["productImage"] = req.files.productImage[0].filename;
    }
    if (req.files.productBackImage) {
      obj["productBackImage"] = req.files.productBackImage[0].filename;
    }
    if (req.files.productGalleryImage) {
      obj["productGalleryImage"] = req.files.productGalleryImage.map(
        (items) => items.filename
      );
    }
  }

  let data = await productModel.insertOne(obj);

  obj = {
    status: 1,
    msg: "Product Save",
    data,
  };
  console.log(obj);

  res.send(obj);
};

let productView = async (req, res) => {
  let data = await productModel.find();
  resObj = {
    status: 1,
    msg: "Loged View",
    staticPath: process.env.PRODUCTIMAGEPATH,
    data,
  };

  res.send(resObj);
};

let productSingleView = async (req, res) => {
  let { id } = req.params;
  let data = await productModel
    .find({ _id: id })
    .populate("parentCategory", "categoryName")
    .populate("subCategory", "subCategoryName")
    .populate("subSubCategory", "subSubCategoryName")
    .populate("productMaterial", "materialName")
    .populate("productColor", "colorCode");
  resObj = {
    status: 1,
    msg: "Loged View",
    staticPath: process.env.PRODUCTIMAGEPATH,
    data,
  };

  res.send(resObj);
};

let parentCategory = async (req, res) => {
  let data = await categoryModel
    .find({ categoryStatus: true })
    .select("categoryName");
  let obj = {
    status: 1,
    msg: "parentCategory View",
    data,
  };
  res.send(obj);
};

let subCategory = async (req, res) => {
  let { id } = req.params;
  let data = await subCategoryModel
    .find({ parentCategory: id })
    .select("subCategoryName");
  let obj = {
    status: 1,
    msg: "subCategory View",
    data,
  };
  res.send(obj);
};

let subSubCategory = async (req, res) => {
  let { id } = req.params;
  let data = await subSubCategoryModel
    .find({ parentSubCategory: id })
    .select("subSubCategoryName");
  let obj = {
    status: 1,
    msg: "subSubCategory View",
    data,
  };
  res.send(obj);
};

let productMaterial = async (req, res) => {
  // let { id } = req.params;
  let data = await materialModel.find().select("materialName");
  let obj = {
    status: 1,
    msg: "subSubCategory View",
    data,
  };
  res.send(obj);
};

let productColor = async (req, res) => {
  // let { id } = req.params;
  let data = await colorModel.find().select("colorName");
  let obj = {
    status: 1,
    msg: "subSubCategory View",
    data,
  };
  res.send(obj);
};

let productUpdate = async (req, res) => {
  let { id } = req.params;

  let obj = { ...req.body };

  if (req.files) {
    if (req.files.productImage) {
      obj["productImage"] = req.files.productImage[0].filename;
    }
    if (req.files.productBackImage) {
      obj["productBackImage"] = req.files.productBackImage[0].filename;
    }
    if (req.files.productGalleryImage) {
      obj["productGalleryImage"] = req.files.productGalleryImage.map(
        (items) => items.filename
      );
    }
  }
  let data = await productModel.updateOne({ _id: id }, { $set: obj });

  obj = {
    status: 1,
    msg: "material Updated",
    data,
  };

  console.log(obj);

  res.send(obj);
};

module.exports = {
  productInsert,
  productView,
  productSingleView,
  parentCategory,
  subCategory,
  subSubCategory,
  productMaterial,
  productColor,
  productUpdate,
};
