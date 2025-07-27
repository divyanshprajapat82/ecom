const { materialModel } = require("../../models/materialModel");

let materialInsert = async (req, res) => {
  let { materialName, materialOrder } = req.body;
  try {
    let insertObj = {
      materialName,
      materialStatus: true,
      materialOrder,
    };

    let materiaRes = await materialModel.insertOne(insertObj);

    let obj = {
      status: 1,
      msg: "material Save",
      materiaRes,
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

let materialView = async (req, res) => {
  let searchObj = {};

  if (req.query.searchlName != "") {
    searchObj["materialName"] = {
      $regex: req.query.searchlName,
      $options: "i",
    };
  }

  let materialRes = await materialModel.find(searchObj);
  let obj = {
    status: 1,
    msg: "material View",
    materialRes,
  };

  res.send(obj);
};

let materialViewSingle = async (req, res) => {
  let { id } = req.params;

  let materialRes = await materialModel.findOne({ _id: id });

  let obj = {
    status: 1,
    msg: "material View",
    materialRes,
  };

  res.send(obj);
};

let changeStatus = async (req, res) => {
  let { ids } = req.body;

  let materialRes = await materialModel
    .find({ _id: ids })
    .select(`materialStatus`);

  for (let item of materialRes) {
    await materialModel.updateOne(
      { _id: item._id },
      { $set: { materialStatus: !item.materialStatus } }
    );
  }

  let obj = {
    status: 1,
    msg: "material Status",
    materialRes,
  };

  res.send(obj);
};

let materialMultyDelete = async (req, res) => {
  let { ids } = req.body;

  let materialRes = await materialModel.deleteMany({ _id: ids });

  let obj = {
    status: 1,
    msg: "material Deleted",
    materialRes,
  };

  res.send(obj);
};

let materialUpdate = async (req, res) => {
  let { id } = req.params;
  let { materialName, materialOrder } = req.body;

  let udObj = {
    materialName,
    materialStatus: true,
    materialOrder,
  };

  let materialRes = await materialModel.updateOne({ _id: id }, { $set: udObj });

  let obj = {
    status: 1,
    msg: "material Updated",
    materialRes,
  };

  res.send(obj);
};

module.exports = {
  materialInsert,
  materialView,
  materialViewSingle,
  changeStatus,
  materialMultyDelete,
  materialUpdate,
};
