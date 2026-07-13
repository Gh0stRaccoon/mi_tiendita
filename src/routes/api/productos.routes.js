const express = require("express")
const { getAllProducts } = require("../../controllers/api/productos.controllers.js")
const router = express.Router()

router.get("/productos", getAllProducts)

module.exports = {
    productsRoutes: router
}
