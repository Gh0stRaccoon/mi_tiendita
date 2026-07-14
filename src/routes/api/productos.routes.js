const express = require("express")
const { getAllProducts, createProduct } = require("../../controllers/api/productos.controllers.js")
const router = express.Router()

router.get("/productos", getAllProducts)
router.post("/productos", createProduct)

module.exports = {
    productsRoutes: router
}
