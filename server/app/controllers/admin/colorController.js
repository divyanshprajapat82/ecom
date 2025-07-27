const { colorModel } = require("../../models/colorModel")

let colorInsert = async (req, res) => {

    let { colorName, colorCode, colorOrder } = req.body

    // let obj
    try {

        let insertObj = {
            colorName,
            colorCode,
            colorStatus: true,
            colorOrder
        }

        let colorRes = await colorModel.insertOne(insertObj)

        let obj = {
            status: 1,
            msg: "Color Save",
            colorRes
        }
        res.send(obj)

    } catch (err) {
        let obj = {
            status: 1,
            msg: "error",
        }
        res.send(obj)
    }
    

}

let colorView = async (req, res) => {
    let colorRes = await colorModel.find()


    let obj = {
        status: 1,
        msg: "Color View",
        colorRes
    }

    res.send(obj)
}

let colorDelete = async (req, res) => {
    let { id } = req.params
    let delRes = await colorModel.deleteOne({ _id: id })

    let obj = {
        status: 1,
        msg: "Color Delete",
        delRes
    }

    res.send(obj)
}

let colorMultiDelete = async (req, res) => {
    let { ids } = req.body
    // console.log(ids);
    

    let delRes = await colorModel.deleteMany({ _id: ids })

    let obj = {
        status: 1,
        msg: "Color Delete",
        delRes
    }

    res.send(obj)
}

let colorUpdate = async (req, res) => {

    let {id} = req.params
    
    let {colorName, colorCode, colorOrder } = req.body


    let upObj = {
        colorName,
        colorCode,
        colorStatus: true,
        colorOrder
    }

    let colorRes = await colorModel.updateOne({_id:id},{$set: upObj})

    let obj = {
        status: 1,
        msg: "Color Save",
        colorRes
    }
    res.send(obj)
}

let singleColorView = async (req, res) => {
    let {id} = req.params
    let colorRes = await colorModel.findOne({_id:id})


    let obj = {
        status: 1,
        msg: "Color View",
        colorRes
    }

    res.send(obj)
}


module.exports = { colorInsert, colorView, colorDelete, colorMultiDelete, colorUpdate,singleColorView }