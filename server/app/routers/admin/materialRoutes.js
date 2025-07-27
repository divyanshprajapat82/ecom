let express = require("express")
const { materialInsert, materialView, materialMultyDelete, materialUpdate, materialViewSingle, changeStatus } = require("../../controllers/admin/materialController")
let materialRoutes = express.Router()

materialRoutes.post("/insert", materialInsert)

materialRoutes.get("/view", materialView)

materialRoutes.get("/view/:id", materialViewSingle)

materialRoutes.post("/change-status", changeStatus)

materialRoutes.post("/multy-delete", materialMultyDelete)

materialRoutes.put("/update/:id", materialUpdate)

module.exports={materialRoutes}