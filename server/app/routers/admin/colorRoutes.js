let express = require("express")
const { colorInsert, colorDelete, colorView, colorMultiDelete, colorUpdate, singleColorView } = require("../../controllers/admin/colorController")
let colorRoutes = express.Router()

colorRoutes.post("/insert", colorInsert)

colorRoutes.get("/view", colorView)
colorRoutes.get("/view/:id", singleColorView)

colorRoutes.delete("/delete/:id", colorDelete)
colorRoutes.post("/multi-delete", colorMultiDelete)
colorRoutes.put("/update/:id", colorUpdate)


module.exports={colorRoutes}