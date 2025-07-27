const { countryModel } = require("../../models/countryModel");

let countryInsert = async (req, res) => {
    let { countryName, countryOrder } = req.body;
    try {
        let insertObj = {
            countryName,
            countryStatus: true,
            countryOrder,
        };

        let materiaRes = await countryModel.insertOne(insertObj);

        let obj = {
            status: 1,
            msg: "country Save",
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

let countryView = async (req, res) => {
    let countryRes = await countryModel.find()
    let obj = {
        status: 1,
        msg: "country View",
        countryRes
    };

    res.send(obj);
};

let countryViewSingle = async (req, res) => {

    let { id } = req.params

    let countryRes = await countryModel.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "country View",
        countryRes
    };

    res.send(obj);
}

let countryDelete = async (req, res) => {
    let { id } = req.params

    let countryRes = await countryModel.deleteOne({ _id: id })

    let obj = {
        status: 1,
        msg: "country Delete",
        countryRes
    }

    res.send(obj)
}

let countryMultyDelete = async (req, res) => {
    let { ids } = req.body

    let countryRes = await countryModel.deleteMany({ _id: ids })

    let obj = {
        status: 1,
        msg: "country Delete",
        countryRes
    }

    res.send(obj)
}

let countryUpdate = async (req, res) => {
    let { id } = req.params
    let { countryName, countryOrder } = req.body;

    let udObj = {
        countryName,
        countryStatus: true,
        countryOrder
    };


    let countryRes = await countryModel.updateOne({ _id: id }, { $set: udObj })

    let obj = {
        status: 1,
        msg: "country Update",
        countryRes
    }

    res.send(obj)
}

module.exports = { countryInsert, countryView, countryViewSingle, countryDelete, countryMultyDelete, countryUpdate };
