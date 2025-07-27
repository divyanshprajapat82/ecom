const { productModel } = require("../../models/productModel");
const { sliderModel } = require("../../models/sliderModel");
const { categoryModel } = require("../../models/categoryModel");
const { subCategoryModel } = require("../../models/subCategoryModel");
const {
  subsubCategoryModel,
  subSubCategoryModel,
} = require("../../models/subSubCategoryModel");
// const { subSubCategoryModel, subsubCategoryModel } = require("../../models/subSubCategoryModel");

let sliderData = async (req, res) => {
  try {
    let data = await sliderModel.find();
    // console.log("data", data);

    let obj = {
      msg: "slider view",
      staticPath: process.env.SLIDERIMAGEPATH,
      data,
    };

    res.send(obj);
    // console.log("suc", obj);
  } catch (error) {
    obj = {
      status: 0,
      error,
    };
    res.send(obj);
    // console.log("suc", obj);
  }
};

let homeProduct = async (req, res) => {
  // let { id } = req.params;
  let homeProduct = req.query.homeProductClick ?? 1;
  let data = await productModel
    .find({ productType: homeProduct })
    .populate("parentCategory", "categoryName")
    .populate("subCategory", "subCategoryName")
    .populate("subSubCategory", "subSubCategoryName")
    .populate("productMaterial", "materialName")
    .populate("productColor", "colorCode");
  resObj = {
    status: 1,
    msg: "Home Product",
    staticPath: process.env.PRODUCTIMAGEPATH,
    data,
  };

  res.send(resObj);
};

let megaMenu = async (req, res) => {
  // .find()
  // .select(["categoryName", "slug"])
  // .populate({
  //   path: "subCategories",
  //   select: ["subCategoryName"],
  //   populate: {
  //     path: "subSubCategories",
  //     select: ["subSubCategoryName", "slug"],
  //   },
  // });
  try {
    let data = await categoryModel
      .find()
      .select(["categoryName", "slug"])
      .populate({
        path: "subCategories",
        select: ["subCategoryName"],
        populate: {
          path: "subSubCategories", // virtual populate
          select: ["subSubCategoryName", "slug"],
        },
      });

    let resObj = {
      status: 1,
      data,
    };

    res.send(resObj);
  } catch (error) {
    console.log(error);
  }

  // let test = await subCategoryModel
  //   .findOne({ _id: "684140d46e8fdd7cd32923f5" }) // Topwear ID
  //   .populate("subSubCategories");
  // console.log(JSON.stringify(test, null, 2));

  // console.log("Data", data);
};

let menuData = async (req, res) => {
  // let homeProduct = req.query.homeProduct;
  let { slug } = req.params;
  console.log("slug :-", slug);

  let subSubCategorySlug = await subSubCategoryModel.findOne({ slug });
  console.log(subSubCategorySlug);

  let data = await productModel
    .find({ subSubCategory: subSubCategorySlug._id })
    .populate("parentCategory", "categoryName")
    .populate("subCategory", "subCategoryName")
    .populate("subSubCategory", "subSubCategoryName")
    .populate("productMaterial", "materialName")
    .populate("productColor", "colorCode");
  resObj = {
    status: 1,
    msg: "Home Product",
    staticPath: process.env.PRODUCTIMAGEPATH,
    data,
  };

  res.send(resObj);
};

module.exports = { sliderData, homeProduct, megaMenu, menuData };
