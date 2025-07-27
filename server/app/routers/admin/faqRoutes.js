let express = require("express")
const { faqUpdate, faqMultiDelete, faqDelete, singlefaqView, faqView, faqInsert } = require("../../controllers/admin/faqController")
let faqRoutes = express.Router()

faqRoutes.post("/insert", faqInsert)

faqRoutes.get("/view", faqView)
faqRoutes.get("/view/:id", singlefaqView)

faqRoutes.delete("/delete/:id", faqDelete)
faqRoutes.post("/multi-delete", faqMultiDelete)
faqRoutes.put("/update/:id", faqUpdate)


module.exports={faqRoutes}