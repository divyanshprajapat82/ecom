let express = require("express")
const { countryUpdate, countryMultyDelete, countryDelete, countryViewSingle, countryView, countryInsert } = require("../../controllers/admin/countryControlle")
let countryRoutes = express.Router()

countryRoutes.post("/insert", countryInsert)

countryRoutes.get("/view", countryView)

countryRoutes.get("/view/:id", countryViewSingle)

countryRoutes.delete("/delete/:id", countryDelete)

countryRoutes.post("/multy-delete", countryMultyDelete)

countryRoutes.put("/update/:id", countryUpdate)

module.exports={countryRoutes}