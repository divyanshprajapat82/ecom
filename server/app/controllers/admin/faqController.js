
const { faqModel } = require("../../models/faqModel")

let faqInsert = async (req, res) => {

    let { faqQuestion, faqAnswer, faqOrder } = req.body

    // let obj
    try {

        let insertObj = {
            faqQuestion,
            faqAnswer,
            faqStatus: true,
            faqOrder
        }

        let faqRes = await faqModel.insertOne(insertObj)

        let obj = {
            status: 1,
            msg: "faq Save",
            faqRes
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

let faqView = async (req, res) => {
    let faqRes = await faqModel.find()


    let obj = {
        status: 1,
        msg: "faq View",
        faqRes
    }

    res.send(obj)
}

let faqDelete = async (req, res) => {
    let { id } = req.params
    let delRes = await faqModel.deleteOne({ _id: id })

    let obj = {
        status: 1,
        msg: "faq Delete",
        delRes
    }

    res.send(obj)
}

let faqMultiDelete = async (req, res) => {
    let { ids } = req.body
    // console.log(ids);
    

    let delRes = await faqModel.deleteMany({ _id: ids })

    let obj = {
        status: 1,
        msg: "faq Delete",
        delRes
    }

    res.send(obj)
}

let faqUpdate = async (req, res) => {

    let {id} = req.params
    
    let {faqQuestion, faqAnswer, faqOrder } = req.body


    let upObj = {
        faqQuestion,
        faqAnswer,
        faqStatus: true,
        faqOrder
    }

    let faqRes = await faqModel.updateOne({_id:id},{$set: upObj})

    let obj = {
        status: 1,
        msg: "faq Save",
        faqRes
    }
    res.send(obj)
}

let singlefaqView = async (req, res) => {
    let {id} = req.params
    let faqRes = await faqModel.findOne({_id:id})


    let obj = {
        status: 1,
        msg: "faq View",
        faqRes
    }

    res.send(obj)
}


module.exports = { faqInsert, faqView, faqDelete, faqMultiDelete, faqUpdate,singlefaqView }