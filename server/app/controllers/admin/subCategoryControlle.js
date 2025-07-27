const { categoryModel } = require("../../models/categoryModel");
let fs = require("fs");
const { subCategoryModel } = require("../../models/subCategoryModel");

let subCategoryInsert = async (req, res) => {
  let { subCategoryName, parentCategory, subCategoryOrder } = req.body;
  try {
    let insertObj = {
      subCategoryName,
      parentCategory,
      subCategoryStatus: true,
      subCategoryOrder,
    };

    if (req.file) {
      if (req.file.filename) {
        insertObj["subCategoryImage"] = req.file.filename;
      }
    }

    let categoryRes = await subCategoryModel.insertOne(insertObj);

    let obj = {
      status: 1,
      msg: "sub category Save",
      categoryRes,
    };

    res.send(obj);
  } catch (err) {
    let obj = {
      status: 1,
      msg: "err",
    };

    res.send(obj);
  }
};

let subCategoryView = async (req, res) => {
  // let searchObj = {};

  // if (req.query.searchName != "") {
  //   searchObj["categoryName"] = {
  //     $regex: req.query.searchName,
  //     $options: "i",
  //   };
  // }

  let data = await subCategoryModel
    .find()
    .populate("parentCategory", "categoryName");
  let obj = {
    status: 1,
    msg: "sub category View",
    staticPath: process.env.CATEGORYIMAGEPATH,
    data,
  };

  res.send(obj);
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

let categoryViewSingle = async (req, res) => {
  let { id } = req.params;

  let categoryRes = await categoryModel.findOne({ _id: id });

  let obj = {
    status: 1,
    msg: "category View",
    categoryRes,
  };

  res.send(obj);
};

let changeStatus = async (req, res) => {
  let { ids } = req.body;
  let updateRes = await categoryModel.updateMany({ _id: ids }, [
    {
      $set: {
        categoryStatus: { $not: "$categoryStatus" },
      },
    },
  ]);

  let obj = {
    status: 1,
    msg: "category View",
    updateRes,
  };

  res.send(obj);
};

let categoryDelete = async (req, res) => {
  let { id } = req.params;

  let data = await categoryModel.deleteOne({ _id: id });

  let obj = {
    status: 1,
    msg: "category Delete",
    data,
  };

  res.send(obj);
};

let categoryMultyDelete = async (req, res) => {
  let { ids } = req.body;

  let categoryView = await categoryModel
    .find({ _id: ids })
    .select("categoryImage");

  // console.log(categoryView);

  for (let v of categoryView) {
    let deletePath = "uploads/category/" + v.categoryImage;
    // console.log(deletePath);
    fs.unlinkSync(deletePath);
  }

  let data = await categoryModel.deleteMany({ _id: ids });

  let obj = {
    status: 1,
    msg: "category Delete",
    data,
  };

  res.send(obj);
};

let categoryUpdate = async (req, res) => {
  let { id } = req.params;
  let { countryName, countryOrder } = req.body;

  let udObj = {
    countryName,
    countryStatus: true,
    countryOrder,
  };

  let countryRes = await categoryModel.updateOne({ _id: id }, { $set: udObj });

  let obj = {
    status: 1,
    msg: "category Update",
    countryRes,
  };

  res.send(obj);
};

module.exports = {
  subCategoryInsert,
  subCategoryView,
  parentCategory,
  categoryViewSingle,
  changeStatus,
  categoryDelete,
  categoryMultyDelete,
  categoryUpdate,
};
