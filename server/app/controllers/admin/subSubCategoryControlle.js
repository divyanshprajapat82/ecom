const { categoryModel } = require("../../models/categoryModel");
let fs = require("fs");
const { subCategoryModel } = require("../../models/subCategoryModel");
const { subsubCategoryModel, subSubCategoryModel } = require("../../models/subSubCategoryModel");

let subSubCategoryInsert = async (req, res) => {
  let {
    subSubCategoryName,
    parentCategory,
    parentSubCategory,
    subSubCategoryOrder,
  } = req.body;
  try {
    let insertObj = {
      subSubCategoryName,
      parentCategory,
      parentSubCategory,
      subSubCategoryStatus: true,
      subSubCategoryOrder,
    };

    if (req.file) {
      if (req.file.filename) {
        insertObj["subSubCategoryImage"] = req.file.filename;
      }
    }

    let categoryRes = await subsubCategoryModel.insertOne(insertObj);

    let obj = {
      status: 1,
      msg: "sub category Save",
      categoryRes,
    };

    res.send(obj);
  } catch (err) {
    let obj = {
      status: 0,
      msg: err,
    };
    console.error(err);

    res.send(obj);
  }
};

let subSubCategoryView = async (req, res) => {
  let searchObj = {};

  if (req.query.searchName != "") {
    searchObj["categoryName"] = {
      $regex: req.query.searchName,
      $options: "i",
    };
  }

  let data = await subsubCategoryModel
    .find()
    .populate("parentCategory", "categoryName")
    .populate("parentSubCategory", "subCategoryName");
  let obj = {
    status: 1,
    msg: "sub category View",
    staticPath: process.env.CATEGORYIMAGEPATH,
    data,
  };

  res.send(obj);
};

let parentCategory = async (req, res) => {
  let data = await subCategoryModel.find().select("categoryName");

  let obj = {
    status: 1,
    msg: "parentCategory View",
    data,
  };
  res.send(obj);
};

let parentSubCategory = async (req, res) => {
  let { subCategoryShow } = req.query;

  let data;

  if (subCategoryShow) {
    data = await subCategoryModel
      .find({
        parentCategory: subCategoryShow,
      })
      .select("subCategoryName");
  } else {
    data = await subCategoryModel.find({}).select("subCategoryName");
  }
  let obj = {
    status: 1,
    msg: "parentSubCategory View",
    data,
  };
  res.send(obj);
};

let subSubcategoryViewSingle = async (req, res) => {
  let { id } = req.params;

  let data = await subSubCategoryModel
    .findOne({ _id: id })
    .populate("parentCategory", "categoryName")
    .populate("parentSubCategory", "subCategoryName");

  let obj = {
    status: 1,
    msg: "category View",
    data,
  };

  res.send(obj);
};

// let changeStatus = async (req, res) => {
//   let { ids } = req.body;
//   let updateRes = await categoryModel.updateMany({ _id: ids }, [
//     {
//       $set: {
//         categoryStatus: { $not: "$categoryStatus" },
//       },
//     },
//   ]);

//   let obj = {
//     status: 1,
//     msg: "category View",
//     updateRes,
//   };

//   res.send(obj);
// };

// let categoryDelete = async (req, res) => {
//   let { id } = req.params;

//   let data = await categoryModel.deleteOne({ _id: id });

//   let obj = {
//     status: 1,
//     msg: "category Delete",
//     data,
//   };

//   res.send(obj);
// };

// let categoryMultyDelete = async (req, res) => {
//   let { ids } = req.body;

//   let categoryView = await categoryModel
//     .find({ _id: ids })
//     .select("categoryImage");

//   for (let v of categoryView) {
//     let deletePath = "uploads/category/" + v.categoryImage;
//     fs.unlinkSync(deletePath);
//   }

//   let data = await categoryModel.deleteMany({ _id: ids });

//   let obj = {
//     status: 1,
//     msg: "category Delete",
//     data,
//   };

//   res.send(obj);
// };

let subSubCategoryUpdate = async (req, res) => {
  let { id } = req.params;

  let {
    subSubCategoryName,
    parentCategory,
    parentSubCategory,
    subSubCategoryOrder,
  } = req.body;

  let udObj = {
    subSubCategoryName,
    parentCategory,
    parentSubCategory,
    subSubCategoryStatus: true,
    subSubCategoryOrder,
  };

  let data = await subSubCategoryModel.updateOne({ _id: id }, { $set: udObj });

  let obj = {
    status: 1,
    msg: "category Update",
    data,
  };

  res.send(obj);
};

module.exports = {
  subSubCategoryInsert,
  subSubCategoryView,
  parentCategory,
  parentSubCategory,
  subSubcategoryViewSingle,
  // changeStatus,
  // categoryDelete,
  // categoryMultyDelete,
  subSubCategoryUpdate,
};
